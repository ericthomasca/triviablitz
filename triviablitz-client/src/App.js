import "./App.css";
import React, { useState } from "react";
import Body from "./pages/Body";
import Navigation from "./pages/Navigation";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <>
      <Navigation />
      <Body />
    </>
  );
}

export default App;
