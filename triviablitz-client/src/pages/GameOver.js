import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'

export function GameOver(props){
    

    // const renderConfetti = () => {
    //   if (location.state.score == 9) {
    //     return <Confetti
    //     width={width}
    //     height={height}
    //   />
    //   } else {
    //     return "null";
    //   }
    // }

    const location = useLocation();
    let timeLeft = location.state.timeRemaing;
    let timeBonus = 0;
    const [message, setMessage] = useState("Game Over!");
    // const { width, height } = useWindowSize()
    // console.log(timeLeft);
    if( isNaN(timeLeft)){
        timeLeft = 0;
    } 
    let total = location.state.score;
    if(location.state.score == 9){
        total = (timeLeft * location.state.score) + location.state.score;
        timeBonus = (timeLeft * location.state.score);
        // setMessage("Congratulations!!");

    }
    if (isNaN(total)){
        total = 0;
    }
    if (isNaN(timeBonus)){
        timeBonus = 0;
    }
    return(
        <>
        {/* {renderConfetti()} */}
        <h1>{message}</h1>
        <br></br>
        <h2>Your Score: {location.state.score}/9</h2>
        <h2>Time Bonus: {timeBonus}</h2>
        <h3>Total: {total}</h3>
        <br></br>
        <p>Round 1 - EASY: 1 point </p>
        <p>Round 2 - MEDIUM: 3 points </p>
        <p>Round 3 - HARD: 5 points </p>
        </>
    )
}

export default GameOver;