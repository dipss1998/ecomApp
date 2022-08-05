// import React from 'react';
// import axios from 'axios';

// //  import * as actionTypes from '../constants/productConstants';
 import GET_PRODUCTS_SUCCESS from '../constants/productsuccessConstants';
 import  GET_PRODUCTS_FAIL from '../constants/productfailConstants';
 import {GET_PRODUCT_DETAILS_REQUEST} from '../constants/getProductsdetails'
import { GET_PRODUCT_DETAILS_SUCCESS } from '../constants/getProductsdetails';
import { GET_PRODUCT_DETAILS_FAIL } from '../constants/getProductsdetails';
import {GET_PRODUCT_DETAILS_RESET} from '../constants/getProductsdetails' ;
import store from '../Store';
// import * as packageInfo from '../../../package.json';
// // const URL = "http://localhost:8000";

// export const getProducts = () => async (dispatch) => {
//        try {
//            console.log('Hiiiiii')
//            const { data } = await axios.get(`http://localhost:8000/products`);
//            dispatch({ type: action.GET_PRODUCTS_SUCCESS, payload: data });
   
//        } catch (error) {
//            dispatch({ type: action.GET_PRODUCTS_FAIL, payload: error.response });
//        }
//    };

// export default getProducts

//  import * as actionTypes from '../constants/productsuccessConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
       
        const  {data}  = await axios.get(`http://localhost:8000/products`);
      
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
         console.log(data);
       
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FAIL, payload: error.response });
    }
    
    // console.log('Hiiiiii')
};

// export function  getProducts ({id, url, title, detailUrl, price, quantity, description, discount, tagline})  {
    
//     const  {data}  =  axios.get(`http://localhost:8000/products`);

     
//         try {
//             type:GET_PRODUCTS_SUCCESS;
//             payload:{
//                 id,url, 
//             }
//         } catch (error) {
//             type= GET_PRODUCTS_FAIL;
//         }
//     }


export const getProductDetails = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        // dispatch({ type:GET_PRODUCT_DETAILS_REQUEST });

        // console.log(data);

        dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};


export const removeProductDetails = () => (dispatch) => {
    
    dispatch({ type: GET_PRODUCT_DETAILS_RESET });

};
