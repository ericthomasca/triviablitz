import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';


export function LogIn() {
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);
  const [timeLastPlayed, setTimeLastPlayed] = useState(new Date().getTime());

  let navigate = useNavigate();
  const checkName = () => {
    if (document.getElementById("name").value === "") {
      alert("Please enter a name");
    } else {
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
      <h1>TriviaBlitz!</h1>
      <Form onSubmit={handleSubmit}>
        <label>Player name:</label><br></br>
        <input id="name" type="text"></input><br></br>
        <Button type="button" class="btn btn-success" required value={user} onClick={() => checkName()} onChange={(e)=> {setUser(e.target.value)}}>Start Game</Button>
      </Form>
      </div>
    </>
  );
}

export default LogIn;
