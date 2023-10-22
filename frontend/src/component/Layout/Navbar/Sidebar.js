import React, { Fragment, useState } from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  const {
    drawerOpen,
    setDrawerOpen,
  subcategories,
  category,
  setCategory
  }=props
  // const [category,setcategory]=useState('')

  const [showSubCategory,setShowSubCategory]=useState(false);
  const {categories}=useSelector((state)=>state.categories)
  // useEffect(() => {
  //   if (drawerOpen) {
  //     document.body.classList.add('sidebar-open');
  //   } else {
  //     document.body.classList.remove('sidebar-open');
  //   }
  // }, [drawerOpen]);
  return (
    <Fragment>
    <div className='drawerDarkBG' onClick={() => setDrawerOpen(false)} />
      <div className='sidebarPosition'>
        <div className='drawer'>
          {/* <div className='drawerHeader'>
          <button className='backDrawerBtn' onClick={() => setDrawerOpen(false)}>
            back
          </button>
          <p>Category</p>
          </div> */}
          <div className="drawerContent">
          <div className='drawerHeader'>
          {/* <button className='backDrawerBtn' onClick={() => setDrawerOpen(false)}> */}
            {/* <CloseIcon style={{ marginBottom: "-3px" }} /> */}
            <KeyboardBackspaceIcon 
            className='drawerBackIcon'
            onClick={() => setDrawerOpen(false)}/>
          {/* </button> */}
          <p className='drawerHeaderCategoryTitle'>Category</p>
          </div>
          <div className="scrollableContainer">
            {categories.map((categor)=>(
                <div className="drawerItems"
                key={categor.slug}
                onClick={()=>{
                  setCategory(categor)
                  // setShowSubCategory(!showSubCategory)
                }}
                >
                  <div className='drawerRow'>
                  <Link to={`/products/${categor.id}`} style={{textDecoration:'none',color:'#717171'}}>

                <p className="drawerItem" >{categor.name}</p>
                </Link>

                <AddIcon className='categoryAddIcon'
                onClick={()=>setShowSubCategory(!showSubCategory)}
                />
                </div>
                {/* {showSubCategory&& categor===category&&category in subcategoriesData &&(
                <ul className='drawerSubCategoryList'>
                  {subcategoriesData[category].map((subcategory)=>(
                    <div className='drawerSubCategoryItems'>
                    <li className='drawerSubCategoryItem' key={subcategory}>{subcategory}</li>
                    <KeyboardArrowRightIcon className='subcategoriesrightIcon' />
                    </div>
                  ))}
                  
                </ul>
          )} */}
           {
           showSubCategory&& 
          //  category&&
          categor.name===category.name &&
           subcategories.length>0 &&(
                <ul className='drawerSubCategoryList'>
                  {subcategories.map((subcategory)=>(
                               <Link to={`/products/${subcategory.id}`} style={{textDecoration:'none'}}>

                    <div className='drawerSubCategoryItems'>
                    <li className='drawerSubCategoryItem' key={subcategory.name}>{subcategory.name}</li>
                    <KeyboardArrowRightIcon className='subcategoriesrightIcon' />
                    </div>
                    </Link>
                  ))}
                  
                </ul>
          )}
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      </Fragment> 
  )
}

export default Sidebar