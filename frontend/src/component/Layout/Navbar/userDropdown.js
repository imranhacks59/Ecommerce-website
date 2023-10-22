import React, { useEffect, useState } from 'react'
import './userDrodown.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/userAction';
const UserDropdown = (props) => {
//   const {categories,selectedCategory,setSelectedCategory}=props
    const [isActive,setIsActive]=useState(false)
//     const options =['GE MRI','Accessories','Magnet Room','System Cabinet'];
//     let displayedCategory = selectedCategory;
//   if (selectedCategory.length > 11) {
//     displayedCategory = selectedCategory.substring(0, 11) + '...';
//   }
//   console.log(displayedCategory)
 const dispatch=useDispatch()

const logoutHandler=()=>{
  dispatch(logout())
}
  return (
    <div className='user-dropdown' onMouseLeave={()=>setIsActive(false)}>
        <div className='user-dropdown-btn' 
        onClick={()=>setIsActive(!isActive)}>
            <div style={{color:'white',overflow: 'hidden',marginLeft:5,fontWeight:'500' }}>
                {/* <img src='' alt=''/> */}
                {/* <p>Hi</p> */}
                <p>My Account</p>
                </div>
                <span style={{color:'white'}}><ArrowDropDownIcon style={{color:'white'}} /></span></div>
        {isActive&&(
  <div  className='user-dropdown-content'>
    {/* {categories.map(category=>( */}
         <div 
        //  key={category.slug}
        //  onClick={(e)=>{
        //  setSelectedCategory(category)
        //  setIsActive(false)
        //  }} 
         className='user-dropdown-item'>
         {/* {category.name} */}
            <div
              className="user-navHomeIcon"
              style={{
                // background: "#e9611e ",
                // background:'rgb(186 191 207)',
                background:'#ea7b64',
                      padding: "8px 8px",
                borderRadius: "4px",
              }}
              onClick={logoutHandler}
            >
              <p
                style={{
                  color:'white',
                  fontSize: 15,
                  // fontWeight: 500,
                }}
              >
                Logout
              </p>
            </div>
       </div>
        {/* ))} */}
  </div>
        )}
      
    </div>
  )
}

export default UserDropdown;
