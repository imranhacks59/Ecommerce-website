import React,{ Fragment, useEffect, useState } from 'react';
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
import UserOptions from './component/Layout/Header/UserOptions';
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
        <Header  />
        { isAuthenticated && <UserOptions /> }
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
        {/* <Route path='/cart' element={<Cart />}  /> */}
        {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute path="/process/payment" component={Payment} />
        </Elements>
        )} */}
        {/* children passing */}
       {/* <Route   
        path="/account"
        element={
        <ProtectedRoute >
        <Profile />  
        </ProtectedRoute>
        }
      /> */}
     {/* we can also do using outlet to look less and more readable */}
        {/* <Route
        path="/shipping"
        element={
        <ProtectedRoute >
        <Shipping />
        </ProtectedRoute>
        }
       />
       <Route
        path="/confirm/order"
        element={
        <ProtectedRoute >
        <ConfirmOrder />
        </ProtectedRoute>
        }
       />
      
       <Route
        path="/success"
        element={
        <ProtectedRoute >
        <Success />
        </ProtectedRoute>
        }
       /> */}
       {/* <Route element={ <ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/account' element={<Profile />} />
          <Route path='/success' element={<Success/>} />
          <Route path='/cart' element={<Cart />}  />
       </Route>   */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/account" element={<Profile />} />
          <Route path='/cart' element={<Cart />}  />
          <Route path='/shipping' element={<Shipping />}  />
          <Route path="/confirm/order" element={<ConfirmOrder />}  />
         
        </Route>
       
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
