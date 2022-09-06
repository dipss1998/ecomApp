import { useState, useEffect } from 'react';
import actionTypes from '../constants/actionTypes'
// export const addToCart = (id) => async (dispatch) => {
//     try { 
//         const  response  = await axios.get(`http://localhost:5000/product/${id}`);

//         dispatch({ type:actionTypes.ADD_TO_CART, payload: response });
        
//         console.log(response);

//     } catch (error) {
//         console.log('Error while calling cart API');
//     }
// };

// export const removeFromCart = (id) => (dispatch) => {
//     dispatch({
//         type: actionTypes.REMOVE_TO_CART,
//         payload: id
//     })

// };

//const [quantity, setQuantity ] = useState(0)
//add to cart
export const addToCart =  (item) => {
    console.log(item);
        return{
            type:actionTypes.ADD_TO_CART,
            payload:item
        }
}

// const [inpval, setInpval] = useState({
//     id:"", quantity:""
//   });
  //setInpval({id:item.data.id, quantity:item.data.quantity})
 // console.log(item);
 export const addedToCart = async (e) => {
    const user =  JSON.parse(window.localStorage.getItem('user'));
    const userId = user._id
    console.log("e", userId)
      const { _id, quantity} = e.data;
      
      await fetch("http://localhost:5000/carts/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
         userId, _id, quantity
        })
    })
   // const res = await data.json();
                //  console.log("this is data",data);
    }

//remove to cart
export const removefromCart = (id, quantity ) => {
    return{
        type:actionTypes.REMOVE_TO_CART,
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
// export const addtowishlist = (id, product) => async (dispatch) => {
//     try { 
//         const  response  = await axios.get(`http://localhost:5000/product/${id}`);

//         dispatch({ type:actionTypes.ADD_TO_WISHLIST, payload: response });
        
//         console.log(response);

//     } catch (error) {
//         console.log('Error while calling wishlist API');
//     }
// };

