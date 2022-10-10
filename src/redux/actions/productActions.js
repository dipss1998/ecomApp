import axios from 'axios'
import actionTypes from '../constants/actionTypes'
const url = "http://localhost:8000"
 
export const getProducts = () => async(dispatch) => {
    try {
        dispatch({type:actionTypes.FETCH_PRODUCTS_REQUEST})

        const response = await axios.get(`${url}/getallproducts/getallproducts`)
        dispatch({type:actionTypes.FETCH_PRODUCTS_SUCCESS, payload: response})
        
    } catch (error) {
        dispatch({
            type:actionTypes.FETCH_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
} 

export const clearError = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    }
}
export const getProductdetails = (product) => {

    console.log(product);
    return {

        type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: product
       
    }

}

// export const getProductdetails = (id) => async (dispatch) => {
//     try {
//         dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})

//         const response = await axios.get(`${url}/productdetails/product/${id}`)
//         dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: response})
        
//     } catch (error) {
//         dispatch({
//             type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
//             payload:error.response.data.message
//         })
//     }
// }