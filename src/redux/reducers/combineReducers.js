import { combineReducers } from "redux";
import { productReducer, productdetailReducer } from "./productReducer";
const reducers = combineReducers({
    getallProducts : productReducer,
    product : productdetailReducer
})

export default reducers