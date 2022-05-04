const express = require("express");
const app = express();
const port = 8080;
const userData = require("./data.json");
const hraphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");

app.get("/", (req, res) => {
  res.send("my message");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
