import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrentPage from "./pages/CurrentPage";
import Question from "./pages/Question";
import LogIn from "./pages/LogIn";
import Navigation from "./pages/Navigation";



function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <>
    <Navigation/>
    <LogIn/>
    </>
    
  );
}

export default App;
