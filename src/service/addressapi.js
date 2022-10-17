import axios from 'axios';

const url = 'http://localhost:5000';
const user =  JSON.parse(window.localStorage.getItem('user'));

export const updateInfo = async (profile) => {
    profile.id = user._id;
    try {
        console.log("url", profile)
       return await axios.post(`/updateProfile/updateUser`, profile, {
        headers: {
          "Authorization" : `Bearer ${user.Token}`
        }
      })
      
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}
export const updateProfilePicture = async (photo) => {
    photo.id = user._id;
    try {
        console.log("profile picture api", photo)
       return await axios.post(`${url}/updateProfile/updatePhoto`, photo)
      
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}
export const updatePhoto = async (image) => {
    try {
        const formData= new FormData();
        formData.append('image', image)
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++", image)
      //  await axios.post(`${url}/updateProfile/updatePhoto`, image)
      await axios.post(`${url}/user/profilePhoto`, formData)
      
      
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