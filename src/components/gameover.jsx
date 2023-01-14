
const Gameover = ({trigger, score}) => {
    if (!trigger) return null
    return (
        <div>
            <h1>Game Over!</h1>
            <h2>Your score: {score}</h2>
        </div>
    )
};
export default Gameover;