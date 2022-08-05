import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';
import { InputBase, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch, getState } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';

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


const Search = ({Products}) => {


  
const [text, setText ] = useState('');
const getText =(text)=>{
      setText(text)
  }
  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;
  console.log(products);


  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])


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
          text && <ListWrapper>
            {
              products.filter(product => product.title.lognTitle.toLowerCase().includes(text.toLowerCase())).map(product =>{
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={()=>setText('')}
                    style = {{textDecoration: 'none', color:'inherit'}}
                   
                  >
                    {product.title.longTitle}
                    </Link>
                </ListItem>
              })
            }

                </ListWrapper>
        }
         
    </SearchContainer>
  )
}

export default Search