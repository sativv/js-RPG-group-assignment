import { useState, } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

const Bgmusic = () => {
    const [audioB, setAudioB] = useState(new Audio("./audio/bgmusic.mp3"));
    const [playState, setPlayState] = useState("pause");
    const [iconState, setIconState] = useState(<BsFillPlayCircleFill />)

    const playMusic = () => {

    if(playState === "pause") {
        audioB.play();
        setPlayState("play");
        setIconState(<BsFillPauseCircleFill />)
    } else {
        audioB.pause();
        setPlayState("pause");
        setIconState(<BsFillPlayCircleFill />)
    }
};
    return (
        <>
        <button className="signup-btn sound" onClick={() => playMusic()}>
            {iconState}
        </button>/button>
      </>

    );
};

export default Bgmusic;