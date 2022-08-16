import React, {useState} from 'react';
import {Box, Typography, Button, ButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles';
import { addToCart } from '../../redux/actions/cartActions';
  import { useDispatch } from 'react-redux';
 const Container = styled(Box)`
    display:flex;
    margin-Top:20px

 
 `;

const StyleButton = styled(Button)`
    border-radius : 50%;
    display:flex;
    
  

`;


const ButtonGrowth = ({item}) => {
  const dispatch = useDispatch()

  const addItemToCart = (e) => {   
    dispatch(addToCart(e));
 

}
const [ counter, setCounter ] = useState(1);

const handleIncrement = () => {
    setCounter(counter => counter + 1 );
};

const handleDecrement = () => {
    setCounter(counter => counter - 1 );
};



  return (
    <Container>
    <ButtonGroup variant="outlined" aria-label="outlined button group">
    
      <StyleButton onClick={() => handleDecrement()}  disabled={counter == 0}>-</StyleButton>
      <StyleButton disabled>{counter}</StyleButton>
      <StyleButton onClick={() => handleIncrement()} >+ </StyleButton>
    </ButtonGroup>
    </Container>
  )
}

export default ButtonGrowth