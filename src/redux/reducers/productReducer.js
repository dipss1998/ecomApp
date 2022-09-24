import actionTypes from '../constants/actionTypes'
 
 const initalState = {
    products : [],
    loading : false,
    error : false
}

export const productReducer = (state = initalState,   {type, payload}) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
        return { 
            loading: true,
            products: []  }

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
        return { 
            loadig: false,
            products: payload  }

    case actionTypes.FETCH_PRODUCTS_FAIL:
        return { 
            loading:false,
            error: payload 
        }

    case actionTypes.CLEAR_ERROR:
        return {
            ...state,
            error: null
        }

    default:
        return state;
    }
}

export const productdetailReducer = (state = {product: {}}, {type, payload} ) => {
    switch (type) {
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            
            return {   ...state, product:  payload  };
    
        default:
            return state
    }
}