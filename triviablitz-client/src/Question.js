import { useState, useEffect } from "react";

export function Question() {
  //   const difficulty = "easy";
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    //   const url = "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=" + difficulty;
    const url = "https://opentdb.com/api.php?amount=1&type=multiple";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.results[0].question);
        setQuestion(json.results[0].question);

        console.log(json.results[0].correct_answer);
        setAnswer(json.results[0].correct_answer);

        console.log(json.results[0].incorrect_answers);
        setIncorrectAnswers(json.results[0].incorrect_answers);
        
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{question}</h1>
      <h2>{answer}</h2>
    </>
  );
}

export default Question;
