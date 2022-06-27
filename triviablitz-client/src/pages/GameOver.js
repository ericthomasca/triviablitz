import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import dundundun from '../sounds/dun-dun-dun.mp3';
import useSound from 'use-sound';
import cheer from '../sounds/fanfare.mp3'
import drums from '../sounds/909-drums.mp3'
import Scores from './Scores';
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

    const [playDunDunDun] = useSound(dundundun);
    const [playCheer] = useSound(cheer);
    const [playdrums] = useSound(drums);
    const location = useLocation();
    let timeLeft = location.state.timeRemaing;
    let timeBonus = 0;
    const [message, setAMessage] = useState("Game Over!");
    // const { width, height } = useWindowSize()
    // console.log(timeLeft);
    if( isNaN(timeLeft)){
        timeLeft = 0;
    } 
    let total = location.state.score;
    if(location.state.score === 9){
        // setAMessage("Congratulations!")
        playCheer();
        total = (timeLeft * location.state.score) + location.state.score;
        timeBonus = (timeLeft * location.state.score);
        // setMessage("Congratulations!!");
    }
    if( location.state.score >= 1 && location.state.score <= 8){
        playdrums()

    }
    if (isNaN(total) || total == 0){
        total = 0;
        playDunDunDun();
    }
    if (isNaN(timeBonus)){
        timeBonus = 0;
    }
    return(
        <>
        <div style={{color: "white", textAlign: "center"}}>
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
        </div>
        {/* <Scores /> */}
        </>
    )
}

export default GameOver;