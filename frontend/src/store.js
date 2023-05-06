import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
    newReviewReducer,
    productDetailsReducer,
    productReducer
} from "./reducers/productReducer"
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    newReview:newReviewReducer,
    user:userReducer
})
console.log(reducer.products)
const middleware =[thunk]

const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store