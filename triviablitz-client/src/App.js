import "bootswatch/dist/quartz/bootstrap.min.css";
import "./theme.css"
import "./App.css";
import React, { useState } from "react";
import Body from "./pages/Body";
import Navigation from "./pages/Navigation";



function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <>
      <div className="backgroundDiv">
      <Navigation />
      <Body />
      </div>
    </>
  );
}

export default App;
