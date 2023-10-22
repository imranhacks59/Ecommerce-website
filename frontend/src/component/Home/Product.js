import React, { Fragment } from 'react'
import productImage from "../../images/headphones.webp"
import "./Home.css"
import {Rating} from '@mui/material/';
// import Rating from 'material-ui-rating'
// import Rating from 'react-stars'
import {Link} from 'react-router-dom'

const Product = ({product}) => {

  const options={
    defaultValue:product.ratings,
    precision:0.5,
    readOnly:true
   };
  return (
    <Fragment>
        <Link className='productCard' to={`/product/${product._id}`}>
        <div className=''>

         {/* <div className='productCard'> */}
         <img src={product.images[0].url} alt={product.name} />
        </div>
           <p>{product.name}</p> 
            <div>
              {/* <Rating 
              value={2}
              count={5}
              edit={false}
              // onChange={ratingChanged}
              size={24}
              /> */}
              <Rating {...options} />
              <span className='productSpan'>({product.ratings} Reviews)</span>
            </div>
            
            <p>{` ₹​ ${product.price}`}</p>
         {/* </div> */}
         </Link>
            
           
    </Fragment>
  )
}

export default Product
