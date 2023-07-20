import React, { useState } from 'react'
import './Shipping.css'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingInfo } from '../../actions/cartAction';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const {shippingInfo}=useSelector(state=>state.cart)
    const [address,setAddress]=useState();
    const [city,setCity]=useState();
    const [state,setState]=useState();
    const [number,setNumber]=useState();
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const shippingSubmit=(e)=>{
        e.preventDefault()
        dispatch(saveShippingInfo({address,city,state,number}))
        // console.log('address submitted')
       navigate('/confirm/order')
    }
  return (
    <div className='shippingContainer'>
        <div className=''>
            <form
            className='shippingForm'
            encType='multipart/form-data'
            onSubmit={shippingSubmit}
            >
             <input
             type='text'
             required
               placeholder='Enter you address'
               value={address}
               onChange={(e)=>setAddress(e.target.value)}
             />
             <input
               type='text'
               required
               placeholder='enter your city'
               value={city}
               onChange={(e)=>setCity(e.target.value)}
             />
             <input
              type='text'
              placeholder='enter your state'
              value={state}
              onChange={(e)=>setState(e.target.value)}
             />
             <input
              type='number'
              placeholder='enter your number'
              required
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
             />
            <input
             type='submit'
             value='Continue'
            />
            </form>
        </div>
    </div>
  )
}

export default Shipping