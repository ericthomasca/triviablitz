import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./Question";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Question />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
