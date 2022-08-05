import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../constants/data';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';

import { styled } from '@mui/material';
import BannerCate from './BannerCate';
import { convertLength } from '@mui/material/styles/cssUtils';

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  marginTop:2,
  [theme.breakpoints.down('sm')]: {
      objectFit: 'cover',
      height: 100,
      marginTop:75,
      width:"100%"
  }
}));


const Banner = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
      //  style= {{zIndex:-99, margin-Top:20}}

      >

        {
          bannerData.map(image => (
            <Image src={image.url} alt="banner" id={image.id} />

          ))
        }


      </Carousel>

    </>
  )
}

export default Banner