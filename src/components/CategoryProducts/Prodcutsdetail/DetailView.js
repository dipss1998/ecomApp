import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './detailview.css'
import axios from 'axios';
import ProductDetail from './ProductDetail'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProductdetails, fetchProductDetail} from '../../../redux/actions/productActions'
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
 const dispatch = useDispatch();
 const product = useSelector((state)=>state.product.product)



 const url = `http://localhost:5000`


    const fetchProductDetail = async (id) =>{
        const response = await axios
        .get(`http://localhost:5000/product/${id}`)
        .catch((err)=>{
            console.log("err", err);
        })
                dispatch(getProductdetails(response))
                // console.log(response);
    }

useEffect(()=>{
    if (product && id !== product.id) 
    (fetchProductDetail(id));
    
}, [])

//   const   productt = "https://m.media-amazon.com/images/I/71-vsNgqZUL._AC_SX451_SY423_.jpg"

//   const {  title, price,  description, cost } = product;

// console.log(id);

  return (
  

    <Component>
    <Box></Box>
    { product && Object.keys(product).length &&
        <Container container> 
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                <Typography>{product.data.title.longTitle}</Typography>
                <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                    8 Ratings & 1 Reviews
                </Typography>
                <Typography>
                    <span style={{ fontSize: 28 }}>₹{product.data.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                    <span style={{ color: '#878787' }}><strike>₹{product.data.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{product.data.price.discount} off</span>
                </Typography>
                <ProductDetail product={product} />
            </RightContainer>
        </Container>
    }   
</Component>
 )
  
}

export default DetailView