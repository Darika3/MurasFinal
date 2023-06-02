import React from "react";
import "../Tours/Tours.css";
import Navbar from "../Navbar/Navbar";
import Trekking from "../../assets/image/toursImg1.png";
import Multidays from "../../assets/image/toursImg2.png";
import HorseBack from "../../assets/image/toursImg3.png";
import instagram from "../../assets/image/inst.svg";
import telegram from "../../assets/image/telegram.svg";
import facebook from "../../assets/image/facebook.svg";
import WhatsApp from "../../assets/image/Wp.svg";
import { useNavigate } from "react-router-dom";
const Tours = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="tours_container">
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
        <div className="tours-filter">
          <div
            onClick={() => navigate("/trekking")}
            className="trekking__item-tours"
          >
            <img src={Trekking} alt="Trekking" />
            <p className="text">Trekking Tours</p>
          </div>
          <div className="multidays__item-tours">
            <img src={Multidays} alt="Multidays" />
            <p className="text">Multidays Tours</p>
          </div>
          <div className="horse__item-tours">
            <img src={HorseBack} alt="HorseBack" />

            <p className="text">Horseback Riding Tours</p>
          </div>
        </div>
        <div className="adaptTours-filter">
          <div>
            <img
              className="adaprTrekking__item-tours"
              src={Trekking}
              alt="Trekking"
            />
            <p className="toursText">Trekking Tours</p>
          </div>
          <div>
            <img
              className="adaptMultidays__item-tours"
              src={Multidays}
              alt="Multidays"
            />
            <p className="toursText">Multidays Tours</p>
          </div>
          <div>
            <img
              className="adaptHorse__item-tours"
              src={HorseBack}
              alt="HorseBack"
            />
            <p className="toursText">Horseback Riding Tours</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
