import React from "react"
import axios from 'axios';
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL
  } from "../constants/productConstant"


//   get All products
  export const getProduct=()=>
                async(dispatch)=>{
      try{
          dispatch({type:ALL_PRODUCT_REQUEST})
              let link = 'jsonplaceholder.typicode.com/todos/'

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