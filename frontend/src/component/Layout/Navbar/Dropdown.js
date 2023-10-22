import React, { useState,useEffect } from 'react'
import './Dropdown.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from 'react-redux';
// import { getAllCategories } from '../../../actions/homeAction';
export const Dropdown = (props) => {
  const {categories,selectedCategory,setSelectedCategory}=props
    const [isActive,setIsActive]=useState(false)
    const options =['GE MRI','Accessories','Magnet Room','System Cabinet'];
    let displayedCategory = selectedCategory;
  if (selectedCategory.length > 11) {
    displayedCategory = selectedCategory.substring(0, 11) + '...';
  }
  const dispatch=useDispatch()

//  useEffect(()=>{
//     dispatch(getAllCategories())
//  },[])
  return (
    <div className='dropdown' 
    // onMouseLeave={()=>setIsActive(false)}
    >
        <div className='dropdown-btn' 
        onClick={()=>setIsActive(!isActive)}><p style={{color:'white',overflow: 'hidden',marginLeft:5,fontWeight:'500' }}>{displayedCategory}</p><span style={{color:'white'}}><ArrowDropDownIcon style={{color:'white'}} /></span></div>
        {isActive&&(
  <div  className='dropdown-content'
  // onWheel={stopPropagation}
  >
    {categories.map(category=>(
         <div 
         key={category.slug}
         onClick={(e)=>{
         setSelectedCategory(category.name)
        //  setIsActive(false)
         }} 
         className='dropdown-item'>
         {category.name}
       </div>
        ))}
 
 
  </div>
        )}
      
    </div>

  )
}
