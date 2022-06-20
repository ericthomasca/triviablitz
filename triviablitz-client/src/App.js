import "./App.css";
import React, { useState } from "react";
import Body from "./pages/Body";
import Navigation from "./pages/Navigation";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const [username, setUsername] = useState("");
  return (
    <>
      <Navigation userName={username} setUsername={setUsername}/>
      <Body userName={username} setUsername={setUsername}/>
    </>
  );
}

export default App;
