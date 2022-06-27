import "bootswatch/dist/quartz/bootstrap.min.css";
import "./theme.css"
import "./App.css";
import React, { useState } from "react";
import Body from "./pages/Body";
import Navigation from "./pages/Navigation";



function App() {
  const time = new Date();  
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
