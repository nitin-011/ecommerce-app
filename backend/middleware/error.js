const ErrorHandler = require("../utils/errorHandler");

module.exports = (err,req ,res,next)=>{
    err.statusCode = err.statusCode ||500;
    err.message = err.message || "internal server error";

    if(err.name==="CastError"){
        const message = `Resourse not found invalid:${err.path}`;
        err = new ErrorHandler(message,400)
    };

    if(err.code ===11000){
        const message = `Dupliocate ${Object.keyValue} Entered`
        err = new ErrorHandler(message,400)
    };
    
    if(err.name ==="JsonWebTokenError"){
        const message = `Json web token expired , try again`;
        err = new ErrorHandler(message,400)
    };
    
    if(err.name ==="TokenExpiredError"){
        const message = `Json Web Token expired , try again`
        err = new ErrorHandler(message,400)
    };


    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
