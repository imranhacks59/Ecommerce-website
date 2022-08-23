const Errorhandler= require("../utils/errorHandler");

module.exports=(err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internsal server error" ;
    
    // Wrong mongodb Id error
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid ${err.path}`;
        err = new Errorhandler(message,400);
    }
    res.status(err.statusCode).json({
        success: false,
        // error:err gies status code
        // if you will use err.stack it will show path for error
        error:err.message
    })
}