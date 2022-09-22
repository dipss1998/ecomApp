import { useState, useEffect } from 'react';
import actionTypes from '../constants/actionTypes';
import axios from 'axios';

//add to cart
export const addToCart =  (item) => {
   
        return{
            type:actionTypes.ADD_TO_CART,
            payload:{id, quantity}
        }
}

  //setInpval({id:item.data.id, quantity:item.data.quantity})
 // console.log(item);
 export const addedToCart = async (e) => {
    const user =  JSON.parse(window.localStorage.getItem('user'));
    const userId = user._id
      const { _id, quantity} = e.data;
     
      await fetch("http://localhost:5000/carts/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
         userId,
         productId:_id,
           quantity
        })
    })
   // const res = await data.json();
                //  console.log("this is data",data);
    }

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
export const removedfromCart = async (productId) => {
    const user =  JSON.parse(window.localStorage.getItem('user'));
    const userId = user._id
  
    //   const { id, quantity} = inpval;
      const data = await fetch("http://localhost:5000/carts/deletecart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId, userId
        })
    })
    const res = await data.json();
               //   console.log("this is response:",res);
    }
//ADD TO WISLIT
export const addtowishlist = (userId, productId) =>{
    return {
        type:actionTypes.ADD_TO_WISHLIST,
        payload:{userId, productId}
    }
}
//whishlist api
export const addedtowishlist = async (productId) => {
    const user =  JSON.parse(window.localStorage.getItem('user'));
    const userId = user._id
   
    //   const { id, quantity} = inpval;
      const data = await fetch("http://localhost:5000/favourites/favourite", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId, userId
        })
    })
    const res = await data.json();
                
};

