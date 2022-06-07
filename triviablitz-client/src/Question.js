import { useState, useEffect } from 'react';


export function Game() {

    const [question, setQuestion] = useState(null);
    const difficulty = 'easy'
    const API = 'https://opentdb.com/api.php?amount=1&type=multiple&difficulty=' + difficulty;

}

export default Game;