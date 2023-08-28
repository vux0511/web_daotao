import {useState} from "react";
import * as React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import "../../css/sv/Login.css" ; 
import axios from "../../config/axios" ;

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Login() {
    const [email, setEmail] = useState("") ;
    const [password, setPass] = useState("") ;
    const [message, setMess] = useState("") ; 
    const [open, setOpen] = useState(false);
    const [statusAlert, setStatusAlert] = useState("success") ; 
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [flag, setFlag] = useState(false); // if falg == true => login success

    const handleCloseBDrop = () => {
        setOpenBackdrop(false);
      };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    
    const handleSetInfo = () =>{
        setOpenBackdrop(false);
        setOpen(true);
        if(flag) {
            window.location="/user/home";
        }
    }
    
    let handleLogin = (e) => {
        e.preventDefault();
        setFlag(false);
        setOpenBackdrop(true);
        let data = {
            email: email, 
            password: password, 
        }; 
        axios.post("/sv/login", data)
            .then((response) => {
                console.log(response.data) ;
                if(response.data.data == null) {
                    // đăng nhập thất bại 
                    setStatusAlert("error");
                    setMess(response.data.message) ;
                    setTimeout(handleSetInfo, 500); 

                }else{
                    // đăng nhập thành công  -- lưu vào localsto
                    setFlag(true) ;
                    setStatusAlert("success");
                    setMess(response.data.message) ;
                    setTimeout(handleSetInfo, 2000); 
                    localStorage.setItem("currentUser", JSON.stringify(response.data.data)) ; 

                    
                }   
            })
            .catch(err => {
                setStatusAlert("error");
                console.log(err) ;                    
                setMess("ERROR") ;
                setTimeout(handleSetInfo, 1000); 

            })
       
    }

    let setValueInput = (e) => {
        if(e.target.name === "email")
            setEmail(e.target.value); 
        else if(e.target.name === "password")
            setPass(e.target.value) ;
    }

    return(
        <>
            <div className="page-login">
                <div class="form-wrapper">
                    <h2>Sign In</h2>
                    <form action="#">
                        <div class="form-control">
                            <input type="text" name="email" defaultValue={email} onChange={setValueInput} required/>
                            <label>Email or phone number</label>
                        </div>
                        <div class="form-control">
                            <input type="password" name="password" defaultValue={password} onChange={setValueInput}  required/>
                            <label>Password</label>
                        </div>
                        
                        <button type="submit" onClick={handleLogin} >Sign In</button>
                        <div class="form-help"> 
                            <div class="remember-me">
                                <input type="checkbox" id="remember-me"/>
                                <label for="remember-me">Remember me</label>
                            </div>
                            <a href="#">Need help?</a>
                        </div>
                    </form>
                    <p> <a href="#">Sign up now</a></p>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <a href="#">Learn more.</a>
                    </small>
                </div>
            </div>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}   TransitionComponent={Fade}>
                    <Alert onClose={handleClose} severity={statusAlert} sx={{ width: '100%' }}>
                    {message}
                    </Alert>
                </Snackbar>
            </Stack>

            
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
                onClick={handleCloseBDrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Login ; 