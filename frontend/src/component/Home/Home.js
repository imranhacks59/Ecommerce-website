import React, { Fragment, useEffect } from 'react';
import './Home.css';
import Product from './Product';
import { useDispatch, useSelector,  } from 'react-redux';
import { getProduct } from '../../actions/productAction';

const Home = () => {

  const {products} = useSelector((state)=>state.products)
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(getProduct)
  },[dispatch])
  return (
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
        <Product products={products} />
        <Product products={products}/>
        <Product products={products} />
        <Product products={products}/>
        <Product products={products}/>
        <Product products={products}/>
        </div>
        

    </Fragment>
  )
}

export default Home
