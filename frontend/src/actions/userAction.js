import {
    USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL
}
from '../constants/userConstant'
import axios from 'axios'

// export const userRegister=(name,email,password)=>async(dispatch)=>{
  export const userRegister=(userData)=>async(dispatch)=>{
    // export const userRegister=async(userData)=>{
    // console.log("dispatch data"+userData)
   try {
    dispatch({
        type:USER_REGISTER_REQUEST
       });

    // let link = 'api/v1/register';
    const config={
        headers:{
            // "Content-Type":"multipart/form-data"
            "Content-Type":"application/json"
        }
    }
    // const {name,email,password} = userData
    // console.log(name,email)
    const {data} = await axios.post(`/api/v1/register`,userData,config)
    dispatch({
        type:USER_REGISTER_SUCCESS,
        payload:data.user
    })  
   } catch (error) {
    dispatch({
        type:USER_REGISTER_FAIL,
        payload:error.response.data.message
    })
   }
}
export const userLogin = (email,password) => async (dispatch) => {
    try {
      
      dispatch({ type: USER_LOGIN_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(`/api/v1/login`, {email,password}, config);
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response.data.message,
      });
    }
  };