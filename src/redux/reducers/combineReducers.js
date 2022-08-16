import { combineReducers,  } from "redux";
import { productReducer, productdetailReducer, } from "./productReducer";
import {cartReducers} from './cartReducers'
const reducers = combineReducers({
    getallProducts : productReducer,
    product : productdetailReducer,
     cart : cartReducers
})

export default reducers