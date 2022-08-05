import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
 import '../CategoryProducts/Prodcutsdetail/detailview.css'
// import Checkout from '../../checkout/Checkout';

const Container = styled(Box)`
    margin:40px 20px 10px 20px;
    padding: 20px 80px 20px 20px;
    
    
`;
const Wrapper = styled(Box)`
    display:flex;
    margin: 10px 20px 10px 20px;
    top:50px;
   
`;
const Image = styled('img')({
    width: 300,
    height: 300,
marginTop: 40 
   
  
  
  });
  const Imag= styled('img')({
    width: 100,
    height: 80,
    margin:5,
   
  
  
  });

const MyWishlist = () => {
    const   product = "https://m.media-amazon.com/images/I/71-vsNgqZUL._AC_SX451_SY423_.jpg"


    return (
      <Wrapper>
        
          <Box>
              <Image src={product}/>
          </Box>
          <Container>
        
              <Typography variant='h4'>ASUS Vivobook Pro 14X OLED (2021), 14" (35.56 cms) 2.8K OLED, AMD Ryzen 9 5900HX, 4GB NVIDIA GeForce RTX 3050 Ti Graphics, Laptop (16GB/1TB SSD/Office 2019/Windows 10/Black/1.45 Kg), M7400QE-KM046TS  </Typography>
              <Typography style= {{textDecoration:'none', fontWeight: 600}}>-32% ₹1,01,490.00</Typography>
  
                 <Typography style= {{textDecoration:'none'}}>	
                          
                 EMI starts at ₹4,777. No Cost EMI available EMI options 
                  </Typography>
  
              <Box>
                   <table className='table'>
                      <tr className='tr'>
                          <td>Brand</td>
                          <td>ASUS</td>
                      
                      </tr>
                     
                    
                      <tr className='tr'>
                          <td>Series</td>
                          <td>VivoBook Pro 14X OLED (2021)</td>
                          <td>35.56 Centimetres </td>
                          <td>Black </td>
                          <td>1 TB</td>
                          <td>Ryzen</td>
                          
                      </tr>
                  </table>
              </Box>
            
  
               <Link to="/Checkout">
                 
               <Button variant='standard' style={{backgroundColor:'yellow'}}> BuY Now</Button>
               </Link> 
              </Container>
              <Box>
                  <Typography>With exchange</Typography>
              </Box>
      </Wrapper>
    )
  }
export default MyWishlist