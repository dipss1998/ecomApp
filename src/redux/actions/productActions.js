// import Get_PRODUCT_FAIL from '../constants/productfailConstants'
// import GET_PRODUCT_DETAILS_SUCCESS from '../constants/getProductsdetails'
// import products from '../../../../EcomBackend/models/products'
import axios from 'axios'
import actionTypes from '../constants/actionTypes'

 const url = "http://localhost:5000"
 
export const fetchProducts = () => async(dispatch) => {
        const response = await axios.get(`${url}/getProducts/getProducts`)
        dispatch({type:actionTypes.FETCH_PRODUCTS_SUCCESS, payload: response})
    }    



export const getProducts = (products) => {

    // console.log(products);
    return {
        type:actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
       
    }

}

export const getProductdetails = (product) => {
    return {
        type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: product
    }

}