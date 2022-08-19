
import React, { useState, useEffect, useContext } from 'react';
import Alert from '@mui/material/Alert';
import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';

import { userLogIn, userSignUp } from '../../service/api';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from './../../imges/logo.png'
import { LoginContext } from '../context/ContextProvider';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #f2b407;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
// height: 70vh;
    
const Image = styled(Box)`
    background: #fcba03;
    width: 40%;
    height: 100%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;
// const passwordButton = styled(Button)`
//     margin-top: 80px;
//     padding: 20px;

// `;
const loginInitialValues = {
    email: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    // lastname: '',
    // username: '',
    email: '',
    password: '',
    contact: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ open, setOpen, }) => {
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError ] = useState(false);
    const [ errors, showErrors ] = useState({});
     const [issubmit, setIssbumit] = useState(false)
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    // const [accounts, setAccounts] = useState('')
    const [passshow, setPassshow] = useState(false)
    const {accounts, setAccounts} = useContext(LoginContext);
    // const [formValues, setFormValues] = useState(initialValues);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        e.preventDefault();
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login);
    }

    const onInputChange = (e) => {
        e.preventDefault();
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const loginUser = async() => {
        // e.preventDefault();  
        showErrors(validate(login))
        setIssbumit(true) 
        

        let response = await userLogIn(login);
       
        if(!response) {
             showError(true)
           
        }
        else {
            showError(false);
            handleClose();
            setAccounts(login.name);
        }  
          
    }

    const signupUser = async() => {
        // e.preventDefault();
        showErrors(validate(signup))
        setIssbumit(true)
       
        let response = await  userSignUp(signup);
        // console.log(response);
        if(!response) return;
        
        handleClose();
        setAccounts(signup.name);
      
     
       
    }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

  

    const validate = (values) =>{
        const errors = {};
        const regrex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.name){
            errors.name = "name is required! ";

        }
        
        if(!values.email){
            errors.email = "email is required"
        }
        else if (!regrex.test(values.email)){
            errors.email = "This is require valid email"
        }

        if(!values.password){
            errors.password = "password is required"
        }else if (values.password.length <=6 ){
            errors.password = "password must br more then 5 character"
        }else if (values.password.length >10 ){
            errors.password = "password must be less then 10 character"
        }
return errors;
    }


    useEffect(()=>{
        console.log(errors);
        if(Object.keys(errors).length === 0 && login){
            console.log(login);
        }
       
      }, [errors])

      useEffect(()=>{
        console.log(errors);
        if(Object.keys(errors).length === 0 && signup){
            console.log(signup);
        }
       
      }, [errors])
   return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            {/* { Object.keys(errors).length === 0 && signup } ? <p>Singup successfully</p> : */}
            <Component>
                <Box style={{display: 'flex', height: '100%'}}>
                    <Image>
                         <img src={logo} alt="logo" style={{ marginTop: 0, }} />
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ? 
                        <Wrapper style = {{backgroundColor:'#fff', Height: '90%', marginTop: -10}}>
                            
                            <TextField 
                            variant="standard" 
                            onChange={(e) => onValueChange(e)} 
                            name='email' 
                            label='Enter your email'  
                             value={login.email} />
                            <p>{errors.email}</p>
                           
                            {/* { error && <Error>Please enter valid Email</Error> } */}
                            <Box style={{display: 'flex'}}>
                            <TextField 
                            variant="standard" 
                            onChange={(e) => onValueChange(e)}  
                             type= {!passshow ? "password":"text"} 
                             name='password' 
                             label='Enter Password'  
                             fullWidth 
                             value={login.password}/>
                              

                            <Box ><Button style={{marginTop: 10, marginLeft:-40}} onClick={()=>setPassshow(!passshow)}> {!passshow ? <VisibilityOffIcon/>:<VisibilityIcon   />}</Button></Box>
                            </Box >
                            <p style={{marginTop:10}}>{errors.password}</p>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{textAlign:'center'}}>OR</Text>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper> : 
                        <Wrapper style = {{backgroundColor:'#fff', Height: '100%', padding: 10, margin:10}}>
                            {/* <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' /> */}
                            <TextField 
                            variant="standard" 
                            onChange={(e) => onInputChange(e)}
                             name='name' 
                             label='Enter your name' 
                             value={signup.name} /> 
                              <p>{errors.name}</p>
                              {/* <Alert severity="info">{errors.name}</Alert> */}
                            {/* { error && <Error>Please enter valid Email ID/Mobile number</Error> } */}

                            {/* <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' /> */}
                            <TextField 
                            style = {{ color: 'white', marginTop:1}} 
                            variant="standard" 
                            onChange={(e) => onInputChange(e)} 
                             name='email' label='Enter Email'  
                             value={signup.email}/>
                              <p>{errors.email}</p>


                            <Box style={{display:'flex'}}>
                                <TextField 
                                 style = {{ color: 'white', marginTop:1}}
                                variant="standard" 
                                onChange={(e) => onInputChange(e)} 
                                name='password'   
                                type= {!passshow ? "password":"text"}  
                                label='Enter Password' 
                                value={signup.password}/>
                                
                                <Box>
                                    <Button style={{marginTop: 10, marginLeft:-50, objectFit:'background', }} onClick={()=>setPassshow(!passshow)}>
                                    {!passshow ? <VisibilityOffIcon/>:<VisibilityIcon   />}</Button></Box>
                                </Box>
                                <p style={{marginTop:2}}>{errors.password}</p>

                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='contact' label='Enter Phone' />
                            <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                            {/* <CreateAccount>Already have account? go to login</CreateAccount> */}

                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;