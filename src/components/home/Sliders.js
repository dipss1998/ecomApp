import React, {useEffect} from 'react';
import { useSelector, useDispatch, getState } from 'react-redux'; // hooks
import Countdown from 'react-countdown';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { secondbannerData } from '../constants/data';
import { Button, Divider, Box, Typography } from '@mui/material';
import { styled } from '@mui/material';
import BannerCate from './BannerCate';
import axios from 'axios';
import { getProducts } from '../../redux/actions/productActions';

import {Link} from 'react-router-dom'
import { convertLength } from '@mui/material/styles/cssUtils';
const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Image = styled('img')({
    width: 150,
    height: 180,
    position: "fix",
    objectfit: "cover",
    margintop: 0,
    backgroundcolor: 'grey'
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`;

const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`;

const Timer = styled(Box)`
    color: #7f7f7f;
    margin-left: 50px;
    display: flex;
    align-items: center;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
`;
const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`;
const RenderTimer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const LastSlider = ({  timer, title }) => {

    const dispatch = useDispatch();
  const  products = useSelector((state) => state.getallProducts.products);
 
//   const {id, title, discount, url} = products
 
   const fetchProducts = async () =>{

  
      const response = await axios
      .get("http://localhost:5000/products").catch((err) => {
        console.log("error", err);
      });
      // console.log(response);
      dispatch(getProducts(response.data))
      
      
  };

  useEffect(()=>{
    fetchProducts();
  }, [])

  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => {
      return <RenderTimer variant="span">{hours} : {minutes} : {seconds}  Left</RenderTimer>;
  };
    return (

        <>

            <Deal>
                <DealText>{title}</DealText>
                {
                    timer && <Timer>
                                <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </Timer>
                }
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                  swipeable={false}
                  draggable={false}
                  responsive={responsive}
                  centerMode={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  showDots={false}
                  containerClass="carousel-container"
                  // removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"

            >

                {
                    products.map(temp => (
                        <Link to={`product/${temp.id}`} style={{textDecoration: 'none'}}>
                             <Box textAlign="center" style={{ padding: '15px 15px' }}>
                                    <Image src={temp.url} />
                                    {/* <Text style={{ fontWeight: 600, color: '#212121' }}>{temp.title.shortTitle}</Text>  */}
                                    <Text style={{ color: 'green' }}>{temp.discount}</Text>
                                    <Text style={{ color: '#212121', opacity: '.6' }}>{temp.tagline}</Text>
                            </Box> 
                        </Link>
                    ))
                }   
            </Carousel>
        </>
    )
}


export default LastSlider