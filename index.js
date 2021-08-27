const express = require("express");

const port = 5600;

const app = express();

app.get("/", (req, res) => {
  res.send("deploying a simple server with vercel");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
