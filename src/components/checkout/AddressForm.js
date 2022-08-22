import  React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import {Typography, Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {addAddress} from '../../service/addressapi'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


const Addressinitialvalie = {
  name:"", 
  flatno :"",
  addressline1:"",
  addressline2:"",
  city:"",
  state:"",
  zipcode:"",
  country:""

}


const Text  = styled(Typography)`
    


`;

export default function AddressForm() {

      // const addaddressdata = (e) => {
      //   if(name === ""){
      //     alert("please enter your name")
      //   }else if(email === " "){
      //     alert("please enter your email");
      //   }else if(!email.include("@")){
      //     alert("enter valid email")
      //   }
      // }


  
 
  const [address, SetAddress] = useState(Addressinitialvalie)
 const [ error, showError ] = useState(false);
const [errors, showErrors ] = useState({});
const [issave, setIssave] = useState(false)
const { name, flatno, addressline1, addressline2, city, state, zipcode, country } = address

    const addtoAddress = async() => {
     
      let response = await addAddress(address);
        if(!response){
          return 
           (showError(false)
           )
          
        }else {
           return (showError(true)  ) 
        }
       
        
    }

useEffect(()=>{
  addtoAddress()
}, [])

    const onInputChange = (e) => {
       e.preventDefault()
      SetAddress({ ...address, [e.target.name]: e.target.value });
      // console.log( e.target.value);
       showErrors(validate(address))
  }

  const validate = (value)=>{
      const errors = {}
      if(!value.name){
        errors.name = "name is required! ";

    }
    
    if (flatno === ""){
        error.flatno = "how no must hav a value"
    }else if (flatno <= 6){
        error.flatno = "flatno no must hav a value less than or equal to   6 character "
    }

    if(value.addressline1 === ""){
      errors.addressline1 = "addressline1 is required"
    }else if (value.addressline1.length <5 ){
        errors.addressline1 = "addressline1 must br more then 5 character"
    }else if (value.addressline1.length >500 ){
        errors.addressline1 = "addressline1 must be less then 10 character"
    }

    if(value.city === ""){
      errors.city = "city is required"
  }else if (value.city.length <5 ){
      errors.city = "city must br more then 5 character"
  }else if (value.city.length >10 ){
      errors.city = "city must be less then 10 character"
  }
if(value.state === ""){
    errors.state = "satte is required"
}else if (value.state.length <5 ){
    errors.state = "state must br more then 5 character"
}else if (value.state.length >10 ){
    errors.state = "state must be less then 10 character"
}

if(value.country === ""){
  errors.country = "country is required"
}else if (value.country.length <= 0 ){
  errors.country = "country must br more then 5 character"
}else if (value.country.length >20 ){
  errors.country = "country must be less then 10 character"
}
return errors;
}

  useEffect(()=>{
    console.log(errors);
    if(Object.keys(errors).length === 0 && issave)
    console.log(address);
  })

  return (
    <React.Fragment>
     
    
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      {/* {Object.keys(errors).length === 0 && issave} ? (<p> Address successfully added</p>) : */}
       <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
             required
            id="name"
            name="name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => onInputChange(e)}
            value={address.name}
          />
          <p>{errors.name}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
             required
            id="flatno"
            name="flatno"
            label="Office No./House No."
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => onInputChange(e)}
            value={address.flatno}
          />
          <p>{errors.flatno}</p>
        </Grid>
        <Grid item xs={12}>
          <TextField
             required
            id="addressline1"
            name="addressline1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => onInputChange(e)}
            value={address.addressline1}
          />
          <p>{errors.addressline1}</p>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addressline2"
            name="addressline2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e) => onInputChange(e)}
            value={address.addressline2}
          />
            <p>{errors.addressline2}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) => onInputChange(e)}
          />
           <p>{errors.city}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e) => onInputChange(e)}
            value={address.state}
          />
            <p>{errors.state}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
             required
            id="zipcode"
            name="zipcode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => onInputChange(e)}
            value={address.zipcode}
          />
          <p>{errors.zipcode}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
             required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => onInputChange(e)}
            value={address.country} 
          />
           <p>{errors.country}</p>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox 
              color="secondary"
              // name="saveAddress"
              // value="yes" 
                />}
            label="Use this address for payment details"
          />
        </Grid>
<Button variant="contained" onClick={()=>addtoAddress()}> Save </Button>

      </Grid>


      </Box>
         </React.Fragment>
  );
}