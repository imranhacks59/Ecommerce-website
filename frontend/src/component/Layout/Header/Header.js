import React, { Fragment } from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from '../../../images/logo.png'

const options={
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Login",
  link4Text: "Search",
  // link5Text:'Search',
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/Login",
  link4Url: "/Search",
  // link5Url:"/Search",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
}

function Header() {
  return (
    <Fragment>
      <ReactNavbar {...options} />
    </Fragment>
  );
}

export default Header;
