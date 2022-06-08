import { useState, useEffect, useRef} from "react";

export function Question() {
  //   const difficulty = "easy";
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const buttonRef3 = useRef();
  const buttonRef4 = useRef();

  const answerArray = [answer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]];
  let shuffledAnswersArray = answerArray
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  useEffect(() => {
    //   const url = "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=" + difficulty;
    const url = "https://opentdb.com/api.php?amount=1&type=multiple";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setQuestion(json.results[0].question
          .replace(/&quot;/g,'"')
          .replace(/&eacute;/g,'é')            // this list will grow, might have to be added to all text pulled 
          .replace(/&rsquo;/g,'’')             // from question API, will become a function then
          .replace(/&#039;/g,"'"));
        setAnswer(json.results[0].correct_answer);
        setIncorrectAnswers(json.results[0].incorrect_answers);
        
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const checkAnswer = (usersGuess) => {
    if (usersGuess === answer){
      console.log("CORRECT");
    }else{
      console.log("wrong!!");
    }
  };

  return (
    <>
      <h1>{question}</h1>
      <hr></hr>
      <p>Shuffled</p>
      {/* //FIXME: this doesnt work for some reason... It calls all of the buttons on loading. Would like to fix if possible  */}
      {/* <button ref={buttonRef1} onClick={checkAnswer(shuffledAnswersArray[0])}>{shuffledAnswersArray[0]}</button>
      <button ref={buttonRef2} onClick={checkAnswer(shuffledAnswersArray[1])}>{shuffledAnswersArray[1]}</button>
      <button ref={buttonRef3}  onClick={checkAnswer(shuffledAnswersArray[2])}>{shuffledAnswersArray[2]}</button>
      <button ref={buttonRef4} onClick={checkAnswer(shuffledAnswersArray[3])}>{shuffledAnswersArray[3]}</button> */}

      <button ref={buttonRef1} onClick={()=> {
        if(answer === shuffledAnswersArray[0]){
          console.log("Correct!");
        }else{
          console.log(`incorrect.. answer is ${answer}`);
        }
      }}>{shuffledAnswersArray[0]}</button>
      <button ref={buttonRef2} onClick={()=>  {
        if(answer === shuffledAnswersArray[1]){
          console.log(`Correct!`)
        }else{
          console.log(`incorrect.. answer is ${answer}`);
        }
      }}>{shuffledAnswersArray[1]}</button>
      <button ref={buttonRef3}  onClick={()=> {
        if(answer === shuffledAnswersArray[2]){
          console.log(`Correct!`)
        }else{
          console.log(`incorrect.. answer is ${answer}`);
        }
      }}>{shuffledAnswersArray[2]}</button>
      <button ref={buttonRef4} onClick={()=> {
        if(answer === shuffledAnswersArray[3]){
          console.log(`Correct!`)
        }else{
          console.log(`incorrect.. answer is ${answer}`);
        }
      }}>{shuffledAnswersArray[3]}</button>

      <br/>
      <br/>
      <p>unshuffled</p>
      <h2>{answer} : correct answer</h2>
      <h2>{incorrectAnswers[0]}</h2>
      <h2>{incorrectAnswers[1]}</h2>
      <h2>{incorrectAnswers[2]}</h2>
    </>
  );
}

export default Question;
