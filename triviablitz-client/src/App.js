import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import QuestionPage from "./Question";
import MyTimer from "./Timer";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/game"
          element={<QuestionPage />}
        ></Route>
        <Route path="/timer"
        element={<MyTimer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
