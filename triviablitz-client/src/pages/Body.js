import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from "./LogIn";
import QuestionPage from "./Question";
import GameOver from './GameOver';
import MyTimer from './Timer';
import Scores from './Scores';
import useSound from 'use-sound';
import AboutPage from './About';

export function Body() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/game" element={<QuestionPage />} />
          <Route exact path="/gameover" element={<GameOver />}/>
          <Route exact path='/timer' element={<MyTimer />}/>
          <Route exact path='/scores' element={<Scores />}/>
          <Route exact path='/about' element={<AboutPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default Body;
