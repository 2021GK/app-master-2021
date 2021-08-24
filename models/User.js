const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Molimo Vas unesite email adresu"],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Molimo Vas unesite validnu email adresu"]
    },

    password: {
        type: String,
        required: [true, "Molimo Vas unesite lozinku"],
        minlength: 6,
        select: false
        
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date
});

UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

UserSchema.methods.getSignedToken = function() {
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
  };
  
   UserSchema.methods.getResetPasswordToken = function() {
       const resetToken=crypto.randomBytes(20).toString("hex");

       this.resetPasswordToken= crypto.createHash("sha256").update(resetToken).digest("hex");
       this.resetPasswordExpire = Date.now() + 1000*60*60;

       return resetToken;


   }
const User = mongoose.model("User", UserSchema);

module.exports=User;