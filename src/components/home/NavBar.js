import React, {useState} from 'react';
import { navData } from '../constants/data';
import { AppBar, Toolbar, Box, Typography, List , ListItem, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import KitchenCategory from '../CategoryProducts/KitchenCategory';
import ElectronicCategory from '../CategoryProducts/ElectronicCategory'
import {Link} from 'react-router-dom'

const Wrapper = styled(Box)(({theme}) =>({
    display: "flex",
    flexDirection: "row", 
    background: "#080806",
   margin: "10px 0px 0px 0px",
   color: "black",
   height: "40px",
   justifyContent: "space-between",
   textAlign : "center",

   [theme.breakpoints.down('sm')]: {
      objectFit: 'cover',
     display: 'none',
     color: 'black'
  }


}));

 const Component= styled(Box)`
    padding: 10px 5px 10px 5px;
    text-transform: none;
    color:inherit;
    text-decoration: none;
 `;

 const Text= styled(Typography)`
    justify-content: space-between;
    margin-left: 2px;
    margin:right: 2px;
    font-weight: 600;
    color:white;
    
    text-decoration: none;
    font-size:14px;
   
 `;
const NavBar = () => {
//    const [open, setOpen] = useState(false);

//    const handleClose = () => {
//       setOpen(false);
//   }
//   const handleOpen = () => {
//    setOpen(true);
// }

   
//    const listt= () =>(
//       <Box style = {{width:200, }} onClick= {handleClose}>
//           <List>
//           <ListItem button>
                
//                 <NavBar/>
                    
//                 </ListItem>
//           </List>
//       </Box>
//   )
  return (
    
    <Wrapper>

{/* <Drawer
       open = {open}
       onClose={handleClose}
    >
       
        {listt()}
    </Drawer> */}
      {  navData.map(data=>(
            <Component >
               <Link to="/KitchenCategory" style = {{textDecoration:'none'}}><Text >{data.text1} </Text></Link>
               <Link to="/ElectronicCategory" style = {{textDecoration:'none'}}><Text >{data.text}</Text></Link> 


            </Component>
        ))}
    </Wrapper>
   
  )
}

export default NavBar