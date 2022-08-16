import axios from 'axios';

const url = 'http://localhost:5000';

export const addAddress = async (address) => {
    try {
       return await axios.post(`${url}/address/address`, address)
       console.log("url",url)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}