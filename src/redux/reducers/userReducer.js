import actionTypes from '../constants/actionTypes'
 
 const initalState = {
    user : {}
}
export const userReducer = (state = initalState, {type, payload}) => {

    switch (type) {

        case actionTypes.USER:
            // console.log("payload,", payload);

            return {  user: payload  }
  
        default:
           return state;
    }


}