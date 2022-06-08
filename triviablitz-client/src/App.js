import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./Question";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/q1" element={<Question questionDifficulty={"easy"}/>}></Route>
        <Route path="/q2" element={<Question questionDifficulty={"medium"}/>}></Route>
        <Route path="/q3" element={<Question questionDifficulty={"hard"}/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
