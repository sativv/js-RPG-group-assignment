import {useState} from 'react';

const Lives = () => {

    const [lives, setLives] = useState(3);

    const removeLife = () => {
        if (lives > 0) {
        setLives(lives - 1);
        }
    }

    return (
        <div>
            <h1>Lives left: {lives}</h1>
            <button onClick={removeLife}>Remove life</button>
        </div>
    )
};

export default Lives;