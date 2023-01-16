import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Startscreen = () => {
  const navigate = useNavigate();

  return (
    <div className="start-comp">
      <img src={logo} alt="logo" height={400} width={1000} className="logo" />
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
