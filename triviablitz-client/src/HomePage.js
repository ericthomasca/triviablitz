import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);
  const [timeLastPlayed, setTimeLastPlayed] = useState(new Date().getTime());

  let navigate = useNavigate();
  const checkName = () => {
    if (document.getElementById("name").value === "") {
      alert("Please enter a name");
    } else {
      navigate("/game");
    }
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    let newUser = {
      user: user,
      score: score,
      timeLastPlayed: timeLastPlayed

    }

    fetch('/api/addUser', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {'Content-Type': 'application/json'}
    })

  };

  return (
    <>
      <h1>TriviaBlitz!</h1>
      <form onSubmit={handleSubmit}>
        <label>Player name:</label>
        <input id="name" type="text"></input>
        <button required value={user} onClick={() => checkName()} onChange={(e)=> setUser(e.target.value)}>Start Game</button>
      </form>
    </>
  );
}

export default HomePage;
