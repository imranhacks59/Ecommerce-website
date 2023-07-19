import React, { Fragment, useEffect, useRef, useState } from 'react'
import './LoginSignup.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from 'react-router-dom';
import Face6Icon from '@mui/icons-material/Face6';
import {useDispatch, useSelector} from 'react-redux'
import { userLogin, userRegister } from '../actions/userAction';
import { useAlert } from 'react-alert';
import { clearErrors } from '../actions/productAction';
const LoginSignup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {loading,error,isAuthenticated} = useSelector(state=>state.user)
  const [loginEmail,setLoginEmail] =useState('');
  const [loginPassword,setLoginPassword] = useState('');
  const [user,setUser] =useState({
    name:'',
    email:'',
    password:''
  });

  const {name,email,password} = user
  const alert  = useAlert();
  const [avatar,setAvatar] = useState('/Profile.png')
  const [avatarPreview,setAvatarPreview] = useState('/Profile.png')

   const registerDataChange=(e)=>{
    e.preventDefault();
    // if(e.target.name==="avatar"){
    //    const reader = new FileReader();
    //    reader.onload=()=>{
    //      if(reader.readyState===2){
    //       setAvatarPreview(reader.result)
    //       setAvatar(reader.result)
    //      }
    //    }
    // } else{
      setUser({...user,[e.target.name]:e.target.value})
    // }  
   }
  //  console.log("name"+ name,email,password)
   console.log(user) 
     const loginSubmit=(e)=>{
        e.preventDefault();
      dispatch(userLogin(loginEmail,loginPassword));
 
   }
  //  const registerSubmit=(e)=>{
  //   e.preventDefault();
  //   dispatch(userRegister(name,email,password))
  //  }
   const registerSubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData();

    formData.append('name',name);
    formData.append('email',email);
    formData.append('password',password);
    dispatch(userRegister(formData))
   }  
   useEffect(()=>{
    if(error){
      alert.error(error);
      console.log(error)
      dispatch(clearErrors())
    }
    if(isAuthenticated){
      navigate('/')
    }
   },[dispatch,isAuthenticated,error,alert,navigate])

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
            <form className='loginForm' onSubmit={loginSubmit} ref={loginTab} encType='multipart/form-data'>
              <div className='login-email'>
                <MailOutlineIcon />
                <input type='email'
                placeholder='enter your email'
                value={loginEmail}
                onChange={(e)=>setLoginEmail(e.target.value)}

                />
              </div>
              <div className='login-password'>
                <LockOpenIcon />
                  <input type='password' 
                  placeholder='enter your password'
                  value={loginPassword}
                  onChange={(e)=>setLoginPassword(e.target.value)}
                  />
              </div>
              <Link to="/password/forgot">Forget Password ?</Link>
              <input type='submit' value='Login' className='loginBtn' />
            </form>

            {/*Register form  */}
            <form className='signupForm' onSubmit={registerSubmit} ref={registerTab} encType='multipart/form-data'>
                
            <div className="signUpName">
                  <Face6Icon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                 />
                </div>

                <div className='signup-email'>
                  <MailOutlineIcon />  
                  <input type='email'
                  placeholder='enter your email'
                  name='email'
                  value={email}
                  onChange={registerDataChange}
                  />
                </div>
                <div className='signup-password'>
                    <LockOpenIcon />
                    <input type='password'
                    placeholder='enter your password'
                    name='password'
                    value={password}
                    onChange={registerDataChange}
                    />
                </div>
                {/* <div className='registerImage'>
                  <img src={avatarPreview} alt='' />
                    <input type='file'
                    name='avatar'
                    accept='image/*'
                    onChange={registerDataChange}
                    />
                </div> */}
              <input type='submit' value='Register' className='signupBtn' />
            </form>

         </div>



       </div>
    </Fragment>
  )
}

export default LoginSignup