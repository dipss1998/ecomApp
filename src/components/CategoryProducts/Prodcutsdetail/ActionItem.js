// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate, Link, useParams } from 'react-router-dom';
 import { payUsingPayTm } from '../../../service/api';
import { post } from '../../utils/paytm';
  import { addToCart, addedToCart } from '../../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '10px 0 0 80px',
    marginTop:0,
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '0px 20px',
    border: '1px solid #f0f0f0',
    width: '95%',
    marginLeft: '20',
    marginTop:50,
    height:300
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product }) => {

    // const [title, setTitle] = useState("")
    // const [url , setUrl] = useState('')
    // const [price , setPrice ] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate();
     
// const cartItem = useSelector((state) => state.product.product )
 

    const buyNow = async()=>{
        // const Amount = JSON.stringify(amount:"100")
        let response=  await payUsingPayTm({amount:"100",email:"malakardipy1998@gmail.com"})
        var information ={
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }

        post(JSON.stringify(information));
    }

    
//     const getData=(data)=>
//     {
  
//       return fetch(`http://localhost:5000/paytmpayment/paytmpayment`,{
//           method:"POST",
//           headers:{
//               Accept:"application/json",
//               "Content-Type":"application/json"
//           },
//           body:JSON.stringify(data)
//       }).then(response=>response.json()).catch(err=>console.log(err))
//     }
  
  
  
//       const buyNow=()=>
//       {
//   getData({amount:500,email:'abc@gmail.com'}).then(response=>{
   
//       var information={
//           action:"https://securegw-stage.paytm.in/order/process",
//           params:response
//       }
//     post(information)
  
//   })
// }


    // const [inpval, setInpval] = useState({
    //   id:"", quantity:""
    // });
    // setInpval({id:item.data.id, quantity:item.data.quantity})
    // console.log(item);
    // const addToCart = async (e) => {
    //     const { id, quantity} = inpval;
    //     const data = await fetch("http://localhost:5000/carts/cart", {
    //       method: "POST",
    //       headers: {
    //           "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //           id, quantity
    //       })
    //   })
    //   const res = await data.json();
    //                 console.log(res);
    //   }
      

            const addItemToCart = async (e) => {   
                dispatch(addToCart(e));
                console.log("action items:", e.data)
                await addedToCart(e)
                navigate('/Cart');
            }




    return (
        <LeftContainer>
            <Image src={product.data.detailUrl} /><br />
             <StyledButton onClick={() => addItemToCart(product)} style={{marginRight: 10, background: '#ff9f00'}} variant="contained">Add to Cart</StyledButton>
            {/* <Link to="/Checkout" style={{textDecoration:'none'}}>   */}
           <StyledButton onClick={()=>buyNow()}  style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton> 
           {/* </Link> */}
        </LeftContainer>
    )
}

export default ActionItem;