import React, { useRef } from "react";

const SoundEffect = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={playSound}>Play Sound</button>
      <audio ref={audioRef} src="./audio/correct.wav" />
    </div>
  );
};

export default SoundEffect;
