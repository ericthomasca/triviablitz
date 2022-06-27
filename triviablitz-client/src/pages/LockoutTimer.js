import React, { useRef, useState, forwardRef, useImperativeHandle }from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from "react-router-dom";
import "./timerStyles.css";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function LockoutTimer({expiryTimestamp, playerScore}){
    return(
      <>
        <div className='timer-wrapper'>
          <CountdownCircleTimer isPlaying duration={86400} colors={["#03ff46", "#F7B801", "#A30000", "#A30000"]} colorsTime={[30, 15, 10, 0]}>
          {/* {renderTime} */}
          </CountdownCircleTimer>
        </div>
        <MyTimer expiryTimestamp={expiryTimestamp} playerScore={playerScore}/>
      </>
    )
  }

const time = new Date();

  time.setHours(time.getHours() + 24); // 24 hour timer

//   const calculateTimeLeft = () => {
//     let nextDay = new Date($date.nextDay);
//   }

  function MyTimer({ expiryTimestamp, playerScore, props, ref }) {
    const {
      seconds,
      minutes,
      hours,
      isRunning,
      start,
      pause,
      resume,
      restart,
      onTimeOver,
    } = useTimer({ expiryTimestamp, onExpire: () => navigate("/gameover", { state: { id: 1, score: playerScore, timeRemaing: 0 } })});
    let navigate = useNavigate();
  
    useImperativeHandle(ref, ()=>({
      timeRemaing
    }))
    const timeRemaing = () =>{
      pause()
      console.log(expiryTimestamp - seconds);
      console.log(expiryTimestamp - minutes);


      console.log("expiryTimestamp - seconds");
      return expiryTimestamp - seconds
    }    
  
    return (
      <div>
        <div style={{textAlign: 'center', color: 'white'}}>
          <div style={{fontSize: '60px'}}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><h1 style={{ fontSize: "30%"}}>Until next play unlocked!</h1>
            
          </div>
          {/* <p>{isRunning ? 'Running' : 'Not running'}</p>  */}
          {/* <button onClick={start}>Start</button> */}
          {/* <button onClick={pause}>Pause</button> */}
          {/* <button onClick={resume}>Resume</button> */}
          {/* <button onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 30);
            restart(time)
          }}>Restart</button> */}
        </div>
      </div>
    );
  }
  
  export default LockoutTimer;
   