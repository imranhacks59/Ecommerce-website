import {
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL, 
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, 
    USER_LOGOUT_FAIL, USER_LOGOUT_SUCCESS,
} from '../constants/userConstant'


export const userReducer=(state={user:{}},action)=>{
   switch(action.type){
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
    case LOAD_USER_REQUEST:        
    return{
       loading:true,
       isAuthenticated:false
    }

    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:    
        return{
            ...state,
            loading:false,
            isAuthenticated:true,
            user:action.payload
        }
    case USER_LOGOUT_SUCCESS:
        return{
            loading:false,
            user:null,
            isAuthenticated:false
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
    case LOAD_USER_FAIL:
        return{
            loading:false,
            isAuthenticated:false,
            user:null,
            error:action.payload
        }
    case USER_LOGOUT_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payload
        }    
    default:
      return state;    
   }
}