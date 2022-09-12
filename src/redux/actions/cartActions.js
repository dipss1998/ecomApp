import { useState, useEffect } from 'react';
import actionTypes from '../constants/actionTypes';
import axios from 'axios';

//add to cart
export const addToCart = async (id , quantity) => {


         const {response} = await axios.get("http://localhost:5000/carts/cart")
        console.log(response);
        return{
            type:actionTypes.ADD_TO_CART,
            payload:{id, quantity}
        }
}

  //setInpval({id:item.data.id, quantity:item.data.quantity})
 // console.log(item);


//  export const addToCart = async (item) => {
//     const user =  JSON.parse(window.localStorage.getItem('user'));
//     const userId = user._id
//       const { _id, quantity} = e.data;
//       console.log('_id', _id)
//       await fetch("http://localhost:5000/carts/cart", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//          userId,
//          product:_id,
//         quantity
//         })
//     })
//     const res = await data.json();
//    console.log("this is res data",res);
// const response = await axios
// .get("http://localhost:5000/carts/cart").catch((err) => {
//   console.log("error", err);
// });

//    return{
//                 type:actionTypes.ADD_TO_CART,
//                 payload:item
//             }
//     }
       

//remove to cart
export const removefromCart = (item ,id, quantity ) => {
    return{
        type:actionTypes.REMOVE_TO_CART,
        payload:item
        // {id, quantity}
    }
}

export const removefromCartAllProducts = (id, quantity ) => {
    return{
        type:actionTypes.REMOVE_ALL_TO_CART,
        payload:{id, quantity}
    }
}

//ADD TO WISLIT
export const addtowishlist = (product) =>{
    return {
        type:actionTypes.ADD_TO_WISHLIST,
        payload:{product}
    }
}

//         const  response  = await axios.get(`http://localhost:5000/carts/cart`);

//         dispatch({ type:actionTypes.ADD_TO_CART, payload: response });
        
//         console.log(response);

//     } catch (error) {
//         console.log('Error while calling addToCart API');
//     }
// };

