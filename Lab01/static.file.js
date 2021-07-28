/**
 * * Demo: Access static resource in Express
 */

"use strict";

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const hostName = "localhost";
const port = 3000;

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log("=> Reading file");
  fs.readFile("./public/index.html", "utf-8", (error, data) => {
    console.log("=> Reading file");
    if (error != null) {
      console.log("Cannot access file ./public/index.html");
      res.end("<h1>Cannot access file</h1>");
    } else {
      res.end(data);
    }
  });
});

app.listen(port, hostName, () => {
  console.log(`Express server is running at http://${hostName}:${port}`);
});
