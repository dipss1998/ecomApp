import { ListItemAvatar } from '@mui/material'
import actionTypes from '../constants/actionTypes'


// export const cartReducers = (state = {cartItems: []}, action) => {

//     switch(actionTypes) {

//         case actionTypes.ADD_TO_CART:

//             const item = action.payload;
//             console.log(item);

//             const existItem = state.cartItems.find(product => product.id === item.id);

//             if(existItem){
//                 return {
//                     ...state, cartItems: state.cartItems.map(data => data.product === existItem.product ? item : data)
//                 }
//             } else {
//                 return  { ...state, cartItems: [...state.cartItems, item]}
//             }
//         case actionTypes.REMOVE_TO_CART:
//             return {
//                 ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
//             }
//         default:
//             return state;
//     }
// }

export const cartReducers = (state = {cartItems:[]}, action ) => {
        switch (action.type) {
            case actionTypes.ADD_TO_CART:   
            
            

            const ItemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
            if(ItemIndex >=1){
              state.cartItems[ItemIndex].quantity +=1
            } else {
              const temp = {...action.payload, quantity : +1}
              return {
                ...state,
                cartItems : [...state.cartItems, temp]
              }
            }
          
             case actionTypes.REMOVE_TO_CART:
                  const data = state.cartItems.filter((item)=> item.id !== action.payload.id)
            return{
              ...state,
              cartItems: data
            }
            default:
                return state
        }
} 