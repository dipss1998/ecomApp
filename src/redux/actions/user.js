import actionTypes from '../constants/actionTypes'
import axios from 'axios';

export const userdata =  (user) => {
    return{
        type:actionTypes.USER,
        payload:user
    }
    console.log(user);

}
