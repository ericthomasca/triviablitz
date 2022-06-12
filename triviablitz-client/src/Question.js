import { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


export function Question() {
  const difficultyArray = ["easy", "medium", "hard"];
  let difficultyIndex = 0;

  const [changeDifficultyState, setChangeDifficultyState] = useState(
    difficultyArray[difficultyIndex]
  );
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  // const buttonRef1 = useRef();
  // const buttonRef2 = useRef();
  // const buttonRef3 = useRef();
  // const buttonRef4 = useRef();

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
      changeDifficultyState;
    console.log(url);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setQuestion(json.results[0].question);
        setAnswer(json.results[0].correct_answer);
        setIncorrectAnswers(json.results[0].incorrect_answers);

        shuffledAnswersArray = answerArray
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [changeDifficultyState]);

  const checkAnswer = (usersGuess) => {
    if (usersGuess === answer) {
      alert("CORRECT");
      difficultyIndex += 1;
      console.log(difficultyArray[difficultyIndex]);
      setChangeDifficultyState(difficultyArray[difficultyIndex]);
      // answerArray = [answer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]];
      // shuffledAnswersArray = answerArray
      // .map(value => ({ value, sort: Math.random() }))
      // .sort((a, b) => a.sort - b.sort)
      // .map(({ value }) => value)
    } else {
      alert("wrong!!");
    }
  };

  return (
    <>
      <h1>
        {question} - {changeDifficultyState.toUpperCase()}
      </h1>
      <hr></hr>
      <p>Shuffled</p>
      <>
        <Button
          // ref={buttonRef1}
          onClick={() => checkAnswer(shuffledAnswersArray[0])}
        >
          {shuffledAnswersArray[0]}
        </Button>
        <Button
          // ref={buttonRef2}
          onClick={() => checkAnswer(shuffledAnswersArray[1])}
        >
          {shuffledAnswersArray[1]}
        </Button>
        <Button
          // ref={buttonRef3}
          onClick={() => checkAnswer(shuffledAnswersArray[2])}
        >
          {shuffledAnswersArray[2]}
        </Button>
        <Button
          // ref={buttonRef4}
          onClick={() => checkAnswer(shuffledAnswersArray[3])}
        >
          {shuffledAnswersArray[3]}
        </Button>
      </>
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
