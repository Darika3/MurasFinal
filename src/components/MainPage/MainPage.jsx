import React, { useEffect } from "react";
import "../MainPage/MainPage.css";
import mainVideo from "../MainPage/mainVideo.mp4";
import { useNavigate } from "react-router";
const MainPage = () => {
  const navigate = useNavigate();
  function goHomeTimeOut() {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }

  function goHomeClick() {
    navigate("/");
  }
  useEffect(() => {
    goHomeTimeOut();
  }, []);
  return (
    <div onClick={goHomeClick} id="mainVideoContainer">
      <video id="mainVideo" autoPlay muted>
        <source src={mainVideo} />
      </video>
    </div>
  );
};

export default MainPage;
