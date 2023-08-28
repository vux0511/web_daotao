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

function Register() {

    const [email, setEmail] = useState("") ;
    const [name, setName]   = useState("") ; 
    const [pass, setPass]   = useState("") ;
    const [repass, setRepass] = useState("");

    const [message, setMess] = useState("") ; 
    const [open, setOpen] = useState(false);
    const [statusAlert, setStatusAlert] = useState("success") ; 
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [flag, setFlag] = useState(false); // if falg == true => register success

    
    const handleCloseBDrop = () => {
        setOpenBackdrop(false);
      };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    let handleSetInfo = () =>{
        setOpenBackdrop(false);
        setOpen(true);
        if(flag) {
            window.location="/user/login";
        }
    }
    let handleSigIn = (e) => {
        e.preventDefault();
        console.log(email) ;
        setFlag(false);
        setOpenBackdrop(true);

        if(pass != repass) {
            setStatusAlert("error");
            setMess("Mật khẩu không trùng nhau") ; 
            setTimeout(handleSetInfo, 500); 
        }else{
           
            let data = {
                email   : email, 
                fullName: name,
                password: pass,

            }; 
            axios.post("/sv/register", data)
            .then((response) => {
                console.log(response.data) ;
                if(response.data.data == null) {
                    // đăng ký thất bại 
                    setStatusAlert("error");
                    setMess(response.data.message) ;
                    setTimeout(handleSetInfo, 500); 

                }else{
                    // đăng ký thành công  -- lưu vào localsto
                    setFlag(true) ;
                    setStatusAlert("success");
                    setMess(response.data.message) ;
                    setTimeout(handleSetInfo, 2000); 

                    
                }   
            })
            .catch(err => {
                setStatusAlert("error");
                console.log(err) ;                    
                setMess("ERROR") ;
                setTimeout(handleSetInfo, 1000); 

            })
        }

    }
    
    return(
        <>
            <div className="page-login">
                <div class="form-wrapper">
                    <h2>Sign Up</h2>
                    <form action="#">
                        <div class="form-control">
                            <input type="text" name="email" defaultValue={email} onInput={e => setEmail(e.target.value)} required/>
                            <label>Email </label>
                        </div>
                        <div class="form-control">
                            <input type="text" name="name" defaultValue={name} onInput={e => setName(e.target.value)}  required/>
                            <label>Full Name</label>
                        </div>
                        <div class="form-control">
                            <input type="password" name="pass" defaultValue={pass} onInput={e => setPass(e.target.value)}  required/>
                            <label>Password</label>
                        </div>
                        <div class="form-control">
                            <input type="password" name="repass" defaultValue={repass} onInput={e => setRepass(e.target.value)}  required/>
                            <label>Re Password</label>
                        </div>
                        <button type="submit" onClick={handleSigIn}>Sign In</button>
                        <div class="form-help"> 
                        
                            <a href="#">Need help?</a>
                        </div>
                    </form>
                    
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

export default Register ; 