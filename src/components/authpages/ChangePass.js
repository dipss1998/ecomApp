import React, {useState} from 'react'
import {Link, NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from '../context/ContextProvider';
import { Box, Button, Typography, TextField} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
const ChangePass = () => {
    
    const navidate= useNavigate();
    const [inpval ,setInpval ] = useState({
                password:'',
                cpassword:''
            });

            const setVal = (e) => {
                // console.log(e.target.value);
                const { name, value } = e.target;
                // const {id , token } = useParams
        
                setInpval(() => {
                    return {
                        ...inpval,
                        [name]: value
                    }
                })
            }

                // const {cpassword} = inpval

                const response = async () =>{
                    const {password, cpassword} = inpval
                    const {id , token } = useParams
                    if (password === "") {
                        toast.error("email is required!", {
                            position: "top-center"
                        });
                    } else if (password.length >10 || password.length<4) {
                        toast.warning("password mustb be less then 10 and freater than 4 characker", {
                            position: "top-center"
                        });
                     
                    } else if (password !==  cpassword) {
                        toast.warning("password and conferm password should be matched", {
                            position: "top-center"
                        });
                     
                    } else {
            
                        const res = await fetch(`/ForgetPass/${id}/${token}`,{
                            method:'POST',
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify({
                                password,
                                cpassword
                           })
                        });
                        console.log(res)
                        // navidate('/resetPass/resetPass/:id/:token')
                    }
                        
                } 
  return (
    <>
    
    <Box>
    <div className="form_input">
        <label htmlFor="password">password</label>
        <input type="password" value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your password Address' />
    </div>  
    <div className="form_input">
        <label htmlFor="cpassword">Conferm password</label>
        <input type="cpassword" value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Enter Your cpassword Address' />
    </div>  
    
    <button className='btn' onClick={response}>Submit</button>

   </Box> 
    </>
  )
}

export default ChangePass;