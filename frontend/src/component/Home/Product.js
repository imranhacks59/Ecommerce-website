import React, { Fragment } from 'react'
import productImage from "../../images/headphones.webp"
import "./Home.css"
import {Rating} from '@mui/material/';
// import Rating from 'material-ui-rating'
// import Rating from 'react-stars'
import {Link} from 'react-router-dom'


const Product = ({products}) => {


  const options={
    defaultValue:products.ratings,
    precision:0.5,
    readOnly:true
   };
  return (
    <Fragment>
        <Link to={`product/${products._id}`}>
         <div className='productCard'>
         <img src={products.images[0].url} alt={products.name} />

           <p>{products.name}</p> 
            <div>
              {/* <Rating 
              value={2}
              count={5}
              edit={false}
              // onChange={ratingChanged}
              size={24}
              /> */}
              <Rating {...options} />
              <span className='productSpan'>({products.ratings} Reviews)</span>
            </div>
            
            <p>{` ₹​ ${products.price}`}</p>
         </div>
         </Link>
            
           
    </Fragment>
  )
}

export default Product
