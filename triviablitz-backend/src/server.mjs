import express from "express";
import { MongoClient } from "mongodb";

import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/build')));

app.use(express.json());

app.listen(8800, () => console.log("Server started on port 8800"));


const url = 'mongodb+srv://triviablitz:BSl1Jqp62pHJoTeH@triviablitz.qdaeeqj.mongodb.net/?retryWrites=true&w=majority';  
// TODO switch url to mongo atlas 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
})

app.get("/api/getUsers", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const db = client.db("triviablitz");
      db.collection("users")
        .find({})
        .toArray((err, result) => {
          if (err) {
            console.log(err);
            return;
          } else {
            res.send(result);
          }
        });
    }
  });
});

app.get("/api/getUser/:id", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const db = client.db("triviablitz");
      db.collection("users")
        .find({ _id: req.params.id })
        .toArray((err, result) => {
          if (err) {
            console.log(err);
            return;
          } else {
            res.send(result);
          }
        });
    }
  });
});

app.post("/api/addUser", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const db = client.db("triviablitz");
      db.collection("users").insertOne(req.body, (err, result) => {
        if (err) {
          console.log(err);
          return;
        } else {
          res.send(result);
        }
      });
    }
  });
});

app.put("/api/updateUser/:name", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const db = client.db("triviablitz");
      db.collection("users").updateOne(
        { name: req.params.name },
        {
          $set: {
            score: req.body.score,
            timeLastPlayed: req.body.timeLastPlayed,
          },
        },
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          } else {
            res.send(result);
          }
        }
      );
    }
  });
});

app.delete("/api/deleteUser/:name", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const db = client.db("triviablitz");
      db.collection("users").deleteOne(
        { name: req.params.name },
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          } else {
            res.send(result);
          }
        }
      );
    }
  });
});
