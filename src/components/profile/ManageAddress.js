import React from 'react';
import { Dialog, DialogContent, TextField, Box, Button, Typography, styled, Card, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
//import ProfileSceen from './ProfileSceen';

const CardWrapper = styled(Card)`
        width:1000px;
        height:600px;
        margin: 80px auto;

`;

const Wrapper = styled(Box)`
    border:1px;
    bordercolor:black;
    color:black;
    outline:1px;
    margin:10px 20px 10px 20px;



`;

const ButtonWrapper = styled(Button)`
     width:500px;
     height:50px;
     margin:10px 20px 50px 20px;
`;

const ManageAddress = () => {
  return (
    <>

        {/* <Box>
            <ProfileSceen/>

        </Box> */}
    <Box>
        <CardWrapper>
        <Box>
        <ButtonWrapper variant="contained">
            <AddIcon/> Add Addres
        </ButtonWrapper>
        </Box>
        <Wrapper >
           
           <Box>
                <Typography   style={{fontSize:30,fontWeight:500, marginLeft:0}}>Home</Typography>
                <Box style={{display:'flex', marginLeft:30, }}>  
                    <TextField 
                        label="Home Address" 
                        placeholder="Home Address" 
                        disabled 
                        style={{width:800}}
                        >

                    </TextField>
                    <BorderColorIcon style={{ marginLeft:-50, marginTop:7 }}/>
                    <DeleteIcon style={{  marginTop:8 , padding:2}}/>

                </Box>

            </Box>
 
        </Wrapper>
        </CardWrapper>
    </Box>
    </>
  )
}

export default ManageAddress