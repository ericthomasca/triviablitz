import { useState, useEffect, useRef} from "react";
import { useNavigate, Link} from "react-router-dom";


export function HomePage(){

  let navigate = useNavigate();
  const checkName = () =>{
    if (document.getElementById("name").value == ""){
      alert("Please enter a name");
    }else{
      navigate("/game");
      

    }
  }

return(
  <>
    <h1>TriviaBlitz!</h1>
    <form>
      <label>Player name:</label>
      <input id="name" type="text"></input>
      <button onClick={()=> checkName()}>Start Game</button>
    </form>
  </>
)


}

export function Question() {
  const difficultyArray = ["easy", "medium", "hard"];
  
  let difficultyIndex = 0;


  const [changeDifficultyState, setChangeDifficultyState] = useState(difficultyArray[difficultyIndex]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const buttonRef3 = useRef();
  const buttonRef4 = useRef();

  let answerArray = [answer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]];
  let shuffledAnswersArray = answerArray
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  useEffect(() => {
      const url = "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=" + changeDifficultyState;
    // const url = "https://opentdb.com/api.php?amount=1&type=multiple";
    console.log(url);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setQuestion(json.results[0].question);
        setAnswer(json.results[0].correct_answer);
        setIncorrectAnswers(json.results[0].incorrect_answers);
        
        
        
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [changeDifficultyState]);

  
  let questionNumber = 1;
  const checkAnswer = (usersGuess) => {
    if (usersGuess == answer){
      alert("CORRECT");
      difficultyIndex += 1;
      console.log(difficultyArray[difficultyIndex])
      setChangeDifficultyState(difficultyArray[difficultyIndex]);
      // answerArray = [answer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]];
      // shuffledAnswersArray = answerArray
      // .map(value => ({ value, sort: Math.random() }))
      // .sort((a, b) => a.sort - b.sort)
      // .map(({ value }) => value)

    }else{
      alert("wrong!!");
      
    }
  };

  return (
    <>
      <h1>{question} - {changeDifficultyState.toUpperCase()}</h1>
      <hr></hr>
      <p>Shuffled</p>
      <button ref={buttonRef1} onClick={()=>checkAnswer(shuffledAnswersArray[0])}>{shuffledAnswersArray[0]}</button>
      <button ref={buttonRef2} onClick={()=> checkAnswer(shuffledAnswersArray[1])}>{shuffledAnswersArray[1]}</button>
      <button ref={buttonRef3}  onClick={()=> checkAnswer(shuffledAnswersArray[2])}>{shuffledAnswersArray[2]}</button>
      <button ref={buttonRef4} onClick={()=> checkAnswer(shuffledAnswersArray[3])}>{shuffledAnswersArray[3]}</button>
      <br></br>
      <br></br>
      <br></br>
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
