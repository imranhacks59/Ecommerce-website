const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Carts = require('../models/cartModels')
const Product = require('../models/productModels')
const user = require('../models/userModel')
exports.createCart=catchAsyncErrors(async(req,res,next)=>{
      const {productId,quantity} = req.body
      
      const product= await Product.findById(productId)
      const {name,price} = product
      const newCartItem = {
        productId,
        name,
        price,
        quantity,
        
      }
    //   const isAlreadyProduct=cartItem.products.find((item)=>
    //         item.product.toString()===req.productId
    //   )
    //   if(isProduct){
    //     cartItem
    //   }
    const cart = await Carts.findOne({productId:product._id});
    if(cart){
        cart.quantity +=quantity
        await cart.save();
    } else {
        Carts.create(newCartItem)
    }

    res.status(200).json({
        success:true,
        message:'Cart Updated Successfully'
    })
})