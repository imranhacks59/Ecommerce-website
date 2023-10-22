import React,{ Fragment, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/Layout/Footer/Footer';
import WebFont from "webfontloader"
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignup from './user/LoginSignup';
import Cart from './component/Cart/Cart';
import store from './store'
import { loadUser } from './actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './user/Profile';
import ProtectedRoute from './component/Route/ProtectedRoute';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from './component/Cart/Payment';
import axios from 'axios';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from './component/Cart/Success';
import NotFound from './component/Layout/pageNotFound/NotFound'
function App() {

  const {isAuthenticated,user} = useSelector((state)=>state.user);
  const [stripeApiKey,setStripeApiKey]=useState('');
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    console.log(data.stripeApiKey)
    setStripeApiKey(data.stripeApiKey);
  }
  const dispatch=useDispatch()
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Roboto','Droid Sans', 'Droid Serif']
      }
    });
   store.dispatch(loadUser());
  // dispatch(loadUser())
   getStripeApiKey();
  },[])

  return (
    <Router>
        {/* <Header  /> */}
        {/* { isAuthenticated && <UserOptions /> } */}
        {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute path="/process/payment" component={Payment} />
        </Elements>
        )} */}
        <Routes>

        <Route exact path='/' element={<Home />} />
        
        <Route path='/product/:id' element={<ProductDetails />} />

        <Route path='/products' element={<Products />} />
    

        <Route path='/search' element={<Search />} />

        <Route path='/login' element={<LoginSignup />} />
       
        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}> */}
          <Route path="/account" element={<Profile />} />
          <Route path='/cart' element={<Cart />}  />
          <Route path='/shipping' element={<Shipping />}  />
          <Route path="/confirm/order" element={<ConfirmOrder />}  />
         
        {/* </Route> */}
        <Route path='*'  element={<NotFound name='Page' />} />
        </Routes>
       

        {/* <Footer /> */}
    </Router>
  );
}

export default App;
