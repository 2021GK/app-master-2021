const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err};

    error.message=err.message;


    if(err.code===11000) {
        const message = `Vec postoji korisnik registrovan sa ovom email adresom`;
        error=new ErrorResponse(message, 400);
    }

    if(err.name === "ValidationError") {
         const message=Object.values(err.errors).map(val =>val.message);
         error=new ErrorResponse(message, 400);
    }

    res.status(err.statusCode || 500).json({
        success: false, error: error.message || "Greska na serveru"
    });
}

module.exports=errorHandler;