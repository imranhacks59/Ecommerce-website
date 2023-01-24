import React, { Fragment } from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
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
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        </div>
        

    </Fragment>
  )
}

export default Home
