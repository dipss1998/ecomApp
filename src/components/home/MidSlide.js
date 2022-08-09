import React from 'react'
import LastSlider from './Sliders'
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const Component = styled(Box)`
    display: flex;
`


const MidSlide = ({ products, title, timer }) => {

    // const dispatch = useDispatch();
    // const  {products}  = useSelector((state) => state.getallProducts);
    // console.log( "kjdsbfjhfbjf" , products)
   
    //  const fetchProducts = async () =>{
  
    
    //     const response = await axios
    //     .get("http://localhost:5000/getProducts").catch((err) => {
    //       console.log("error", err);
    //     });
    //     // console.log(response);
    //     dispatch(getProducts(response.data))
    //     console.log(response);
        
    // };
  
    // useEffect(()=>{
    //   fetchProducts();
    // }, [])



    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
   <>
        <Component>
            <LeftComponent>
            <LastSlider
            products={products} 
            title={title}
            timer={timer} 
           
           
          />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} style={{width: 217}} />
            </RightComponent>
        </Component>
   
   </>
  )
}

export default MidSlide