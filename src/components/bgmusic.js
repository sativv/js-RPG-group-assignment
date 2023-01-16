import { useState, } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

const Bgmusic = () => {
    const [audioB, setAudioB] = useState(new Audio("./audio/bgmusic.mp3",));
    const [playState, setPlayState] = useState("pause");
    const [iconState, setIconState] = useState(<BsFillPlayCircleFill />)
    const [volumeB, setVolumeB] = useState(0.1);

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

const changeVolumeP = () => { 
    setVolumeB(volumeB + 0.1)
    audioB.volume = volumeB;
 };

 const changeVolumeM = () => { 
    setVolumeB(volumeB - 0.1)
    audioB.volume = volumeB;
 };

    return (
        <>
        <button className="signup-btn sound" onClick={() => playMusic()}>
            {iconState}
        </button>

        <button className="signup-btn volume" onClick={() => changeVolumeP()}>Volume +</button>
        <button className="signup-btn volume" onClick={() => changeVolumeM()}>Volume -</button>


      </>

    );
};

export default Bgmusic;