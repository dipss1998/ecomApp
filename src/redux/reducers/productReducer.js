import actionTypes from '../constants/actionTypes'
 
 const initalState = {
    products : []
}
export const productReducer = (state = initalState, {type, payload}) => {

    switch (type) {

        case actionTypes.GET_PRODUCTS_SUCCESS:
            // console.log("payload,", payload);

            return {  products: payload  }
  
        default:
           return state;
    }


}

// export const productdetailReducer = (state = { product: {}}, action) => {
    
//     switch(action.type){
       
//         case actionTypes.FETCH_PRODUCT_DETAILS_SUCCESS:
//             return {  product: {} }

//         default:
//             return state
//     }
// }

export const productdetailReducer = (state = {product: {}}, {type, payload} ) => {
    switch (type) {
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            
            return {   ...state, product:  payload  };
    
        default:
            return state
    }
}