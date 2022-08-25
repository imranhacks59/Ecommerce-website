const Errorhandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

// register a user
exports.registerUser = catchAsyncErrors (async (req,res,next)=>{
    const {name,email,password} = req.body
    const user= await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: "this is a sdample id",
            url:"prifilePicUrl", 
        }
    });
    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        // user ---ab user ke jaga token bhej denge
        token
    });
});

// login user
exports.loginUser = catchAsyncErrors (async (req,res,next)=>{
    const {email,password} = req.body;

    // checking if user given password and email both
    if(!email || ! password){
        return next(new Errorhandler("Please enter Email and Password",400));

    }
    const user =await User.findOne({email}).select("+password"); //{email:email} but only one so we can give only email
    if(!user){
        return next(new Errorhandler("Invalid email or password",401));

    }
    const isPasswordMatched = user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new Errorhandler("Invalid email or password",401));

    }
    const token = user.getJWTToken();

    res.status(200).json({
        success:true,
        // user ---ab user ke jaga token bhej denge
        token
    }); 
});