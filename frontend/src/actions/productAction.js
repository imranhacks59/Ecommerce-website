import React from "react"
import axios from 'axios';
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
  } from "../constants/productConstant"


//   get All products
  // export const getProduct =()=>
      export const getProduct=()=> async(dispatch)=>{
      try{
          dispatch({type:ALL_PRODUCT_REQUEST})

            let link = `/api/v1/products`;

         const {data} = await axios.get(link);
         
         dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        });
           
         
      }catch(error){
         dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
         })
      }
  }

  // get product details

  export const getProductDetails=(id)=>async(dispatch)=>{
     try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})

        // let link=`/api/v1/product/${id}`
        const {data} = await axios.get(`/api/v1/product/${id}`);
        dispatch({
          type:PRODUCT_DETAILS_SUCCESS,
          payload:data.product
        })
     }catch(error){
      dispatch({
        type:PRODUCT_DETAILS_FAIL,
      payload:error.response.data.message
      })
     }

  }

  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};