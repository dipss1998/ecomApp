import axios from 'axios';

const url = 'http://localhost:5000';
const user =  JSON.parse(window.localStorage.getItem('user'));
export const addAddress = async (address) => {
    try {
        console.log("url",url)
       return await axios.post(`${url}/updateProfile/updateUser`, address)
      
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}
export const updateInfo = async (profile) => {
    profile.id = user._id;
    try {
        console.log("url", profile)
       return await axios.post(`${url}/updateProfile/updateUser`, profile)
      
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}
export const updatePhoto = async (profile) => {
    try {
        console.log("photo", profile)
       return await axios.post(`${url}/updateProfile/updatePhoto`, profile)
      
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}
export const getUser = async (id) => {
    try {
        console.log("id get user", id)
       return await axios.post(`${url}/user/getUser`, {id})
      
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}