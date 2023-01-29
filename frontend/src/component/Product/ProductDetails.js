import React, { useEffect, useState } from 'react'
import productImage from "../../images/headphones.webp"
import './ProductDetails.css'
import Carousel from 'react-material-ui-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'
import { useParams } from 'react-router-dom'
import { Rating } from '@mui/material'

const ProductDetails = () => {
  
  const {loading,error,product} = useSelector((state)=>state.productDetails);
  const {id} =useParams();
  const dispatch=useDispatch();
  const options={
    defaultValue:product.ratings,
                    precision:0.5,
                    readOnly:true
  }
  useEffect(()=>{
    
    dispatch(getProductDetails(id));
  },[dispatch])

  return (

    <div className='productDetailsContainer'>
      
        <div className='productdetails-1'>
         <div className='productDetailsImages'>
            <Carousel>
            {product.images &&
                  product.images.map((item, i) => (
                    <img
                     style={{width:200}}
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
            </Carousel>
         </div>
         </div> 
     
         <div  className='productdetails-2'>
          <div className='details-name'>
              <h2>{product.name}</h2>
             
          </div>
           <div className='details-star'>
               <Rating 
                    {...options}
               />
           </div>
           <div className='details-price'>
               <p>₹ {product.price}</p>
           </div>
           <div className='details-addCart'>
                  <p>Add to cart</p>
           </div>
           <div className='details-stock'>
              <p>In Stock</p>
           </div>
           <div className='details-description'>
              <p>lorem impsi djfjsd cjkdsbfjds bjsdfjsd bjsd</p>
           </div>
           <div className='details-submitReview'>
               <button>submit review</button>
           </div>
         </div>
        

    </div>
  )
}

export default ProductDetails
