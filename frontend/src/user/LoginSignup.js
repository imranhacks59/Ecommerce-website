import React, { Fragment, useRef } from 'react'
import './LoginSignup.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
const LoginSignup = () => {

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const switchTab=(e,tab)=>{
        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");
      
            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
          }
          if (tab === "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");
      
            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
          }
    }
  return (
    <Fragment>
       <div className='loginSignup-container'>
         <div className='loginSignup-box'>
            <div>
               <div className='loginSignup-toggle'>
                <p onClick={(e)=>switchTab(e,"login")}>Login</p>
                <p onClick={(e)=>switchTab(e,"register")}>Register</p>
                </div>
                
                    <button ref={switcherTab}></button>
              
            </div>
          {/* Login */}
            <form className='loginForm' ref={loginTab} encType='multipart/form-data'>
              <div className='login-email'>
                <MailOutlineIcon />
                <input type='email'
                placeholder='enter your email'

                />
              </div>
              <div className='login-password'>
                <LockOpenIcon />
                  <input type='password' 
                  placeholder='enter your password'
                  />
              </div>
              <Link to="/password/forgot">Forget Password ?</Link>
              <input type='submit' value='Login' className='loginBtn' />
            </form>

            {/*Register form  */}
            <form className='signupForm' ref={registerTab} encType='multipart/form-data'>
                <div className='signup-email'>
                  <MailOutlineIcon />  
                  <input type='email'
                  placeholder='enter your email'
                  />
                </div>
                <div className='signup-password'>
                    <LockOpenIcon />
                    <input type='password'
                    placeholder='enter your password'
                    />
                </div>
                <div className='registerImage'>
                    <input type='file'
                    name='avatar'
                    accept='image/*'
                    />
                </div>
              <input type='submit' value='Login' className='signupBtn' />
            </form>

         </div>



       </div>
    </Fragment>
  )
}

export default LoginSignup