import React from "react";
import { useNavigate } from "react-router-dom";

const Startscreen = () => {
  const navigate = useNavigate();

  return (
    <div className="start-comp">
      <h1 className="game-name">GAME NAME</h1>
      <btn className="form-btn sbtn" onClick={() => navigate("/login")}>
        Log In
      </btn>
      <btn className="form-btn sbtn" onClick={() => navigate("/signup")}>
        Sign Up
      </btn>
    </div>
  );
};

export default Startscreen;
