import { combineReducers,  } from "redux";
import { productReducer, productdetailReducer, } from "./productReducer";
import {cartReducers, wishlistReducers} from './cartReducers';
import { userReducer } from "./userReducer";
const reducers = combineReducers({
    getallProducts : productReducer,
    product : productdetailReducer,
    cart : cartReducers,
    user:userReducer,
    wishlist: wishlistReducers
})

export default reducers