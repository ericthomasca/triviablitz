import React, { forwardRef, useImperativeHandle }from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from "react-router-dom";

function MyTimer({ expiryTimestamp, playerScore, props, ref }) {
  const {
    seconds,
    minutes,
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
    console.log("expiryTimestamp - seconds");
    return expiryTimestamp - seconds
  }


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Remaining Time</h1>
      <div style={{fontSize: '75px'}}>
        <span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> 
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 30);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}

export default MyTimer;
 