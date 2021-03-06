import React from 'react'
import { useState, useEffect, useRef } from "react";
import {Button, ListGroup} from "react-bootstrap";
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTimer } from 'react-timer-hook';
import MyTimer from './Timer';
import TimerPage from './Timer';
import LockoutTimer from './LockoutTimer';
import useSound from 'use-sound';
import boopSfx from '../sounds/boop.mp3';
import dundundun from '../sounds/dun-dun-dun.mp3';
import cheer from '../sounds/fanfare.mp3';
import wrong from '../sounds/disable-sound.mp3';
import millionaire from '../sounds/millionaire.mp3';
import right from '../sounds/enable-sound.mp3';



export function QuestionPage() {
  const time = new Date();
  // const [playMillionaire, {stop}] = useSound(millionaire);
  // playMillionaire()
  
  
  time.setSeconds(time.getSeconds() + 30); // 30 second timer
  let [playerScore, setPlayerScore] = useState(0);
  // const stopPlay = () =>{
  //   stop();
  // }
  return(
    <>
    <TimerPage expiryTimestamp={time} playerScore={playerScore} />
    <Question setPlayerScore={setPlayerScore} playerScore={playerScore}/>
    </>
  )
} 

export function Question({setPlayerScore, playerScore}) {
  const location = useLocation();
  // const [playMillionaire, {stop}] = useSound(millionaire);
  // playMillionaire()
  // const stopPlay = () =>{
  //   stop();
  // }

  let navigate = useNavigate();
  const [play] = useSound(dundundun);
  const [playCorrect] = useSound(right);
  const [playWrong] = useSound(wrong);
  
  const difficultyArray = ["easy", "medium", "hard"];
  const ChildRef = useRef();
  const [correctOrNot, setCorrectOrNot] = useState("");

  const [changeDifficultyState, setChangeDifficultyState] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  let answerArray = [
    answer,
    incorrectAnswers[0],
    incorrectAnswers[1],
    incorrectAnswers[2],
  ];

  const updateUsersScore =() =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "_id": "62bb1d76afd511218f16a653",
      "name": location.state.newUser.name,
      "score": location.state.newUser.score,
      "timeLastPlayed": location.state.newUser.timeLastPlayed
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`/api/updateUser/${location.state.newUser.name}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }



  let shuffledAnswersArray = answerArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const textFormatFix = (inputText) => {
    return inputText
      .replace(/&quot;/g, '"')
      .replace(/&eacute;/g, "??")
      .replace(/&rsquo;/g, "???")
      .replace(/&#039;/g, "'");
  };

  useEffect(() => {
    const url =
      "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=" +
      difficultyArray[changeDifficultyState];
    console.log(url);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setQuestion(textFormatFix(json.results[0].question));
        setAnswer(json.results[0].correct_answer);
        setIncorrectAnswers(json.results[0].incorrect_answers);        
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [changeDifficultyState]);

  const checkAnswer = (usersGuess) => {
    if (usersGuess === answer) {
      // alert("CORRECT");
      playCorrect();
      setCorrectOrNot("CORRECT")
      //difficultyIndex += 1;
      if (difficultyArray[changeDifficultyState] === "easy") {
        setPlayerScore(playerScore += 1);
        location.state.newUser.score =playerScore;
        console.log(playerScore);
        
        document.getElementById("progress").style.width = "33%";
        
      } else if (difficultyArray[changeDifficultyState] === "medium") {
        setPlayerScore(playerScore += 3);
        
        location.state.newUser.score =playerScore;
        console.log(`NEW USER LCOATION SCORE FINAL${location.state.newUser.score}`)
        console.log(playerScore);
        
        document.getElementById("progress").style.width = "66%";
        
      } else if (difficultyArray[changeDifficultyState] === "hard") {
        document.getElementById("progress").style.width = "100%";
        
        let delayInMilliseconds = 500; //0.5 second
        setPlayerScore(playerScore += 5);
        location.state.newUser.score =playerScore;
        console.log(`NEW USER LCOATION SCORE FINAL${location.state.newUser.score}`)
        updateUsersScore();
        // stopPlay();
        setTimeout(function() { 
          let playCounter = 0; 
                
          navigate("/gameover", { state: { id: 1, score: playerScore, timeRemaining: ChildRef.timeRemaining}});
        }, delayInMilliseconds);   
      }

      setChangeDifficultyState(changeDifficultyState + 1);
      // console.log(difficultyArray[changeDifficultyState]);      
    } else {
      // stopPlay()
      playWrong();
      alert(`Answer Incorrect! The correct answer is:\n`
      + answer + 
      `\nTry again tomorrow!`);
      updateUsersScore();
      navigate("/gameover", { state: { id: 1, score: playerScore, timeRemaining: ChildRef.timeRemaining} });
    }
    setCorrectOrNot("")
    // if (difficultyArray[difficultyIndex] === "hard"){
    //   navigate("/");
    // }
  };

  function shuffleIndex(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  var arr = [0, 1, 2, 3];
  shuffleIndex(arr);
  // console.log(arr);
  

  return (
    <>
      {/* <h1 style={{textAlign: "center", fontSize: "150%", color: "white"}}>
        {question} - {difficultyArray[changeDifficultyState].toUpperCase()}
      </h1> */}
     
      <>
        <div style={{maxWidth: "70%", margin: "auto", textAlign: "center"}}>
        
          {/* <ul class="pagination pagination-lg" style={{textAlign: "center",  margin: "auto"}}>
            <li class="page-item active" id='l1'>
              <a class="page-link" href="#">Easy</a>
            </li>
            <li class="page-item" id='l2'>
              <a class="page-link" href="#">Medium</a>
            </li>
            <li class="page-item" id='l3'>
              <a class="page-link" href="#">Hard</a>
            </li>
          </ul> */}
          <h1 style={{textAlign: "center", fontSize: "150%", color: "white"}}>
          {question} - {difficultyArray[changeDifficultyState]}
        </h1>
        <h3>{correctOrNot}</h3>
        <br/>
          <ListGroup style={{maxWidth: "60%", margin: "auto"}}>
            <ListGroup.Item action variant="info"  id="button1" onClick={() => checkAnswer(shuffledAnswersArray[arr[0]])}>
            {shuffledAnswersArray[arr[0]]}
            </ListGroup.Item>
            <ListGroup.Item action variant="light"  id="button2" onClick={() => checkAnswer(shuffledAnswersArray[arr[1]])}>
            {shuffledAnswersArray[arr[1]]}
            </ListGroup.Item>
            <ListGroup.Item action variant="info" id="button3" onClick={() => checkAnswer(shuffledAnswersArray[arr[2]])}>
            {shuffledAnswersArray[arr[2]]}
            </ListGroup.Item>
            <ListGroup.Item action variant="light"  id="button4" onClick={() => checkAnswer(shuffledAnswersArray[arr[3]])}>
            {shuffledAnswersArray[arr[3]]}
            </ListGroup.Item>
          </ListGroup>
            {/* <Button style={{fontSize: "28%"}} href="#" class="list-group-item list-group-item-action" onClick={() => checkAnswer(shuffledAnswersArray[arr[0]])}>
              {shuffledAnswersArray[arr[0]]}
            </Button><br></br>
            <Button style={{fontSize: "28%"}} href="#" class="list-group-item list-group-item-action" onClick={() => checkAnswer(shuffledAnswersArray[arr[1]])}>
              {shuffledAnswersArray[arr[1]]}
            </Button><br></br>
            <Button style={{fontSize: "28%"}} href="#" class="list-group-item list-group-item-action" onClick={() => checkAnswer(shuffledAnswersArray[arr[2]])}>
              {shuffledAnswersArray[arr[2]]}
            </Button><br></br>
            <Button style={{fontSize: "28%"}} href="#" class="list-group-item list-group-item-action" onClick={() => checkAnswer(shuffledAnswersArray[arr[3]])}>
              {shuffledAnswersArray[arr[3]]}
            </Button> */}
        <br></br>
        {/* <span class="badge bg-light" id='l1'>Easy</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="badge bg-secondary" id='l2'>Medium</span>&nbsp;&nbsp;&nbsp;
        <span class="badge bg-secondary" id='l3'>Hard</span><br></br> */}
        
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" id="progress" style={{width: "5%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
        </div>
        </div>
        {/* <h3>Correct: {answerArray[0]}</h3> */}
        {/* <h3>Times played today: playCounter</h3> // Just an idea to allow 3 plays per day */}
      </>
    </>
  );
}

export default QuestionPage;
