import axios from 'axios';

const url = 'http://localhost:8000';

export const userLogIn = async (users) => {
    try {
        console.log("url",url)
       return await axios.post(`${url}/login`, users)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const userSignUp = async (users) => {
    try {
        return await axios.post(`${url}/signup`, users)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

export const payUsingPayTm = async (data) =>{
    try {
        let response = await axios.post( `${url}/paytmpayment/paytmpayment`, data)
            return response.data
        
    } catch (err) {
        console.log('error while calling paytmpayment api', err);
    }
}
