import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => res.send("Hello Stephen"));

app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.post("/hello", (req, res) => {
  res.send(`Hello ${req.body.name} this is a POST request`);
});

const client = new MongoClient('mongodb://localhost:27017');
app.post('/api/addUser', async (req, res) => {
  try {
    await client.connect();

    const db = client.db('users');
    const newUser = await db.collection('users').insertOne({user: req.body.user, score: req.body.score,
        timeLastPlayed: req.body.timeLastPlayed
      });
    console.log(`new user ${newUser.user}`);
    // cookie: req.body.cookie

    res.sendStatus(200);
    client.close();

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(8000, () => console.log("listening on port 8000"));
