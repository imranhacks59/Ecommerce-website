import React from "react"
import axios from 'axios';
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    CLEAR_ERRORS
  } from "../constants/productConstant"


//   get All products
  // export const getProduct =()=>
      export const getProduct
      =(keyword="",category,price=[0,25000],rating=0)=> 
      async(dispatch)=>{
      try{
          dispatch({type:ALL_PRODUCT_REQUEST})

            let link = `/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${rating}`;
          if(category){
            link=`/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${rating}&category=${category}`
          }
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

  export const newProductReview=(reviewData)=>async(dispatch)=>{
    try{
       dispatch({type:NEW_REVIEW_REQUEST})

       // let link=`/api/v1/product/${id}`
       const config = {
        headers: { "Content-Type": "application/json" },
      };
       const {data} = await axios.put(`/api/v1/review`,reviewData,config);
       dispatch({
         type:NEW_REVIEW_SUCCESS,
         payload:data.success
       })
    }catch(error){
     dispatch({
       type:NEW_REVIEW_FAIL,
       payload:error.response.data.message
     })
    }

 }

  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};