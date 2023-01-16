import { useState, } from "react";
import { BsFillPlayCircleFill, BsPlay } from "react-icons/bs";

const Bgmusic = () => {
    const [audioB, setAudioB] = useState(new Audio("./audio/bgmusic.mp3"));
    return (
        <>
        <button className="signup-btn sound" onClick={() => audioB.play()}>
        <BsFillPlayCircleFill />
        </button>
      </>

    );
};

export default Bgmusic;