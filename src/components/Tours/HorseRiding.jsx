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
import { ADMIN, API } from "../../helpers/const";
const HorseRiding = () => {
  const { getProducts, products, saveEditedProduct, deleteProduct } =
    useProduct();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    getProducts();
  }, []);

  const handleRatingClick = async (value, id) => {
    const updatedProduct = {
      ...products.find((item) => item.id === id),
      rating: value,
    };
    await axios.patch(`${API}/${id}`, updatedProduct);
    saveEditedProduct(updatedProduct);
    window.location.reload(); // Reload the page without navigation
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
          <div className="toursCardContainer">
            {products.map((item) =>
              item.type === "horse" ? (
                <div className="toursCard" key={item.id}>
                  <img className="toursCardImg" src={item.image} alt="" />
                  <div className="tourInformationCardContiner">
                    {email === ADMIN ? (
                      <>
                        <button
                          className="updCard-btn"
                          onClick={() => navigate(`/edit/${item.id}`)}
                        >
                          Edit
                        </button>
                        <button
                          className="updCard-btn"
                          onClick={() => deleteProduct(item.id)}
                        >
                          Delete
                        </button>
                      </>
                    ) : null}
                    <h2>{item.name}</h2>
                    <ul className="tourInformationCard">
                      <li>Altitude: {item.altitude}</li>
                      <li>Season: {item.season}</li>
                      <li>Trekking Route: {item.route}</li>
                      <li>Total Distance: {item.distance}</li>
                      <li>Total time: {item.time}</li>
                    </ul>
                    <span>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <img
                          key={value}
                          src={
                            value <= item.rating
                              ? starRatingFilled
                              : starRatingEmpty
                          }
                          alt=""
                          onClick={() => handleRatingClick(value, item.id)}
                        />
                      ))}
                    </span>
                    <button
                      onClick={() => navigate(`/tourDetails/${item.id}`)}
                      id="detailTour"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HorseRiding;
