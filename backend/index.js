const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db.js");

// importing and calling function from db to connect mongodb
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
