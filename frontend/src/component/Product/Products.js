import {  Pagination, Slider, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getProduct } from '../../actions/productAction';
import Product from '../Home/Product';
import './Products.css'
import Loader from '../Layout/Loader/Loader'
import { useParams } from 'react-router-dom';
// import Pagination from "react-js-pagination";


const Products = () => {
    // let {keyword} = props
  const {keyword} = useParams();
  console.log(keyword)
    const dispatch = useDispatch();
    const {loading,products,productsCount,resultPerPage} = useSelector((state)=>state.products);
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState([0,25000])
    const [ratings,setRatings] = useState(0);
    const [currentPage,setCurrentPage] = useState(1)
    console.log(productsCount,resultPerPage)
    const setCurrentPageNo = (event,value) => {
      setCurrentPage(value);
    };
    const categories=[ 
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",]
    console.log(products)

    // const keyword = match.params.keyword
    console.log('result per page'+resultPerPage)
    const changePrice=(event,newPrice)=>{
      setPrice(newPrice)
    }
    useEffect(()=>{

      dispatch(getProduct(keyword,category,price,ratings));
    },[dispatch,keyword,category,price,ratings])

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
               value={ratings}
               onChange={(e,newRating)=>{
                setRatings(newRating)}}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
                 
          </div>
          {/* <div className='pagination-box'>
            <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productCount}
            onChange={setCurrentPage}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
            />
          </div> */}
          <Pagination
           count={productsCount}
          //  defaultPage={currentPage}
           page={currentPage}
           onChange={setCurrentPageNo}
           shape="rounded"
           variant="outlined"
           color="primary"
           siblingCount={1}
           boundaryCount={1}
           />
     
         </Fragment>
         )
      }
    </Fragment>
   
  )
}

export default Products
