const express = require("express");
const app = express();

const hostName = "localhost";
const port = 3000;

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Hello 123</h1>");
});

app.listen(port, hostName, () => {
  console.log(`Express Server is running at http://${hostName}:${port}`);
})
