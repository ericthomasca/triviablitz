import { useState, useEffect } from 'react';


export function Question() {

    const [question, setQuestion] = useState(null);
    const difficulty = 'easy'
    const API = 'https://opentdb.com/api.php?amount=1&type=multiple&difficulty=' + difficulty;

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch(API);
          const body = await result.json();
          setQuestion(body);
        };
        fetchData();
      }, [API]);

}

export default Question;