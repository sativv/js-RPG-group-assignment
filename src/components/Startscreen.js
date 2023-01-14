import React from "react";
import { useNavigate } from "react-router-dom";

const Startscreen = () => {
  const navigate = useNavigate();

  return (
    <div className="start-comp">
      <h1 className="game-name">GAME NAME</h1>
      <button className="form-btn sbtn" onClick={() => navigate("/login")}>
        Log In
      </button>
      <button className="form-btn sbtn" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
      <button className="form-btn sbtn" onClick={() => navigate("/game")}>
        Game
      </button>
    </div>
  );
};

export default Startscreen;
