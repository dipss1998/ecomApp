import React from 'react'
import { Box, Typography } from '@mui/material';
import { kitchenproducts } from '../constants/data';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import DetailView from './Prodcutsdetail/DetailView'
const Wrapper = styled(Box)`
    display:flex;
    margin: 10px 20px 10px 20px;
    top:50px;
   
`;
const Container = styled(Box)`
    margin:40px 20px 10px 20px;
    padding-Top: 20px;
    textDecoration:none;
  
`

const Image = styled('img')({
  width: 300,
  height: 300,
 


});

const KitchenCategory = () => {
  return (
    <>
    {
          kitchenproducts.map(kitcatdata=>(
            
         <Wrapper>
          
      
          {/* <Link to={`{kitcatdata.id}`} style={{textDecoration: 'none'}}> */}

             <Box>                
             <Image src={kitcatdata.url} id = {kitcatdata.id}/> 
            </Box>
          <Container >
             <Link to="/DetailView" > 
            
            <Typography   style={{textDecoration:'none', color:'inherit'}} variant='h4'>{kitcatdata.description}   {kitcatdata.id}</Typography>

               <Typography   style= {{textDecoration:'none', color:'inherit' }}>{kitcatdata.price} {kitcatdata.id}</Typography>
                </Link> 
          </Container>
           
               {/* </Link> */}
        </Wrapper>
        )

        )
        

        

    }
 
    </>
  )
}

export default KitchenCategory