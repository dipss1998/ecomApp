import React,{useState} from 'react'
import { Box, Button, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Register from '../authpages/Signup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PowerSettingsNew } from '@mui/icons-material';
import { useNavigate , Link} from "react-router-dom";

const Component = styled(Menu)`
    margin-top: 5px;
`;
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;


const Profile = ({accounts, setAccounts}) => {

    const [open, setOpen] = useState(false);
    const history = useNavigate()
    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    };

        const handleClose = ()=>{
            setOpen(false)
        }


        const logout = () => {
            setAccounts('');
            localStorage.clear();
            history.push('/Signup')
        }
        
        return (
            <>
                <Box onClick={handleClick}><Typography style={{ marginTop: 2 }}>{accounts}</Typography></Box>
                <Component
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => { handleClose(); logout();}}>
                        <PowerSettingsNew fontSize='small' color='primary'/> 
                        <Logout>Logout</Logout>
                    </MenuItem>
                </Component>
            </>
        )    
    }

export default Profile