import { createStore , combineReducers , applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productsReducer, } from './reducers/productReducer';

const Reducer = combineReducers({
    products:productsReducer,
    productDetails:productDetailsReducer
 });

let initialState={};

const middleware = [thunk]

const store = createStore(
    Reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store