
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
   CLEAR_ERRORS,
} from "../constants/productConstant"

export const productReducer =(state={products:[]},action)=>{
     
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            return {
                loading:true,
                products:[]
            };

        case ALL_PRODUCT_SUCCESS:
            return{  
                loading:false,
                products :action.payload.products,
                productsCount: action.payload.ProductCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount,
            };
            
        case ALL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            };
            
        case CLEAR_ERRORS:
                return {
                  ...state,
                  error: null,
                };

        default :
        return state;    
    }
}

export const newReviewReducer=(state={},action)=>{
      
    switch(action.type){
        case NEW_REVIEW_REQUEST:
            return{
                ...state,
                loading:true,
                
            }
        case NEW_REVIEW_SUCCESS:
            return{
                loading:false,
                success:action.payload
            }
        case NEW_REVIEW_RESET:
            return{
                loading:false,
                ...state
            }    
        case NEW_REVIEW_FAIL:
            return{
                ...state,
           loading:false,
           error:action.payload
        }  
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }  
        default:
            return state        
    }
}

// review reducer
export const productDetailsReducer=(state={product:{}},action)=>{
      
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
                product:{}
            }
        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return{
           loading:false,
           error:action.payload
        }  
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }  
        default:
            return state        
    }
}



