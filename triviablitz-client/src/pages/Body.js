import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from "./LogIn";
import Question from "./Question";
import GameOver from './GameOver';

export function Body() {
  // output HomePage, Question, Leaderboards, GameOver
  // conditional rendering

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/game" element={<Question />} />
          <Route exact path="/gameover" element={<GameOver />}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default Body;
