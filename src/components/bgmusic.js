import { useState, } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

const Bgmusic = () => {
    const [audioB, setAudioB] = useState(new Audio("./audio/bgmusic.mp3",));
    const [playState, setPlayState] = useState("pause");
    const [iconState, setIconState] = useState(<BsFillPlayCircleFill />);
    const [volumeB, setVolumeB] = useState(0.5);

    const playMusic = () => {

    if(playState === "pause") {
        setPlayState("play");
        setIconState(<BsFillPauseCircleFill />);
        audioB.play();
    } else {
        audioB.pause();
        setPlayState("pause");
        setIconState(<BsFillPlayCircleFill />);

    };
};

const changeVolumeP = () => { 
    if(volumeB < 1) {
    const newVolume = volumeB + 0.1;
    setVolumeB(Math.round(newVolume * 100) / 100);
    audioB.volume = volumeB;

    };
 };

 const changeVolumeM = () => { 
    if(volumeB > 0.1) {
        const newVolume = volumeB - 0.1;
        setVolumeB(Math.round(newVolume * 100) / 100);
        audioB.volume = volumeB;
    };
 };

let volumePercent = volumeB * 100;
let roundedVolume = Math.floor(volumePercent);


    return (
        <>
        <button className="signup-btn volumeup" onClick={() => changeVolumeP()}>+</button>
        <button className="signup-btn volumedown" onClick={() => changeVolumeM()}>-</button>
        <h1 className="volumep">{roundedVolume}%</h1>

        <button className="signup-btn sound" onClick={() => playMusic()}>
            {iconState}
        </button>
      </>

    );
};

export default Bgmusic;