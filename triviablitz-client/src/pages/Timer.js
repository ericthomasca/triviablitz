import React, { useRef, useState, forwardRef, useImperativeHandle }from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from "react-router-dom";
import "./timerStyles.css";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function TimerPage({expiryTimestamp, playerScore}){
  return(
    <>
      <div className='timer-wrapper'>
        <CountdownCircleTimer isPlaying duration={30} colors={["#03ff46", "#F7B801", "#A30000", "#A30000"]} colorsTime={[30, 15, 10, 0]}>
        {renderTime}
        </CountdownCircleTimer>
      </div>

      <MyTimer expiryTimestamp={expiryTimestamp} playerScore={playerScore}/>
    </>
  )
}

const renderTime = ({ remainingTime })=>{
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 30);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return(
    <div className="time-wrapper">
      <div key={remainingTime} style={{color: "white"}} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  )
}
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
    <div>
      <div style={{textAlign: 'center', color: 'white'}}>
        {/* <div style={{fontSize: '60px'}}>
          <span>{seconds}<h1 style={{ fontSize: "30%"}}>Remaining Time</h1></span>
        </div> */}
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

export default TimerPage;
 