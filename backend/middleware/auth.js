const Errorhandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel");
exports.isAuthenticateUser = catchAsyncErrors (async (req,res,next)=>{
    const {token} = req.cookies;

    // console.log(token); 
    if(!token){
        return next(new Errorhandler("Please login to access this resource",401));
    }
    const decodeData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decodeData.id);
    next();
})