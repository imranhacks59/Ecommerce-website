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
import UserOptions from './component/Layout/Header/UserOptions';
import Cart from './component/Cart/Cart';
import store from './store'
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import Profile from './user/Profile';
import ProtectedRoute from './component/Route/ProtectedRoute';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from './component/Cart/Payment';
function App() {

  const {isAuthenticated,user} = useSelector((state)=>state.user);
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Roboto','Droid Sans', 'Droid Serif']
      }
    });
   store.dispatch(loadUser())
  },[])

  return (
    <Router>
        <Header  />
        { isAuthenticated && <UserOptions /> }
        <Routes>

        <Route exact path='/' element={<Home />} />
        
        <Route path='/product/:id' element={<ProductDetails />} />

        <Route path='/products' element={<Products />} />
    

        <Route path='/search' element={<Search />} />

        <Route path='/login' element={<LoginSignup />} />
        <Route path='/cart' element={<Cart />}  />
       <Route
        path="/account"
        element={
      <ProtectedRoute >
      <Profile />
       </ProtectedRoute>
      }
      />
        <Route
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
        path="/process/payment"
        element={
        <ProtectedRoute >
        <Payment />
        </ProtectedRoute>
        }
       />
       {/* <ProtectedRoute>
          <Route path="/shipping" component={Shipping} />
        </ProtectedRoute> */}
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
