import React, {useState} from 'react';
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { addToCart, addedToCart } from '../../../redux/actions/cartActions';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '10px 0 0 80px',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '0px 20px',
    border: '1px solid #f0f0f0',
    width: '95%',
    marginLeft: '20',
    marginTop: 50,
    height: 300
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product, }) => {
    // const [userData, setUserData] = useState({});
     const user = JSON.parse(window.localStorage.getItem('user'));
    // const getUser = async()=>{
    //    const res = await fetch('http://localhost:5000/user/getUser', {
    //         method: 'POST', headers: {
    //             'Content-Type': 'application/json'},
    //             body: JSON.stringify({id:user._id}) 
    //           },)
    //    setUserData(await res.json())
    //        // console.log('response get user:', await res.json())
    // }
    // console.log('userData:', userData)
const publishableKey="pk_test_51LmCnkSA0lEKtKgzucaWDlWyhjp4on5WqKOGIZzcB19FzKIBKKyibzbpOWKkldqvcvBMgCDCowuoXIY39QVXJtqC00xW93sEPU"
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [orderObject, setOrderObject]=useState({
        "itemPrice":product.price,
        "taxPrice":36,
        "shippingPrice":100,
        "totalPrice":136+product.price,
        "orderItems":[
            {
                "product":product._id,
                "name":product.name,
                "price":product.price,
                "image":product.images[0].url,
                "quantity":1
            }
        ],
        "shippingInfo":{
            "address":"365",
            "city":"suart",
            "state":"gujarat",
            "country":"india",
            "pinCode":"394520",
            "phoneNo":"1258749630"
        },
        "paymentInfo":{
            "id":"sample payment",
            "status":"succeeded"
        }
    })
    const createOrder = () => {
        fetch('http://localhost:5000/order/order', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            'Authorization':`Bearer ${user.Token}`},
                body: JSON.stringify(orderObject) 
              },)
        .then(response => {
            navigate('/History')
            console.log('response create order:', response)
        })
        .catch(error => {
            console.log('error:', error)
        });
    }
     const getData = (token) => {

    //     return fetch(`http://localhost:5000/paytmpayment/pay`, {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     }).then(response => response.json()).catch(err => console.log(err))
    return fetch(`http://localhost:5000/stripe/pay`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
           amount:product.price,
            token
        })
    }).then(response => {console.log(response);if(response.status===200)createOrder()
       ;response.json()}).catch(err => console.log(err))
     }
    //const buyNow = () => {
        // getData({ amount: 500, email: 'abc@gmail.com' }).then(response => {
        //     var information = {
        //         action: "https://securegw-stage.paytm.in/order/process",
        //         params: response
        //     }
        //     post(information)
        // })   
   // }
    const addItemToCart = async (e) => {
        dispatch(addToCart(e));
        console.log("action items:", e._id)
        await addedToCart(e)
        navigate('/Cart');
    }
    return (
        <LeftContainer>
            <Image src={product.images[0].url} /><br />
            <StyledButton onClick={() => addItemToCart(product)} style={{ marginRight: 10, background: '#ff9f00' }} variant="contained">Add to Cart</StyledButton>
            {/* <Link to="/Checkout" style={{textDecoration:'none'}}>   */}
            
            {/* </Link> */}
            < StripeCheckout
            // style={{ backgroundImage: 'linear-gradient(rgb(125, 197, 238), rgb(0, 140, 221) 85%, rgb(48, 162, 228))', width:150, height:50 }} 
             stripeKey={publishableKey}
             amount={product.price}
             label="Buy now"
             token={getData}>
             <StyledButton style={{ background: '#fb641b' }} variant="contained"><Flash /> Buy Now</StyledButton> 
              </StripeCheckout>
        </LeftContainer>
    )
}

export default ActionItem;