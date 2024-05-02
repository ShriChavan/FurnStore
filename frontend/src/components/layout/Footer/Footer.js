import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download our app</h4>
        <p>Download App for Android and IOS devices</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>FurnStore</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; FurnStore</p>
      </div>

      <div className="rightFooter">
        <h4>Follow us on</h4>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://facebook.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
