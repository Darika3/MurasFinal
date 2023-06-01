import React from "react";
import Navbar from "../Navbar/Navbar";
import "../HomePage/HomePage.css";
import backgroundPic from "../../assets/image/backgroundHome.png";
import instagram from "../../assets/image/inst.svg";
import telegram from "../../assets/image/telegram.svg";
import facebook from "../../assets/image/facebook.svg";
import WhatsApp from "../../assets/image/Wp.svg";
import WelcomeText from "../../assets/image/textWelcome.png";

const HomePage = () => {
  return (
    <>
      <div className="homePage-container">
        <Navbar />
        <div className="homePage__item-socialIcon">
          <a href="#">
            <img className="social-icon" src={instagram} alt="instagram" />
          </a>
          <a href="#">
            <img className="social-icon" src={telegram} alt="telegram" />
          </a>
          <a href="#">
            <img className="social-icon" src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img className="social-icon" src={WhatsApp} alt="WhatsApp" />
          </a>
        </div>
        <img
          className="homePage__item-pic"
          src={backgroundPic}
          alt="backgroundPic"
        />
        <div className="homePage__item-text">
          <h1>
            <img src={WelcomeText} alt="WelcomeText" />
          </h1>
          <p>Discover the Essence of Kyrgyzstan with Muras</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
