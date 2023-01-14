import { useState, useEffect } from "react";
import he from "he";
import "./css/game.css";
import Lives from "./lives";
import StopWatch from "./stopwatch";
import Gameover from './gameover';

const TriviaRequest = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("True");
  const [correctAnswer, setCorrectAnswer] = useState("True");
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
      "https://opentdb.com/api.php?amount=1&category=0&difficulty=hard&type=boolean"
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
      getTrivia();
      // addPoint
      addScore();
    } else {
      console.log("Wrong!!!");
      // removeLife 
      removeLife();
    }
  };

  useEffect(() => {
    getTrivia();
  }, []);


  let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds - 1);

            
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
}

const addScore = () => {
    if (seconds !== 0) {
        setScore(score + 1);
        setSeconds(10);
    }
}


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
  };
};







  return (
    <>
    <div className="game__container">
        
      <div className="game__item">
        <p className="game__text">{he.decode(question)}</p>
      </div>

      <div className="game__item">
        <p className="game__text">Your answer: {answer}</p>
      </div>

      <div className="game__item">
        <p className="game__text">The correct answer is: {correctAnswer}</p>
      </div>

      <div>
      <button
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
        onClick={() => {
          setAnswer("False");
          checkAnswer("False");
          console.log({ answer });
          console.log({ correctAnswer });
        }}
      >
        False
      </button>
      <h2>Stopwatch</h2>
      <h2>{seconds}</h2>
      <h2>Score</h2>
      <h2>{score}</h2>
      <h2>Lives left: {lives}</h2>
      <Gameover trigger={openLoose} score={score}/>
      </div>
      </div>
        
      
    </>
  );
};

export default TriviaRequest;
