import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import http from "http";
import https from "https";
import { fileURLToPath } from 'url';
import path from 'path';
import fs from "fs";


const httpApp = express();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));

app.use(express.json());

app.listen(8800, () => console.log("Server started on port 8800"));


const url = 'mongodb+srv://triviablitz:BSl1Jqp62pHJoTeH@triviablitz.qdaeeqj.mongodb.net/?retryWrites=true&w=majority';  
// const url = "http://localhost:27017";
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
          console.log(`DAWSON ERROR !!!!!!!!!!!!!!!${err}`);
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


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
})

// const httpServer = http.createServer(httpApp);
// const httpsServer = https.createServer({
//   key: fs.readFileSync('privkey1.pem'),
//   cert: fs.readFileSync('fullchain1.pem'),
// }, app);

// httpServer.listen(80, () => {
//     console.log('HTTP Server running on port 80');
// });

// httpsServer.listen(443, () => {
//     console.log('HTTPS Server running on port 443');
// });