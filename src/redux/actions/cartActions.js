import { useState, useEffect } from 'react';
import actionTypes from '../constants/actionTypes';
import axios from 'axios';

// export const addToCart = (id) => async (dispatch) => {
//     try { 
//         const  response  = await axios.get(`http://localhost:5000/product/${id}`);

//         dispatch({ type:actionTypes.ADD_TO_CART, payload: response });
        
//         console.log(response);

//     } catch (error) {
//         console.log('Error while calling cart API');
//     }
// };

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_TO_CART,
        payload: id
    })

};

//const [quantity, setQuantity ] = useState(0)
//add to cart
export const addToCart =  (productId, quantity,userId) => {
    console.log(productId);
        return{
            type:actionTypes.ADD_TO_CART,
            payload:{productId, quantity, userId}
        }
}

// const [inpval, setInpval] = useState({
//     id:"", quantity:""
//   });
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
//          productId:_id,
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
// export const removedfromCart = async (id, quantity) => {
//     console.log("id and quantity:",id, quantity)
//     //   const { id, quantity} = inpval;
//       const data = await fetch("http://localhost:5000/carts/deletecart", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "id":id
//         })
//     })
//     const res = await data.json();
//                   console.log("this is response:",res);
//     }
//ADD TO WISLIT
export const addtowishlist = (product) =>{
    return {
        type:actionTypes.ADD_TO_WISHLIST,
        payload:{product}
    }
}
// export const addToCart = (item) => async (dispatch) => {
//     try { 
//         const  response  = await axios.get(`http://localhost:5000/carts/cart`);

//         dispatch({ type:actionTypes.ADD_TO_CART, payload: response });
        
//         console.log(response);

//     } catch (error) {
//         console.log('Error while calling addToCart API');
//     }
// };

