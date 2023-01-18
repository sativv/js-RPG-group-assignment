import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
// import bgvideo from "../video/bgmovie.mp4";

const Startscreen = () => {
  const navigate = useNavigate();

  return (
    <div className="start-comp">
      {/* <video
        className="bg__game"
        src={bgvideo}
        autoPlay="{true}"
        loop
        muted
      ></video> */}
      <img
        src={logo}
        alt="logo"
        height={150}
        width={600}
        className="logo"
        id="logo"
      />
      <button className="form-btn sbtn" onClick={() => navigate("/login")}>
        Log In
      </button>
      <button className="form-btn sbtn" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
      {/* <button className="form-btn sbtn" onClick={() => navigate("/game")}>
        Game
      </button> */}
    </div>
  );
};

export default Startscreen;
