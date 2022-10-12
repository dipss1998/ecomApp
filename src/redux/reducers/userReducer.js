import actionTypes from '../constants/actionTypes'
 
 const initalState = {
    pic : {}
}
export const userprofileReducer = (state = initalState, {type, payload}) => {

    switch (type) {

        case actionTypes.USER_PROFILE_PIC:
            // console.log("payload,", payload);

            return { ...state, payload  }
  
        default:
           return state;
    }


}