import React from 'react'
import { useLocation } from "react-router-dom";

export function GameOver(props){

    const location = useLocation();
    let timeLeft = location.state.timeRemaing;
    let timeBonus = 0;
    console.log(timeLeft);
    if( isNaN(timeLeft)){
        timeLeft = 0;
    } 
    let total = location.state.score;
    if(location.state.score == 9){
        total = (timeLeft * location.state.score) + location.state.score;
        timeBonus = (timeLeft * location.state.score);

    }
    if (isNaN(total)){
        total = 0;
    }
    if (isNaN(timeBonus)){
        timeBonus = 0;
    }
    return(
        <>
        <h1>Game Over!</h1>
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