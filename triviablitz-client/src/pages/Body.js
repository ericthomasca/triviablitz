import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from "./LogIn";
import Question from "./Question";
import GameOver from './GameOver';
import MyTimer from './Timer';

export function Body({username, setUsername}) {
  // output HomePage, Question, Leaderboards, GameOver
  // conditional rendering
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn username={username} setUsername={setUsername}/>} />
          <Route exact path="/game" element={<Question />} />
          <Route exact path="/gameover" element={<GameOver />}/>
          <Route exact path='/timer' element={<MyTimer expiryTimestamp={time} />}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default Body;
