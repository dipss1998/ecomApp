import actionTypes from '../constants/actionTypes'
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

// export const removeFromCart = (id) => (dispatch) => {
//     dispatch({
//         type: actionTypes.REMOVE_TO_CART,
//         payload: id
//     })

// };

//add to cart
export const addToCart =  (item) => {
        return{
            type:actionTypes.ADD_TO_CART,
            payload:item
        }

console.log(item);
}



//remove to cart
export const removefromCart = (id, quantity ) => {
    return{
        type:actionTypes.REMOVE_TO_CART,
        payload:{id, quantity}
    }
  
       
       
    

}