const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// passwaord bcrypt 
// schema save hone se pehle ye chalga aur async function le rhe callback bhi le skte the but arror function me this kam nhi krega

userSchema.pre("save", async function(next){
    // use if password not modified this should be hashed again
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10) //10 is salt value how your password willbe strong

})

// JWT TOKEN 
// if register then token generate and login
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{ //yaha se secret token generate ho jayega agar kisi ke hath laga to koi bhi login kr skta hai token se to nivhle line me usko expires kar denge kuch time jaise kisi website ham dekhte hai waha se jane ke bad ho jata hai
        expiresIn: process.env.JWT_EXPIRE,
    })
}
// compare password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
module.exports = mongoose.model("User", userSchema);
