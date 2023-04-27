import React,{ Fragment, useEffect } from 'react';
import './App.css';
import Header from './component/Layout/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/Layout/Footer/Footer';
import WebFont from "webfontloader"
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignup from './user/LoginSignup';

function App() {

  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Roboto','Droid Sans', 'Droid Serif']
      }
    });

  },[])

  return (
    <Router>
        <Header  />
        
        <Routes>

        <Route exact path='/' element={<Home />} />
        
        <Route path='/product/:id' element={<ProductDetails />} />

        <Route path='/products' element={<Products />} />

        <Route path='/search' element={<Search />} />

        <Route path='/login' element={<LoginSignup />} />
        
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
