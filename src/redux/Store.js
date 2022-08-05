import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import {createAction} from 'reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';

// import { cartReducer } from './reducers/cartReducer';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

export const reducer = combineReducers({
    // cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
})

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

// console.log(store);


export default store;