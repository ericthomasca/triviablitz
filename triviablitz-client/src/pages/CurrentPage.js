import LogIn from "./LogIn";
import Question from "./Question";


export function CurrentPage(props){
    // output HomePage, Question, Leaderboards, GameOver
    // conditional rendering
    
    return(
        <>
        <LogIn />
        <Question/>
        </>
    )
}

export default CurrentPage;