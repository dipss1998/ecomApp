import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';
import { InputBase, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch, getState } from 'react-redux'; // hooks
// import { getProducts as listProducts } from '../../redux/actions/productActions';
import axios from 'axios'
import {getProducts} from '../../redux/actions/productActions'
const SearchContainer = styled(Box)`
    background: #fff;
    margin-left: 10px;
    border-radius: 10px;
    width: 30%;
    height: 60%;
    margin-top:0px;
    display:flex;
    flex-Direction: row;
    
`;

const InputSearchBase= styled(InputBase)`
    padding-left: 10px;
    width: 100%;
    margin: 5px auto;
`;

const SearchIconWrapper=styled(Box)`
    color: #333300;
    padding-top: 7px;
    padding-right:10px;
`;
 const ListWrapper = styled(List)`
      position: absolute;
      background: #ffffff;
      color:#000;
      marginTop: 36px;
 `;


const Search = () => {

 const [text, setText ] = useState('');
 const [open, setOpen] = useState(true)
 const getText =(text)=>{
      setText(text)
      setOpen(false)
  }

const {products} = useSelector((state) =>  state.getallProducts);

const dispatch = useDispatch();

 const fetchProducts = async () =>{


    const response = await axios
    .get("http://localhost:8000/getallproducts/getallproducts").catch((err) => {
    });
    dispatch(getProducts(response.data))
    
};



useEffect(()=>{
  fetchProducts();

}, [dispatch])


// console.log( products);
  return (
    <SearchContainer>
        <InputSearchBase
            placeholder='Search products'
            onChange={(e)=>getText(e.target.value)}
            value= {text}
           
        />
        <SearchIconWrapper>
          <SearchIcon/>
        </SearchIconWrapper>

         {
          text &&   <ListWrapper hidden={open}>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link 
                  to={`/product/${product.id}`} 
                  style={{ textDecoration:'none', color:'inherit'}}
                  onClick={() => setOpen(true)}  
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }  
        </ListWrapper>
        } 
         
    </SearchContainer>
  )
}

export default Search