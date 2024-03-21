const express = require("express");
const db = require("./db");
const time = require("./ts");
const cors = require("cors");
const client = require("./redis");
const app = express();
const keyName = "AllSubmissions";

app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  const Username = req.body.email;
  const Code_Language = req.body.language;
  const Stdin = req.body.stdin;
  const Source_Code = req.body.source_code.substring(0, 100);
  const Time_Of_Submission = time.time_stamp();
  db.connect(function () {
    const sql =
      "INSERT INTO Details(Username,Code_Language,Stdin,Source_Code,Time_Of_Submission) VALUES ?";
    const values = [
      [Username, Code_Language, Stdin, Source_Code, Time_Of_Submission],
    ];
    db.query(sql, [values], async function (error, result) {
      if (error) throw error;
      await client.del(keyName);
      res.send("Submission Recorded" + result.email);
    });
  });
});

app.get("/", async (req, res) => {
  const getCacheData = await client.get(keyName);
  if (getCacheData) {
    console.log("Returning data from Redis");
    res.send(getCacheData);
  } else {
    db.connect(function () {
      db.query("SELECT * FROM Details", async (err, rows) => {
        if (!err) {
          await client.set(keyName, JSON.stringify(rows));
          console.log("Returning data from DB");
          res.send(rows);
        } else console.log("Error in fetching from DB", err);
      });
    });
  }
});

app.listen(8080, async () => {
  console.log("Server is running");
});
