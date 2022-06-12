import express from "express";
import {MongoClient} from "mongodb";

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => res.send("Hello Stephen"));

app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`))

app.post('/hello', (req, res) =>{
    res.send(`Hello ${req.body.name} this is a POST request`);
});

app.post('/api/addQuestions', async(req, res) =>{
    try{
        await client.connect();
        const url = "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=easy"
        // const urlMedium = "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=medium"
        // const urlHard = "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=hard"
        const fetchData = async () => {

            try {
              const response = await fetch(url);
              const json = await response.json();
              setQuestion(textFormatFix(json.results[0].question));
              setAnswer(json.results[0].correct_answer);
              setIncorrectAnswers(json.results[0].incorrect_answers);
      
      
            } catch (error) {
              console.log("error", error);
            }
          };
          fetchData();
        
        const db = client.db('questions');

        const easyQuestion = await db.collection('easyQuestions').insertOne({name:req.body.name, date:req.body.date, 
            actors:req.body.actors, poster:req.body.poster, rating:req.body.rating});

        res.sendStatus(200);

        client.close();

    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
        
    }
})


app.listen(8000, () => console.log('listening on port 8000'));
