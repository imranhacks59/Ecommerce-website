import React, { Fragment } from 'react'
import productImage from "../../images/headphones.webp"
import "./Home.css"
import {Rating} from '@mui/material/';
// import Rating from 'material-ui-rating'
// import Rating from 'react-stars'



const Product = ({products}) => {


  const options={
    defaultValue:4 ,
    precision:0.5,
    readOnly:true
   };
  return (
    <Fragment>
      
         <div className='productCard'>
         <img src={productImage} alt="" />

           <p>T-shirts</p> 
            <div>
              {/* <Rating 
              value={2}
              count={5}
              edit={false}
              // onChange={ratingChanged}
              size={24}
              /> */}
              <Rating {...options} />
              <span className='productSpan'>(109 Reviews)</span>
            </div>
            
            <p>{products.title}</p>
         </div>
            
           
    </Fragment>
  )
}

export default Product
