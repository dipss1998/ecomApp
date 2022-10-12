import { combineReducers,  } from "redux";
import { productReducer, productdetailReducer, } from "./productReducer";
import {cartReducers, wishlistReducers} from './cartReducers';
import { userprofileReducer } from "./userReducer";
const reducers = combineReducers({
    getallProducts : productReducer,
    product : productdetailReducer,
    cart : cartReducers,
    profilepic:userprofileReducer,
    wishlist: wishlistReducers
})

export default reducers