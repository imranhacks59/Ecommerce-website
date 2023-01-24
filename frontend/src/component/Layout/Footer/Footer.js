import React from 'react'
import appStore from "../../../images/Appstore.png"
import playStore from "../../../images/playstore.png"
import logo from "../../../images/logo.png"
import profile from "../../../images/Profile.png"
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
             <p>Download our App</p>

             <img src={appStore} alt='image' />
             <img src={playStore} alt='image' />
        </div>

        <div className='footer-middle'>
              <img src={logo} alt='' />
        </div>
      
      <div className='footer-right'>
            
            <img src={profile} alt='' />
            <div>
                <p>Md Imran</p>
                <p>ecommerce59@gmail.com</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
