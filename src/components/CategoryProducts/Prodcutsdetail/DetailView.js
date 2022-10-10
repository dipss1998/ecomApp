import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './detailview.css'
import axios from 'axios';
import { addtowishlist, addedtowishlist } from '../../../redux/actions/cartActions';
import ProductDetail from './ProductDetail'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProductdetails, fetchProductDetail} from '../../../redux/actions/productActions'
import { Grid } from '@mui/material';
import ActionItem from './ActionItem';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
const WishlistButton = styled(Box)`
    marginRight: 200px;
    float:right
`;

const DetailView = () => {
    const [wishshow, setWishShow] = useState(false)
    const [product, setProduct] = useState(false)
    const {id} = useParams(); 
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.product)
    console.log('products', products)
    const fetchProductDetail = async (id) =>{
        const response = await axios
        .get(`http://localhost:8000/productdetails/product/${id}`)
        .catch((err)=>{
        })
                 setProduct(response.data.getproduct)
                 dispatch(getProductdetails(response))
    }

    useEffect(()=>{
    //    if (product && id !== product.id) 
        (fetchProductDetail(id));
        
    }, [])

   const addTowishlist = async(e)=>{ 
    await addedtowishlist(e._id) 
        dispatch(addtowishlist(e));
        setWishShow(!wishshow)    
    }

  return (
    <Component>
    { product && Object.keys(product).length &&
        <Container container> 
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <WishlistButton > 
                <Button  onClick={()=>addTowishlist(product)}> {!wishshow ?<FavoriteBorderIcon />:<FavoriteBorderIcon style= {{color:"red"}}/> }</Button>
            </WishlistButton>
                <Typography>{product.name}</Typography>
                   
                <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                   {product.numOfReviews},
                   
                    {product.ratings} Reviews
                    {/* {product.reviews && product.reviews[0]? {
                         
                    }} */}
                </Typography>
                <Typography>
                    <span style={{ fontSize: 28 }}>₹{product.price}</span>&nbsp;&nbsp;&nbsp; 
                    <p>
                        <b className = {product.stock <1 ? "redColor" : "greenColor"} />
                        {product.stock <1 ? "outOfStock" : "InStock"}
                    </p>
                </Typography>
                <ProductDetail product={product} />
            </RightContainer>
        </Container>
    }   
</Component>
 )
  
}

export default DetailView