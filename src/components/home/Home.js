import React, { useEffect }  from 'react'
import NavBar from './NavBar';
import MidSection from './MidSection';
import Banner from './Banner';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import BannerCate from './BannerCate';
import LastSlider from './Sliders';
import Footer from './Footer';
import { useSelector, useDispatch, getState } from 'react-redux'; // hooks
import { getProducts as listProducts  } from '../../redux/actions/productActions';
// import {data} from '../redux/actions/productActions'
import store from '../../redux/Store';
import MidSlide from './MidSlide';
import GET_PRODUCTS_SUCCESS from '../../redux/constants/productsuccessConstants';
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

  // useEffect(()=>{
  //    const {data} = store.dispatch(getProducts())
  //     console.log(getProducts(data));

  // }, [])

  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);

  const { products } = getProducts;
  console.log(products);
  
  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])

  

  store.subscribe(()=>{
    console.log("state change", store.getState());
  })

// console.log(getProducts);
//   const getProducts = store.dispatch({
//   type: GET_PRODUCTS_SUCCESS,
//   payload:getProducts()
// })
// console.log(getProducts());

  return (

    <>
      <NavBar />
      <Container>
        <Banner />

      </Container>
      <Content>
        <BannerCate />
        {/* <MidSlide products={products} />
        <MidSection/>
        <Box style={{ backgroundColor: "grey" }}>

                <LastSlider
                  data={products} 
                  title='Discounts for You'
                  timer={false} 
                  multi={true} 
                
                />

                <LastSlider
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <LastSlider
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <LastSlider
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
           

        </Box> */}
        <Footer />
      </Content>



    </>

  )
}

export default Home