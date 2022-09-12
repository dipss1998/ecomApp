import { ListItemAvatar } from '@mui/material'
import actionTypes from '../constants/actionTypes'


export const wishlistReducers = (state = {wishlistItems: []}, {type, payload} ) => {
    switch(type) {
        case actionTypes.ADD_TO_WISHLIST:
        return {   ...state, wishlistItems:  payload  };

        default:
            return state;
    }
}

export const cartReducers = (state = {cartItems:[]}, action ) => {
      const product = action.payload 
      console.log('product', product)    
  switch (action.type) {
            case actionTypes.ADD_TO_CART:   
            const exist = state.cartItems.filter((x)=>x.id === product.id);
           
            if(exist){
            //increse the quantity
            return state.cartItems.map((x)=>
            x.id === product.id ? {...x, quantity: x.quantity + 1}: x )
               
  }else {
    const product = action.payload;
    return [

     { ...state,
      cartItems : [...state.cartItems, product ]
      // {
      //   ...product,
      //   quantity: 1,
      // }
    }
    ]
  }
break;


               
          
            
            case actionTypes.REMOVE_TO_CART:
              // const itemId = action.payload;
                  const data = state.cartItems.filter((item)=> item.id !== action.payload)
                 console.log(state.cartItems);
                  return{
              ...state,
              cartItems: data
            };
            case actionTypes.REMOVE_ALL_TO_CART:
              const removecartdata = state.cartItems = [];
            return{
              ...state,
              cartItems: removecartdata
            }
            default:
                return state
        }
} 