import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DetailView from './Prodcutsdetail/DetailView'

import { electronicproducts } from '../constants/data';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)`
    display:flex;
    margin: 10px 20px 10px 20px;
    top:50px;
   
`;
const Container = styled(Box)`
    margin:40px 20px 10px 20px;
    padding-Top: 20px;
`

const Image = styled('img')({
  width: 300,
  height: 300,
 


});
const ElectronicCategory = () => {
  return (
<>
    {
   
      electronicproducts.map(elecatdata=>(
         <Wrapper>
          <Box>
          <Image src={elecatdata.url}/>

          </Box>
            
            <Box>
                 <Image src={elecatdata.url}/>
            </Box>
            <Container>
                
               <Typography variant='h4'>{elecatdata.description}</Typography>
               <Typography>{elecatdata.price}</Typography>
    
            </Container>
               
        </Wrapper>
        )

        )
        // </Link>

        

    }
 
    </>  
    )
}

export default ElectronicCategory