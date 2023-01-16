import { Link } from "react-router-dom";
import StartGame from "./StartGame";


const Gameover = ({ trigger, score }) => {

  if (!trigger) return null;
  return (
    <div className="go__modal">
      <div className="go__modal__content">
        <h1 className="go__head__text go_text">Game Over!</h1>
        <h2 className="go__head__text">Your score: {score}</h2>
        <Link to ="/startGame">
          <button className="form-btn">
            Restart
          </button>
        </Link>

      </div>
    </div>
  );
};
export default Gameover;
