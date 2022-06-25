import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());
app.listen(8800, () => console.log("Server started on port 8800"));

const url = "mongodb://localhost:27017";  
// TODO switch url to mongo atlas 

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
