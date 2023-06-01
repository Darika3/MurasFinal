import React from "react";
import BackPeople from "../../assets/image/backPeople.png";
import Episode1 from "../../assets/video/episode1.mp4";
import Episode2 from "../../assets/video/episode2.mp4";
import Episode3 from "../../assets/video/episode3.mp4";
import Episode4 from "../../assets/video/episode4.mp4";
import Episode5 from "../../assets/video/episode5.mp4";
import Vector1 from "../../assets/image/line1.png";
import Vector2 from "../../assets/image/line2.png";
import Vector3 from "../../assets/image/line3.png";
import Vector4 from "../../assets/image/line4.png";
import runPeople from "../../assets/image/gif1.gif";
import "../Culture/Culture.css";
import Navbar from "../Navbar/Navbar";
const Culture = () => {
  return (
    <>
      <div className="culture_container">
        <Navbar />
        <img className="backImage-people1" src={BackPeople} alt="BackPeople" />
        <img
          className="runMan"
          id="gifRunMan1"
          src={runPeople}
          alt="runPeople"
        />
        <img
          className="runMan"
          id="gifRunMan2"
          src={runPeople}
          alt="runPeople"
        />
        <img
          className="runMan"
          id="gifRunMan3"
          src={runPeople}
          alt="runPeople"
        />
        <img
          className="runMan"
          id="gifRunMan4"
          src={runPeople}
          alt="runPeople"
        />
        <div className="culture__vector-img">
          <img id="vector-img1" src={Vector1} alt="Vector1" />
          <img id="vector-img2" src={Vector2} alt="Vecstor2" />
          <img id="vector-img3" src={Vector3} alt="Vector3" />
          <img id="vector-img4" src={Vector4} alt="Vector4" />
        </div>
        <div className="culture__item-video">
          <video
            className="item-video"
            id="item-video1"
            autoplay
            controls
            playsinline
          >
            <source src={Episode1} type="video/mp4" />
          </video>
          <video
            className="item-video"
            id="item-video2"
            autoplay
            controls
            playsinline
          >
            <source src={Episode2} type="video/mp4" />
          </video>
          <video
            className="item-video"
            id="item-video3"
            autoplay
            controls
            playsinline
          >
            <source src={Episode3} type="video/mp4" />
          </video>
          <video id="item-video4" autoplay controls playsinline>
            <source src={Episode4} type="video/mp4" />
          </video>
          <video
            className="item-video"
            id="item-video5"
            autoplay
            controls
            playsinline
          >
            <source src={Episode5} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Culture;
