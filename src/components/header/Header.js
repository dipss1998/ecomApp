import React,  { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton , ListItem,List, Drawer} from '@mui/material';
import { styled } from '@mui/material/styles';
import Search from './Search';
import logo from './../../imges/logo.png'
import CustomButtons from './CustomButtons';
import Home from '../home/Home';
import MenuIcon from '@mui/icons-material/Menu';
import NavBar from '../home/NavBar';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
    background:#808000;
    height:55px;
`;
const Component= styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration: none;
    color:inherit
`;

const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic;
`;
const CustomButton = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));


const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
}
);

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Header = () => {
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
   
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
  
    const [open, setOpen] = useState(false);

    const list = () =>(
        <Box style = {{width:200, }} onClick= {handleClose}>
            <List>
                <ListItem button>
                <CustomButtons/>
               <NavBar/>
                    
                </ListItem>
               
            </List>
{/* <List>
            <ListItem button>
               
               <NavBar />
                   
               </ListItem>

               </List> */}
        </Box>
    )
// const listt = ()=>(

//     <Box style = {{width:200, }} onClick= {handleClose}>
  
//                 <List>
//                 <ListItem button>
                
//                 <NavBar />
                    
//                 </ListItem>

//                 </List>
// </Box>

// )



    return (
    <div>
        <StyledHeader>
        {/* <AppBar> */}
            <Toolbar style= {{minHeight:55}}>
            <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
            </MenuButton>

    <Drawer
       open = {open}
       onClose={handleClose}
    >
        {list()} 
        {/* {listt()} */}
    </Drawer>
                <Component to="/">
                {/* <Box> */}
                    <img src={logo} alt= "logo" style={{width: 75}}/>
                    {/* </Box> */}
                    <Box style= {{display:'flex'}}>
                    <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search/>
                <CustomButton>
                    <CustomButtons/>
                    
                </CustomButton>
               
            </Toolbar>
        {/* </AppBar> */}
        </StyledHeader>
       
    </div>
  )
}

export default Header