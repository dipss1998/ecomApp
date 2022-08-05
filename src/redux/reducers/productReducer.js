// import * as actionTypes from '../constants/productConstants';
import GET_PRODUCTS_SUCCESS from '../constants/productsuccessConstants';
import GET_PRODUCTS_FAIL from '../constants/productfailConstants';
import {GET_PRODUCT_DETAILS_REQUEST} from '../constants/getProductsdetails'
import { GET_PRODUCT_DETAILS_SUCCESS } from '../constants/getProductsdetails';
import { GET_PRODUCT_DETAILS_FAIL } from '../constants/getProductsdetails';
import {GET_PRODUCT_DETAILS_RESET} from '../constants/getProductsdetails'
import { getProducts } from '../actions/productActions';
    // const initialState= {
       
    // }

export const getProductReducer = (state = { products: []}, action) => {
    // switch(action) {
    //     case GET_PRODUCTS_SUCCESS:
    //         return {   products: action.payload.data }
            
    //     case GET_PRODUCTS_FAIL:
    //         return { error: action.payload }
    //     default:
    //         return state
    // }

    if(action.type === GET_PRODUCTS_SUCCESS){
        return {   products: action.payload.data }
        
    }else if(action.type === GET_PRODUCTS_FAIL){
        return { error: action.payload }
    }else{
        return state
    }
}
// const productt = getProductReducer(getProducts, GET_PRODUCTS_SUCCESS)
// console.log(productt);

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    switch(action){
        case GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GET_PRODUCT_DETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}