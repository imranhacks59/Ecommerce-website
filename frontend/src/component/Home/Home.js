import React, { Fragment, useEffect } from 'react';
import './Home.css';
import Product from './Product';
import { useDispatch, useSelector,  } from 'react-redux';
import { getProduct,clearErrors } from '../../actions/productAction';
import Loader from '../Layout/Loader/Loader';
import {useAlert}  from 'react-alert'

const Home = () => {
  const alert = useAlert();
  const {loading,error,products} = useSelector((state)=>state.products)
  const dispatch = useDispatch();
  console.log(products)
  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct())
  },[dispatch])
  return (

   <Fragment>
    {
      loading ? ( <Loader />):
      (
        

        <Fragment>
        <div className='banner'>
            <p>Welcome to ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a>
                <button>
                    Scroll
                </button>
            </a>
        </div>
    
       
            <h2 className='homeHeading'>Featured Products</h2>
            <div className='homePageProducts'>
            {/* <Product products={products} />
            <Product products={products}/>
            <Product products={products} />
            <Product products={products}/>
            <Product products={products}/>
            <Product products={products}/> */}
            {
              products &&
              products.map((product)=>(
                <Product key={product._id} product={product} />
              ))
            }
            </div>
            
        
        </Fragment>
      )
    }
  </Fragment>
  )
}

export default Home
