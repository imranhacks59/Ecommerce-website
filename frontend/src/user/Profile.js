import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const {isAuthenticated,user} = useSelector(state=>state.user)
    const navigate = useNavigate()
    useEffect(()=>{
     if(isAuthenticated===false){
       navigate('/login')
     }   
    },[isAuthenticated,navigate])
  return (
    <div>Profile</div>
  )
}

export default Profile