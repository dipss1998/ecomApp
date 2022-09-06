import actionTypes from '../constants/actionTypes'

export const userdata =  (user) => {
    console.log(user);
    return{
        type:actionTypes.USER,
        payload:user
    }
}
