import React from 'react'
import { useLocation } from "react-router-dom";

export function GameOver(props){

    const location = useLocation();
    return(
        <>
        <h1>Game Over!</h1>
        <br></br>
        <h3>Your Score: {location.state.score}/9</h3>
        <br></br>
        <p>Round 1 - EASY: 1 point </p>
        <p>Round 2 - MEDIUM: 3 points </p>
        <p>Round 3 - HARD: 5 points </p>
        </>
    )
}

export default GameOver;