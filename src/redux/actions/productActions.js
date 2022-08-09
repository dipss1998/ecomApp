// import Get_PRODUCT_FAIL from '../constants/productfailConstants'
// import GET_PRODUCT_DETAILS_SUCCESS from '../constants/getProductsdetails'
// import products from '../../../../EcomBackend/models/products'


import actionTypes from '../constants/actionTypes'
export const getProducts = (products) => {
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