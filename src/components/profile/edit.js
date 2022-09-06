import React, {useState} from 'react'
import Button from '@mui/material/Button';
import {Box,TextField} from '@mui/material/';


const edit = () => {
    const [inpval, setInpval] = useState({email: ""});

    const onInputChange = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };
  return (
    <Box>
        {/* <Button variant="contained" component="label">
                Upload
        <input hidden accept="image/*" multiple type="file" name="image" />
        </Button> */}

         <TextField 
            style = {{ color: 'white', marginTop:1}} 
            variant="standard" 
            onChange={(e) => onInputChange(e)} 
            name='email' label='Enter Email'  
            value={inpval.name}/>
            {/* <p>{errors.email}</p> */}

            <TextField 
            style = {{ color: 'white', marginTop:1}} 
            variant="standard" 
            onChange={(e) => onInputChange(e)} 
            name='email' label='Enter Email'  
            value={inpval.email}/>

         <TextField 
            style = {{ color: 'white', marginTop:1}} 
            variant="standard" 
            onChange={(e) => onInputChange(e)} 
            name='email' label='Enter Email'  
            value={inpval.contact}/>
            <Button  >Update</Button>

    </Box>
  )
}

export default edit