import express from "express";
import {MongoClient} from "mongodb";

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => res.send("Hello Stephen"));

app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`))

app.post('/hello', (req, res) =>{
    res.send(`Hello ${req.body.name} this is a POST request`);
});

app.post('/api/addUser', async(req, res) =>{
    try{
        await client.connect();

        const db = client.db('users');
        const newUser = 

        res.sendStatus(200);

        client.close();
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
        
    }
})


app.listen(8000, () => console.log('listening on port 8000'));
