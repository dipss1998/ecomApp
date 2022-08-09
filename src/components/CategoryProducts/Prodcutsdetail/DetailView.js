import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './detailview.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProductdetails} from '../../../redux/actions/productActions'
import { Grid } from '@mui/material';
import ActionItem from './ActionItem'
import {product} from '../../../redux/reducers/combineReducers'
const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {


 const {id} = useParams();

 const product = useSelector((state)=>state.product.product)
 const dispatch = useDispatch();

 console.log(product);
 const url = 'http://localhost:5000';

    const fetchProductDetail = async (id) =>{
        const response = await axios
        .get(`${url}/product/${id}`)
        .catch((err)=>{
            console.log("err", err);
        })
                dispatch(getProductdetails(response))
                console.log(response.data);
    }

useEffect(()=>{
    if (product.id && id !== "") 
       fetchProductDetail(id);
    
}, [product, id])

//   const   productt = "https://m.media-amazon.com/images/I/71-vsNgqZUL._AC_SX451_SY423_.jpg"

//  const {  title, price, _id, description } = product;

console.log(product);

  return (
  <h1>Hey</h1>

//     <Component>
    
//     { product && Object.keys(product).length &&
//         <Container container> 
//             <Grid item lg={4} md={4} sm={8} xs={12}>
//                 <ActionItem product={product} />
//             </Grid>
//             <RightContainer item lg={8} md={8} sm={8} xs={12}>
//                 {/* <Typography>{product.title.longTitle}</Typography> */}
//                 <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
//                     8 Ratings & 1 Reviews
//                 </Typography>
//                 <Typography>
//                     {/* <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;  */}
//                     <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
//                     <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
//                 </Typography>
              
//                <ProductDetail product={product} />
//             </RightContainer>
//         </Container>
//     }   
// </Component>
)
  
}

export default DetailView