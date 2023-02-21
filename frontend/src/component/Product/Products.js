import { Slider, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getProduct } from '../../actions/productAction';
import Product from '../Home/Product';
import './Products.css'
import Loader from '../Layout/Loader/Loader'
import { useParams } from 'react-router-dom';

const Products = () => {
    
  const {id} = useParams();
    const dispatch = useDispatch();
    const {loading,products} = useSelector((state)=>state.products);
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState([0,25000])
    const [rating,setRating] = useState(0);
    const categories=[ 
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",]
    console.log(products)
    const keyword = id

    const changePrice=(event,newPrice)=>{
      setPrice(newPrice)
    }
    useEffect(()=>{

      dispatch(getProduct(keyword,category,price,rating));
    },[dispatch,keyword,category,price,rating])

    return (
    <Fragment>
      {
         loading ? (<Loader />):(
            <Fragment>
            <div className='productsHeading'>Products</div>
             
            <div className='products'>
            {
             products && 
                products.map((product)=>(
                 <Product key={product._id} product={product} />
                ))
            }
            </div>
     
          <div className='filterBox'>
            <Typography>Price</Typography>
             
            <Slider
                 //   value={price}
                 //   onChange={priceHandler}
                   valueLabelDisplay="auto"
                   aria-labelledby="range-slider"
                   value={price}
                   onChange={changePrice}
                   min={0}
                   max={25000}
                 />
     
                 <Typography>Category</Typography>
                 
                <ul className='categoryBox'>
                 {categories.map((category)=>(
                   <li className='categoryLink'
                   key={category}
                   onClick={()=>setCategory(category)}
                   >{category}</li> 
                 ))}
                </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
               value={rating}
               onChange={(e,newRating)=>{
                setRating(newRating)}}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
                 
          </div>
     
         </Fragment>
         )
      }
    </Fragment>
   
  )
}

export default Products
