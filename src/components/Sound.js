import React, { useRef } from "react";

const SoundEffect = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={playSound}>Play Sound</button>
      <audio ref={audioRef} src="sound-effect.mp3" />
    </div>
  );
};

export default SoundEffect;
