 const Product= require("../models/productModels");
const Errorhandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Apifeatures = require("../utils/apiFeatures");

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
   
//    return next(new ("not found",500))

    // pagination if 100 products then show diff page like 5
    const resultPerPage = 6;
    const ProductCount= await Product.countDocuments(); //frontend me kam ayenge

    const apiFeature = new Apifeatures(Product.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    // const products = await Product.find()
    // product.find( upar de hi diye hai to to idhar bhe denge to bakar ho jayegfa hme to query apiFeature se mil hi ja rha)
    const products = await apiFeature.query;

    res.status(200).json({

        success:true,
        products,
        ProductCount,
        resultPerPage

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

// Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
  
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };
  
    const product = await Product.findById(productId);
  
    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }
  
    let avg = 0;
  
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    product.ratings = avg / product.reviews.length;
  
    await product.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  });
  

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
  
    if (!product) {
      return next(new Errorhandler("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  });