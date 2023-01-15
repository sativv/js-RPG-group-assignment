import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const StartGame = () => {
  const navigate = useNavigate();
  return (
    <div className="form">
      <img src={logo} alt="logo" height={400} width={1000} className="logo" />
      <button className="form-btn sbtn" onClick={() => navigate("/game")}>
        Start Game
      </button>
    </div>
  );
};

export default StartGame;