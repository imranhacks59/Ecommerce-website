const  mongoose = require('mongoose')
const Product = require("./productModels");
const User = require("./userModel");

const cartSchema = new mongoose.Schema({
    products:[
        {
            product:{
                type:mongoose.Schema.ObjectId,
                ref:Product,
                required:true
            },
            name:{
               type:String,
               required:true 
            },
            price:{
                type:String,
                required:true
            },
            quantity:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:User,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Carts',cartSchema)