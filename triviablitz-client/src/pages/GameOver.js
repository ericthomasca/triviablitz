import React from 'react'
import { useLocation } from "react-router-dom";

export function GameOver(props){

    const location = useLocation();
    return(
        <>
        <h1>Game Over!</h1>
        <h3>Your Score: {location.state.score}</h3>
        </>
    )
}

export default GameOver;