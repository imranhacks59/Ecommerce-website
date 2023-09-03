import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const navigate = useNavigate()
   const redirectToOther=()=>{
    navigate('/cart')
   }
  return (
    <div style={{
      padding:'100px'
    }}>
      Profile

      <div>
        <Button onClick={redirectToOther}>other page</Button>
      </div>
    </div>
  )
}

export default Profile