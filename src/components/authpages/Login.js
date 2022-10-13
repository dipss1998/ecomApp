import React, { useState,useContext, useEffect } from 'react'
import {Link, NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from '../context/ContextProvider';
import { Box, Button, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

import Signup from './Signup'
import "./mix.css"
import { useDispatch } from 'react-redux';

const ForgetPass = styled(Typography)`
    margin:10px 0 30px 10px;
    float:left;
    top:-10px;
    line-height:0;
    paddingTop:10;
    text-decoration:underline

`;


const Login = () => {

    const [passShow, setPassShow] = useState(false);
    const {accounts, setAccounts} = useContext(LoginContext);
    const userdata = JSON.parse(localStorage.getItem("user"))

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });
    function refreshPage(){ 
        window.location.reload(); 
    }
    const navidate= useNavigate();

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

     const dispatch = useDispatch()
   
    const loginuser = async(e) => {
        e.preventDefault();
        const { email, password } = inpval;
        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        // } else if (userdata) {

        //    setAccounts(userdata.name)
        //     ;
        }  else {
            // console.log("user login succesfully done");


            const data = await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();
              console.log(res);
              console.log(res.status, "status");

            if(res){
                console.log("hey");
                localStorage.setItem("token", res.Token);
                localStorage.setItem("user",JSON.stringify(res));
                setInpval({...inpval,email:"",password:""});
                navidate('/')
                refreshPage()
                 setAccounts(res.name);
               
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input" style={{marginBottom:0, paddingBottom:0}}>
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>

                            </div>
                            <Link to="/ForgetPass"> <ForgetPass > forget your password</ForgetPass></Link>

                        </div>


                        {/* <Link to="" refresh="true"> */}
                             <button className='btn' onClick={loginuser}>Login</button>
                             {/* </Link> */}
                        <p>Don't have an Account? <NavLink to="/Signup">Sign Up</NavLink> </p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Login