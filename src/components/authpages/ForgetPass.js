import React, { useState,useContext } from 'react'
import {Link, NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from '../context/ContextProvider';
import { Box, Button, Typography, TextField} from '@mui/material';
import { styled } from '@mui/material/styles';
import "./mix.css"

const Forgetpassmail = styled(TextField)`
    margin-top:50px;
    float:center;
    justify-item:center;
    margin-left: 200px;
    height:50px



`;


const ForgetPass = () => {
    const navidate= useNavigate();

    const [inpval, setInpval] = useState({email: ""});

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };
    const response = async (e) =>{
        const {email} = inpval
        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
         
        } else {

            const res = await fetch('/resetPassEmail/resetPassEmail',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email
               })
            });
            console.log(res)
            // navidate('/resetPass/resetPass/:id/:token')
        }
            
    } 
  return (
   <>
   <Box>
    <Typography>Send you email to reset password    </Typography>
     <div className="form_input">
        <label htmlFor="email">Email</label>
        <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
    </div>
    <button className='btn' onClick={response}>Submit</button>


   </Box>
   </>
  )
}

export default ForgetPass