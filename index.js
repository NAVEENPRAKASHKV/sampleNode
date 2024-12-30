const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is node js file");
});

app.listen(5000, () => {
  console.log("port running on 5000");
});
