import axios from 'axios';

const url = 'http://localhost:5000';

export const authenticateLogin = async (users) => {
    try {
        return await axios.post(`${url}/login`, users)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const authenticateSignup = async (users) => {
    try {
        return await axios.post(`${url}/signup`, users)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}
// export const getProductss = async () => {
//     try {
//         return await axios.post(`${url}/products`, user)
//     } catch (error) {
//         console.log('error while calling Signup API: ', error);
//     }
// }
