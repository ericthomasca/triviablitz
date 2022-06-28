import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import useSound from 'use-sound';
import plunger from '../sounds/plunger.mp3';
import nope from '../sounds/glug-b.mp3';
import LockoutTimer from './LockoutTimer';


export function LogIn() {
  const time = new Date();
    time.setSeconds(time.getSeconds());
    time.setMinutes(time.getMinutes());
    time.setHours(time.getHours() + 24);
  const [name, setName] = useState("ENTERED NAME");
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
      setName(document.getElementById("name").value);
      
      // alert(user)
      // console.log(username);
      // let newUser = {
      //   name: name,
      //   score: score,
      //   timeLastPlayed: timeLastPlayed
      // }
      // alert(name);
      // alert(`${newUser.name} ${newUser.score} ${newUser.timeLastPlayed}`);
      // var formdata = new FormData();
      // formdata.append("name", name);
      // formdata.append("score", score);
      // formdata.append("timeLastPlayed", timeLastPlayed);
    

      // var requestOptions = {
      // method: 'POST',
      // body: formdata,
      // redirect: 'follow'
      // };
  
      // fetch('/api/addUser', {
      //   method: 'POST',
      //   body: JSON.stringify(newUser),
      //   headers: {'Content-Type': 'application/json'}
      // })
      // navigate("/game");
      
    }
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    let newUser = {
      name: name,
      score: score,
      timeLastPlayed: timeLastPlayed
    }
    // alert(user);
    alert(`${newUser.name} ${newUser.score} ${newUser.timeLastPlayed}`)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": name,
      "score": score,
      "timeLastPlayed": {
        timeLastPlayed
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8800/api/addUser", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // fetch('/api/addUser', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: name,
    //     score: score,
    //     timeLastPlayed: timeLastPlayed
    //   }),
    //   headers: {'Content-Type': 'application/json'}
    // })
    navigate("/game");

  };

  return (
    <>
    <div style={{textAlign: "center", color: "white"}}>
      <br></br>
      <br></br>
      <Form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
        <FormGroup role="form">
          <h2>Player name:</h2><br></br>
          <FormControl id="name" type="text" onChange={(e)=> {setName(e.target.value)}}/><br></br><br></br>
          <Button type="submit" className="btn btn-info" required onClick={() => checkName()}>Start Game</Button>
        </FormGroup>
      </Form>
      <LockoutTimer expiryTimestamp={time}/>
      </div>
    </>
  );
}

export default LogIn;
