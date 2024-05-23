import React from "react";
import playStore from "../../../assets/playstore.png";
import appStore from "../../../assets/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ELITE VOGUE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Nitin Chalana</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/nitin_5931">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="http://instagram.com/nitin_5931">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;