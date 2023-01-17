import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import bgvideo from "../video/bgmovie.mp4";

const StartGame = () => {
  const navigate = useNavigate();
  return (
    <div className="form">
      <video
        className="bg__game"
        src={bgvideo}
        autoPlay="{true}"
        loop
        muted
      ></video>
      <img
        src={logo}
        alt="logo"
        height={150}
        width={600}
        className="logo"
        id="logo"
      />
      <button className="form-btn sbtn" onClick={() => navigate("/game")}>
        Start Game
      </button>
    </div>
  );
};

export default StartGame;
