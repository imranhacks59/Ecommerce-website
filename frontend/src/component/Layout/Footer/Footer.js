import "./Footer.css";
import React, { Fragment } from 'react';
import logo from '../../../assets/snyp-logo.png'
import SocialIcons from "./SocialIcons";
function Footer() {
  return (
    <Fragment>
    <div className="footerContainer">
      {/* <h2>Hello</h2> */}
    <section>
      <footer className="top">
        <img src={logo} alt="Logo" />
        <div className="links">
        <div className="links-column-left">
            <p>Snyp Ecommerce</p>
            <p className="c-details">New Delhi 110092 (INDIA)</p>
            <ul>
            <li>+91 0000011111</li>
            {/* <li>+91 8384037073</li>
            <li>+91 129 4312423</li> */}
            <li>info@snyp.com</li>
            <li>biz@snyp.com</li>
            </ul>
            
            {/* <a>+91 9899963601</a>
            <a>+91 8384037073</a>
            <a>+91 129 4312423</a>
            <a>info@phantomhealthcare.com</a>
            <a>biz@phantomhealthcare.com</a> */}
          </div>
          {/* <div className="">
            <h2>Get Started</h2>
            <a>Introduction</a>
            <a>Documentation</a>
            <a>Usage</a>
            <a>Globals</a>
            <a>Elements</a>
          </div> */}
          <div className="links-column">
            <div className="links-column1">
            <h2>Our Products</h2>
            <p>Refurbished laptops</p>
            <p>Refurbished mobiles</p>
            {/* <p>Refurbished PET-CT Scanner machines</p> */}
            </div>
            <div className="links-column2">
            <h2>Our Services</h2>
            {/* <p>Site Planning & Construction</p> */}
            <p>Software Installation</p>
            {/* <p>De-Installation</p> */}
            <p>Sell Your electronics devices</p>
            </div>
            <div className="links-column2">
            <h2>Buy MRI & CTs</h2>
            <p>Get Apple devices</p>
            <p>GE Vivo phones</p>
            <p>lenove Thinkpad series</p>
            <p>hp Pavillion</p>
            {/* <p>Brand New CT Scanner Machines</p>
            <p>Refurbished CT Scanner Machines</p> */}
            </div>
          </div>
          <div className="links-column-right socials-column">
            <h2>Social Media</h2>
            <p>
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <SocialIcons />
            {/* <div className="socials">
              <a className="fa-brands fa-facebook"></a>
              <a className="fa-brands fa-instagram"></a>
              <a className="fa-brands fa-linkedin"></a>
            </div> */}
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <p className="copyright">© 2023 All rights reserved</p>
        <div className="legal">
          <a>Terms</a>
          <a>Privacy</a>
        </div>
      </footer>
    </section> 
     </div>
    </Fragment>
  );
}

export default Footer;

