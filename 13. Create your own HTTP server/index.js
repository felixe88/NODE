require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hi this is another modified message!!" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
