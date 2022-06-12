import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Question from "./Question";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/game"
          element={<Question questionDifficulty={"easy"} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
