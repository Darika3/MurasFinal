import React, { useState } from "react";
import "../Cart/BuyNow.css";
import chip from "../../assets/image/chip.png";
import trio from "../../assets/image/chipTrio.png";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
const BuyNow = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };
  const handleCardHolder = (event) => {
    setCardHolder(event.target.value);
  };
  const handleCardExp = (event) => {
    setCardExp(event.target.value);
  };
  const handleCardCVC = (event) => {
    setCardCVC(event.target.value);
  };

  return (
    <div id="paymentModal">
      <div id="paymentLeft">
        <div id="visa">
          <div id="chipBlock">
            <img id="chip" src={chip} alt="" />
            <img id="trio" src={trio} alt="" />
          </div>
          <div id="cardNum">{cardNumber}</div>
          <div id="visaBottom">
            <h3 id="cardholder">{cardHolder}</h3>
            <h3 id="expdate">{cardExp}</h3>
          </div>
        </div>
      </div>
      <div id="paymentRight">
        <div id="visaInfo">
          <div id="infoLeft">
            <h3>Card Number</h3>
            <input onChange={handleCardNumberChange} type="text" id="visaNum" />
            <h3>Card Holder</h3>
            <input onChange={handleCardHolder} type="text" id="visaHolder" />
          </div>
          <div id="infoRight">
            <h3>Expires</h3>
            <input onChange={handleCardExp} type="text" id="visaexp" />
            <h3>CVC</h3>
            <input onChange={handleCardCVC} type="text" name="" id="visaCvc" />
          </div>
        </div>

        <div id="pay">
          <h2>Total</h2>
          <h3>{cart?.totalPrice} $</h3>
        </div>
        <button onClick={() => navigate("/")} id="buyBtn">
          BUY
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
