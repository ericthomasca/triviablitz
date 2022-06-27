import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import useSound from 'use-sound';
import plunger from '../sounds/plunger.mp3';
import nope from '../sounds/glug-b.mp3';
import LockoutTimer from './LockoutTimer';


export function LogIn() {
  const time = new Date();
    time.setSeconds(time.getSeconds());
    time.setMinutes(time.getMinutes());
    time.setHours(time.getHours() + 24);
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);
  const [timeLastPlayed, setTimeLastPlayed] = useState(new Date().getTime());
  const [playPlunger] = useSound(plunger);
  const [playNope] = useSound(nope);
  let navigate = useNavigate();
  const checkName = () => {
    
    if (document.getElementById("name").value === "") {
      playNope();
      alert("Please enter a name");
    } else {
      playPlunger();
      // setUsername(document.getElementById("name"));
      // alert(user)
      // console.log(username);
      navigate("/game");
    }
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    let newUser = {
      user: user,
      score: score,
      timeLastPlayed: timeLastPlayed
    }
    alert(user);

    fetch('/api/addUser', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {'Content-Type': 'application/json'}
    })

  };

  return (
    <>
    <div style={{textAlign: "center", color: "white"}}>
      <br></br>
      <br></br>
      {/* <h1>TriviaBlitz!</h1> */}
      <Form onSubmit={handleSubmit}>
        <h2>Player name:</h2><br></br>
        <input id="name" type="text"></input><br></br><br></br>
        <Button type="button" class="btn btn-primary" required value={user} onClick={() => checkName()} onChange={(e)=> {setUser(e.target.value)}}>Start Game</Button>
      </Form>
      <LockoutTimer expiryTimestamp={time}/>
      </div>
    </>
  );
}

export default LogIn;
