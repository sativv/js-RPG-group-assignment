import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import TriviaRequest from "./TriviaRequest";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(10);

  const [openLoose, setOpenLoose] = useState(false);

  const [score, setScore] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
      setOpenLoose(true);
    }

    return () => clearInterval(timer);
  });

  const Restart = () => {
    setSeconds(10);
    setOpenLoose(false);
    setScore(0);
  };

  const addScore = () => {
    if (seconds !== 0) {
      setScore(score + 1);
      setSeconds(10);
    }
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{seconds}</h2>
      <button onClick={Restart}>Restart</button>
      <h2>Score</h2>
      <h2>{score}</h2>
      <button onClick={addScore}>Add score</button>
    </div>
  );
};

export default StopWatch;
