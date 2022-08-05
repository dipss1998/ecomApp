import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './detailview.css'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import getProductdetails from '../../../redux/Store'
import { Grid } from '@mui/material';
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'
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

        const dispatch = useDispatch();
        const { id } = useParams()
        const {loading, product} = useSelector(state=> state.getProductdetails)
        

        useEffect(()=>{

                if(product && id !== product.id)
            dispatch(getProductdetails(id))
        }, [dispatch, id, product, loading])



console.log(product);
  const   productt = "https://m.media-amazon.com/images/I/71-vsNgqZUL._AC_SX451_SY423_.jpg"





  return (
    // <Wrapper>
    //     <Box>
    //           <Imag src={productt}/>
    //           <Imag src={productt}/>
    //           <Imag src={productt}/>
    //           <Imag src={productt}/>
    //           <Imag src={productt}/>

    //       </Box>
    //     <Box>
    //         <Image src={productt}/>
    //     </Box>
    //     <Container>
      
    //         <Typography variant='h4'>ASUS Vivobook Pro 14X OLED (2021), 14" (35.56 cms) 2.8K OLED, AMD Ryzen 9 5900HX, 4GB NVIDIA GeForce RTX 3050 Ti Graphics, Laptop (16GB/1TB SSD/Office 2019/Windows 10/Black/1.45 Kg), M7400QE-KM046TS  </Typography>
    //         <Typography style= {{textDecoration:'none', fontWeight: 600}}>-32% ₹1,01,490.00</Typography>

    //            <Typography style= {{textDecoration:'none'}}>	
                    	
    //            EMI starts at ₹4,777. No Cost EMI available EMI options 
    //             </Typography>

    //         <Box>
    //              <table className='table'>
    //                 <tr className='tr'>
    //                     <td>Brand</td>
    //                     <td>ASUS</td>
                    
    //                 </tr>
                   
                  
    //                 <tr className='tr'>
    //                     <td>Series</td>
    //                     <td>VivoBook Pro 14X OLED (2021)</td>
    //                     <td>35.56 Centimetres </td>
    //                     <td>Black </td>
    //                     <td>1 TB</td>
    //                     <td>Ryzen</td>
                        
    //                 </tr>
    //             </table>
    //         </Box>

              
    //         </Container>
    //         <Box>
    //             <Typography>With exchange</Typography>
    //         </Box>
    // </Wrapper>

    <Component>
    <Box></Box>
    { product && Object.keys(product).length &&
        <Container container> 
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                <Typography>{product.title.longTitle}</Typography>
                <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                    8 Ratings & 1 Reviews
                </Typography>
                <Typography>
                    <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                    <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                </Typography>
                <ProductDetail product={product} />
            </RightContainer>
        </Container>
    }   
</Component>
)
  
}

export default DetailView