import { useState, useEffect } from "react";
import he from "he";
import "./css/game.css";
// import Lives from "./lives";
import StopWatch from "./stopwatch";
import Gameover from "./gameover";
import logo from "../images/logo.png";
import { BsFillPlayCircleFill, BsPlay } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgmusic from "../components/audio/bgmusic.mp3";

const TriviaRequest = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("True");
  const [correctAnswer, setCorrectAnswer] = useState("True");

  // Audio correct
  const [audioC, setAudioC] = useState(new Audio("./audio/correct.wav"));
  const [audioF, setAudioF] = useState(new Audio("./audio/wrong.wav"));

  const navigate = useNavigate();

  // const [incorrectAnswers, setIncorrectAnswers] = useState(null);
  // ^ Frågor och svar
  const [seconds, setSeconds] = useState(10);
  //sekundmätare

  const [score, setScore] = useState(0);
  //poängmätare

  const [openLoose, setOpenLoose] = useState(false);

  const [lives, setLives] = useState(3);

  const getTrivia = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=1&category=0&difficulty=easy&type=boolean"
    );
    const json = await response.json();

    setQuestion(json.results[0].question);
    setCorrectAnswer(json.results[0].correct_answer);
    // setIncorrectAnswers(json.results[0].incorrect_answers === false);
  };

  const checkAnswer = (answer) => {
    if (answer === correctAnswer) {
      console.log("Right!!!");
      addScore();
      audioC.play();
      getTrivia();
      // addPoint
      addScore();
    } else {
      console.log("Wrong!!!");
      // removeLife
      audioF.play();
      removeLife();
      getTrivia();
    }
  };

  useEffect(() => {
    getTrivia();
  }, []);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    if (seconds === 0) {
      // setOpenLoose(true);
      removeLife();

      setSeconds(10);
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

  // const tjeckaliva = () => {
  //   if (lives > 0 ) {
  //   setLives(lives - 1);
  //   } else {
  //     checkLives();
  //   }
  // };

  const removeLife = () => {
    if (lives === 1) {
      setOpenLoose(true);
    } else {
      setLives(lives - 1);
    }
  };
  // const [audioB, setAudioB] = useState(new Audio("./audio/bgmusic.mp3"));

  return (
    <>
      <div className="game__container">
        <img src={logo} alt="logo" height={150} width={600} className="logo" />
        <div className="game__item">
          <div className="question">
            <p className="game__text">{he.decode(question)}</p>
          </div>
          <div className="info-flex">
            <div className="lives">
              <h2>Lives left</h2>
              <h2>{lives}</h2>
            </div>
            <div className="stopwatch">
              <h2>Timer</h2>
              <h2>{seconds}</h2>
            </div>
            <div className="score">
              <h2>Score</h2>
              <h2>{score}</h2>
            </div>
          </div>
        </div>

        {/* <div className="game__item">
          <p className="game__text">Your answer: {answer}</p>
        </div> */}

        <div>
          <button
            className="form-btn btn-true"
            onClick={() => {
              setAnswer("True");
              checkAnswer("True");
              console.log({ answer });
              console.log({ correctAnswer });
            }}
          >
            True
          </button>
          <button
            className="form-btn btn-false"
            onClick={() => {
              setAnswer("False");
              checkAnswer("False");
              console.log({ answer });
              console.log({ correctAnswer });
            }}
          >
            False
          </button>

          <Gameover trigger={openLoose} score={score} />
        </div>
      </div>

      <div>
        <button
          className="signup-btn logout"
          type="submit"
          onClick={() => navigate("/")}
        >
          Logout
        </button>
        {/* <button className="signup-btn sound" onClick={() => audioB.play()}>
          <BsFillPlayCircleFill />
        </button> */}
      </div>
    </>
  );
};

export default TriviaRequest;
