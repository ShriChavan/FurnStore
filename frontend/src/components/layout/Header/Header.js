import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import  {FaUserAlt, FaSearch, FaShoppingBag} from "react-icons/fa";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "15vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIcon: true,
  ProfileIconElement: FaUserAlt,
  searchIcon: true,
  SearchIconElement: FaSearch,
  cartIcon: true,
  CartIconElement: FaShoppingBag,
  profileIconUrl: "/login",
  cartIconUrl: "/cart",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "2vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
