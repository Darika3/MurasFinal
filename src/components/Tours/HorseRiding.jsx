import React, { useEffect, useState } from "react";
import axios from "axios";
import instagramIcon from "../Products/assetsProducts/instagramIcon.svg";
import telegramIcon from "../Products/assetsProducts/TelegramIcon.svg";
import facebook from "../Products/assetsProducts/FacebookIcon.svg";
import phoneIcon from "../Products/assetsProducts/PhoneIcon.svg";
import starRatingEmpty from "../Products/assetsProducts/starRating.png";
import starRatingFilled from "../Products/assetsProducts/starRatingFull.png";
import HorseRidingToursHeader from "../Products/assetsProducts/horseRidingTours.png";
import imageMountains from "../Products/assetsProducts/image 20.jpg";
import Navbar from "../Navbar/Navbar";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import "../Tours/Tours.css";
const HorseRiding = () => {
  const { products, getProducts } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 1;
  const count = Math.ceil(products?.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const saveRatingToServer = () => {
    const data = { rating };
    axios
      .post("http://localhost:8000/products", data)
      .then((response) => {
        console.log("Rating saved to server:", response.data);
      })
      .catch((error) => {
        console.error("Error saving rating to server:", error);
      });
  };

  return (
    <>
      <div className="tourTrekkingContainer">
        <Navbar />
        <div className="divider"></div>
        <div className="h1Trekking">
          <img src={HorseRidingToursHeader} alt="" />
        </div>
        <div id="forflexingcardandsocial">
          <div id="sideBarIcons">
            <img className="socialIcons" src={instagramIcon} alt="" />
            <img className="socialIcons" src={telegramIcon} alt="" />
            <img className="socialIcons" src={facebook} alt="" />
            <img className="socialIcons" src={phoneIcon} alt="" />
          </div>
          {currentData().map((item) => (
            <div className="toursCard" key={item.id}>
              <img className="toursCardImg" src={imageMountains} alt="" />
              <div className="tourInformationCardContiner">
                <h2>TREKKING TO RATSEK HUT</h2>
                <ul className="tourInformationCard">
                  <li>Altitude:{item.altitude}</li>
                  <li>Season:{item.season}</li>
                  <li>Trekking Route:{item.route}</li>
                  <li>Total Distance:{item.distance}</li>
                  <li>Total time:{item.time}</li>
                </ul>
                <span>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <img
                      key={value}
                      src={value <= rating ? starRatingFilled : starRatingEmpty}
                      alt=""
                      onClick={() => handleRatingClick(value)}
                      value={item.rating}
                    />
                  ))}
                </span>
                <button id="detailTour" onClick={saveRatingToServer}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HorseRiding;
