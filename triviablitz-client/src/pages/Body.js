import LogIn from "./LogIn";
import Question from "./Question";


export function Body(){
    // output HomePage, Question, Leaderboards, GameOver
    // conditional rendering
    
    return(
        <>
        <LogIn />
        <Question/>
        </>
    )
}

export default Body;