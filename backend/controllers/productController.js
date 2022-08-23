const Product= require("../models/productModels");
const Errorhandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create product --Admin
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product= await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
})

// get all products
exports.getAllProducts=catchAsyncErrors( async (req,res)=>{
    const products = await Product.find()
    res.status(200).json({
        success:true,
        products
})
})

// get product details
exports.getProductDetails =catchAsyncErrors( async (req,res,next)=>{

    const product = await Product.findById(req.params.id);
    // change this and all error with error handler
    // if(!product){
    //     return res.status(500).json({
    //         success:false,
    //         message:"product not found"
    //     })
    // }
    if(!product){
        return next(new Errorhandler("product not found",404));
    }

    res.status(200).json({
        success:true,
        product
    })

})
// update product --Admin
exports.updateProduct =catchAsyncErrors( async (req,res,next)=>{
    let product= await Product.findById(req.params.id);

    if(!product){
        return next(new Errorhandler("product not found",404));
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
})

// Delete product

exports.deleteproduct =catchAsyncErrors( async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new Errorhandler("product not found",404));
    }

    await product.remove();
    
    res.status(200).json({
        success:true,
        message:"product delete successfully"
    })
})