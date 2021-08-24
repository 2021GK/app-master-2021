const crypto=require('crypto');
const User= require('../models/User');  
const ErrorResponse=require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res,next) => {
const {email, password} = req.body; 

try {
const user = await User.create({
    email, password
});

sendToken(user, 201, res);
} catch (error) {
next(error);
}};





exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
    return next(new ErrorResponse("Potrebno je uneti email adresu i lozinku", 400));}

try {
    const user = await User.findOne({ email }).select("+password");

if (!user) {
    return next(new ErrorResponse("Neispravni kredencijali", 401));
}
const isMatch = await user.matchPasswords(password);

if (!isMatch) {
    return next(new ErrorResponse("Neispravni kredencijali",401));}

    sendToken(user, 200, res);

} catch(error) {
    res.status(500).json({success: false, error: error.message});

}

};
exports.forgotPassword = async (req, res, next) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return next(new ErrorResponse("Neispravni kredencijali", 404));
      }
  
      const resetToken = user.getResetPasswordToken();
  
      await user.save();
  
      const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;
  
      const message = `
        <h1>Zatražili ste obnavljanje lozinke</h1>
        <p>Molimo Vas kliknite na link u nastavku koji će Vas odvesti na stranicu za unos nove lozinke:</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        <p> Link neće biti validan ukoliko se ne upotrebi u narednih 60 minuta </a>
      `;
  
      try {
        await sendEmail({
          to: user.email,
          subject: "Zahtev za obnavljanje loznike",
          text: message,
        });
  
        res.status(200).json({ success: true, data: "Email je poslat" });
      } catch (err) {
  
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
  
        await user.save();
  
        return next(new ErrorResponse("Email nije mogao da se pošalje", 500));
      }
    } catch (err) {
      next(err);
    }
  };

exports.resetPassword = async (req, res,next) => {
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");
        
        try {
            const user=await User.findOne({
                resetPasswordToken, resetPasswordExpire: {$gt: Date.now()}
            })
            if(!user) {
                return next(new ErrorResponse("Greška! Neuspešna promena lozinke",400));
            }

            user.password=req.body.password;
            user.resetPasswordToken=undefined;
            user.resetPasswordExpire=undefined;

            await user.save();
            res.status(201).json({success: true, data:"Uspešna promena lozinke!"});
        } catch {
            next(error);
        }
};

const sendToken = (user, statusCode, res) => {
    const token=user.getSignedToken();
    res.status(statusCode).json({success:true, token});
}