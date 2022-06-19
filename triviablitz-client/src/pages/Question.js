import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";



export function Question() {
  // let navigate = useNavigate();
  const difficultyArray = ["easy", "medium", "hard"];


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

        // shuffledAnswersArray = answerArray
        // .map((value) => ({ value, sort: Math.random() }))
        // .sort((a, b) => a.sort - b.sort)
        // .map(({ value }) => value);

      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [changeDifficultyState]);

  const checkAnswer = (usersGuess) => {
    if (usersGuess === answer) {
      alert("CORRECT");
      //difficultyIndex += 1;
      
      setChangeDifficultyState(changeDifficultyState + 1);
      console.log(difficultyArray[changeDifficultyState]);
      // answerArray = [answer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]];
      // shuffledAnswersArray = answerArray
      // .map(value => ({ value, sort: Math.random() }))
      // .sort((a, b) => a.sort - b.sort)
      // .map(({ value }) => value)
    } else {
      alert("Answer Incorrect! Try again tomorrow!");
      // navigate("/");
    }
    // if (difficultyArray[difficultyIndex] === "hard"){
    //   navigate("/");
    // }
  };    

  function shuffleIndex(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  var arr = [0, 1, 2, 3];
  shuffleIndex(arr);
  console.log(arr);

  return (
    <>
      <h1>
        {question} - {difficultyArray[changeDifficultyState].toUpperCase()}
      </h1>
      <hr></hr>
      <p>Shuffled</p>
      <> 
        <Button
          onClick={() => checkAnswer(shuffledAnswersArray[arr[0]])}>
          {shuffledAnswersArray[arr[0]]}
        </Button>
        <Button
          onClick={() => checkAnswer(shuffledAnswersArray[arr[1]])}>
          {shuffledAnswersArray[arr[1]]}
        </Button>
        <Button
          onClick={() => checkAnswer(shuffledAnswersArray[arr[2]])}>
          {shuffledAnswersArray[arr[2]]}
        </Button>
        <Button
          onClick={() => checkAnswer(shuffledAnswersArray[arr[3]])}>
          {shuffledAnswersArray[arr[3]]}
        </Button>
      </>
      {/* TODO: Fix formatting issue with buttons */}
      <br></br>
      <br></br>
      <br></br>
      <br />
      <br />
      <p>unshuffled</p>
      <h2>{answer} : correct answer</h2>
      <h2>{incorrectAnswers[0]}</h2>
      <h2>{incorrectAnswers[1]}</h2>
      <h2>{incorrectAnswers[2]}</h2>
    </>
  );
}

export default Question;
