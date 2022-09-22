import React, { useEffect }  from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import MidSection from './MidSection';
import Banner from './Banner';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import BannerCate from './BannerCate';
import LastSlider from './Sliders';
import Footer from './Footer';

import { useSelector, useDispatch, getState } from 'react-redux'; // hooks
import {  fetchProducts  } from '../../redux/actions/productActions';
 import {userdata} from '../../redux/actions/user'
import store from '../../redux/Store';
import MidSlide from './MidSlide';
// import GET_PRODUCTS_SUCCESS from '../../redux/constants/productsuccessConstants';
const Container = styled(Box)`
   padding: 0px 10px 0px 10px;
   background: #d9d9d9;
   background-size:cover;
      background-position:center;
      z-index: -1;
      position:relative;
    

  
   `;
const Content = styled(Box)`
margin-top: -490px;
      top:-1000px;
      paddingtop:50;
      overflow: hidden;
      data-flow-dir= "h";
      flex-flow:row-wrap;
      background-size:cover;
      background-position:center;
     

`;
const Home = () => {
const dispatch = useDispatch();
const  products = useSelector((state) => state.getallProducts.products);
  // const user = useSelector((state) =>state.userResuder.user)
  useEffect(()=>{
    dispatch(fetchProducts());
    // dispatch(userdata());
  }, [])
  // console.log( "kjdsbfjhfbjf" , products)
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
      </Container>
      <Content>
        <BannerCate />

        {/* <Typography> {name} </Typography> */}
         <MidSlide  />  
        {/* <MidSection/> */}
        <Box style={{ backgroundColor: "grey" }}>

                <LastSlider
                  
                  title='Discounts for You'
                  timer={false} 
                  multi={true} 
                
                />

                <LastSlider
                    
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <LastSlider
                    
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <LastSlider
                    
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
           

        </Box> 
        <Footer />
      </Content>



    </>

  )
}

export default Home