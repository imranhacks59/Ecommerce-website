import {
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,
} from '../constants/userConstant'


export const userReducer=(state={user:{}},action)=>{
   switch(action.type){
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:    
    return{
       loading:true,
       isAuthenticated:false
    }

    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
        return{
            ...state,
            loading:false,
            isAuthenticated:true,
            user:action.payload
        }
    
    case USER_REGISTER_FAIL:    
    case USER_LOGIN_FAIL:
        return{
            ...state,
            loading:false,
            isAuthenticated:false,
            user:null,
            error:action.payload
        }
    default:
      return state;    
   }
}