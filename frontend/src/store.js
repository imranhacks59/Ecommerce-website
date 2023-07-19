import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
    newReviewReducer,
    productDetailsReducer,
    productReducer
} from "./reducers/productReducer"
import { userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    newReview:newReviewReducer,
    user:userReducer,
    cart:cartReducer
})
const initialState={
    cart:{
        cartItems:localStorage.getItem('cartItems')?
        JSON.parse(localStorage.getItem('cartItems')):null
    }
}
console.log(reducer.products)
const middleware =[thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store