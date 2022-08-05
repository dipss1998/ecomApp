import React from 'react'

import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material';
import { padding } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 300,
  margin: 10,
  width:350,
  
  
}));

const Text = styled(Typography)`
justify-content: space-between;
margin-left: 2px;
color: black;
font-size: 20px;
font-weight: 600;
font-style: bold;

`;
const Image = styled('img')(({ theme }) => ({ 
  display: 'flex',
  margin: 0,
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('md')]: {
      objectFit: 'cover',
      height: 50,
      width: 50
  }
}));
const BannerCate = () => {
  const creditcart = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
  const prime = 'https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-teaser-GW_379x304_deals._SY304_CB631772745_.jpg';
  const laptop = ""
  const electonic = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
  const fresh = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg";
  const mobiles = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg";
  const Fashion = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg";
  const electonics = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
  const cleaningass = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg";
  const tyrerimcare = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
  const helmate = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg";
  const vaccume = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{marginTop:500}}>
        <Grid container spacing={4} lg={12} sm={12} md={12} xs={12}>
          <Grid  item lg={4} sm={6} md={4} xs={12}>
            <Item>

              <Text>Up to 70% off | Clearance store</Text>
              <Image src={electonic} style={{ height: 200, width: 300 }} />
              <Typography>see more</Typography>

            </Item>
          </Grid>
          <Grid item lg={4} sm={6} md={4} xs={12}  style={{ justifyContent:'space-between' }}>
            <Item>
              <Text>Upgrade your home | Amazon Brands & more</Text>
              <Image src={prime} style={{ height: 200, width: 300 }} />
              <Typography>see more</Typography>
            </Item>

          </Grid>
          <Grid item lg={4} sm={6} md={4} xs={12}>
            <Item>
              <Text>Up to 70% off | Clearance store</Text>
              <Image src={laptop} style={{ height: 200, width: 300 }} />
              <Typography>see more</Typography>
            </Item>
          </Grid>
          <Grid item lg={4} sm={6} md={4} xs={12}>
            <Item>
              <Text>Pay your credit card bills on Amazon</Text>
              <img src={creditcart} style={{ height: 200, width: 300 }} />
              <Typography>see more</Typography>
            </Item>
          </Grid>
          <Grid item lg={4} sm={6} md={4} xs={12}>
            <Item>
              <Text>Shop by Category</Text>
              <Box>

                <img src={fresh} style={{ height: 100, width: 125 }} />
                <img src={mobiles} style={{ height: 100, width: 125 }} />
              </Box>
              <Box>
                <img src={electonics} style={{ height: 100, width: 125 }} />
                <img src={Fashion} style={{ height: 100, width: 125 }} />
              </Box>
              <Typography>see more</Typography>
            </Item>          </Grid>
          <Grid item lg={4} sm={6} md={4} xs={12}>
            <Item>
              <Text>Automotive essentials | Up to 60% off</Text>
              <Box>

                <img src={helmate} style={{ height: 100, width: 125 }} />
                <img src={tyrerimcare} style={{ height: 100, width: 125 }} />
              </Box>
              <Box>
                <img src={cleaningass} style={{ height: 100, width: 125 }} />
                <img src={vaccume} style={{ height: 100, width: 125 }} />
              </Box>


              <Typography>see more</Typography>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </>
  );
}

export default BannerCate