import { useNavigate } from "react-router-dom";

export function HomePage() {
  let navigate = useNavigate();
  const checkName = () => {
    if (document.getElementById("name").value === "") {
      alert("Please enter a name");
    } else {
      navigate("/game");
    }
  };

  return (
    <>
      <h1>TriviaBlitz!</h1>
      <form>
        <label>Player name:</label>
        <input id="name" type="text"></input>
        <button onClick={() => checkName()}>Start Game</button>
      </form>
    </>
  );
}

export default HomePage;
