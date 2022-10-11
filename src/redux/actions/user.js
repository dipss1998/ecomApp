import actionTypes from '../constants/actionTypes'

export const profilepic =  (pic) => {
  //  console.log(user);
    return {
        type:actionTypes.USER_PROFILE_PIC,
        payload:pic
    }
}
