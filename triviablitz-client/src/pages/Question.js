import React from 'react'
import { useState, useEffect, useRef } from "react";
import {Button, ListGroup} from "react-bootstrap";
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useTimer } from 'react-timer-hook';
import MyTimer from './Timer';
import TimerPage from './Timer';

export function QuestionPage() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 30); // 30 second timer
  let [playerScore, setPlayerScore] = useState(0);
  return(
    <>
    <TimerPage expiryTimestamp={time} playerScore={playerScore}/>
    <Question setPlayerScore={setPlayerScore} playerScore={playerScore}/>
    </>
  )
}


 

export function Question({setPlayerScore, playerScore}) {
  let navigate = useNavigate();
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
  let shuffledAnswersArray = answerArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const textFormatFix = (inputText) => {
    return inputText
      .replace(/&quot;/g, '"')
      .replace(/&eacute;/g, "é")
      .replace(/&rsquo;/g, "’")
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
      setCorrectOrNot("CORRECT")
      //difficultyIndex += 1;
      if (difficultyArray[changeDifficultyState] === "easy") {
        setPlayerScore(playerScore += 1);
        console.log(playerScore);
        // document.getElementById("l1").classList.remove("bg-light");
        // document.getElementById("l1").classList.add("bg-success");
        document.getElementById("progress").style.width = "33%";
        // document.getElementById("l2").classList.remove("bg-secondary");
        // document.getElementById("l2").classList.add("bg-light");
      } else if (difficultyArray[changeDifficultyState] === "medium") {
        setPlayerScore(playerScore += 3);
        console.log(playerScore);
        // document.getElementById("l2").classList.remove("bg-light");
        // document.getElementById("l2").classList.add("bg-success");
        document.getElementById("progress").style.width = "66%";
        // document.getElementById("l3").classList.remove("bg-secondary");
        // document.getElementById("l3").classList.add("bg-light");
        // document.getElementById("l2").classList.remove("active");
        // document.getElementById("l3").classList.add("active");
      } else if (difficultyArray[changeDifficultyState] === "hard") {
        document.getElementById("progress").style.width = "100%";
        // document.getElementById("l3").classList.remove("bg-light");
        // document.getElementById("l3").classList.add("bg-success");
        let delayInMilliseconds = 500; //0.5 second
        setPlayerScore(playerScore += 5);
        setTimeout(function() {          
          navigate("/gameover", { state: { id: 1, score: playerScore, timeRemaining: ChildRef.timeRemaining}});
        }, delayInMilliseconds);   
      }

      setChangeDifficultyState(changeDifficultyState + 1);
      console.log(difficultyArray[changeDifficultyState]);      
    } else {
      alert(`Answer Incorrect! The correct answer is:\n`
      + answer + 
      `\nTry again tomorrow!`);      
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
  console.log(arr);

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
        <h3>Correct: {answerArray[0]}</h3>
      </>
    </>
  );
}

export default QuestionPage;
