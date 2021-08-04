"use strict";
console.clear();

const { json } = require("express");
const express = require("express");

const app = express();
const port = 3000;
const hostName = "localhost";

app.all("*", (req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
});

//! GET --> READ data
app.get("/", (req, res) => {
  res.send("This is GET method");
});

//! POST --> CREATE data
app.post("/", (req, res) => {
  res.send("This is POST method");
});

//! PUT/PATCH --> Update data
app.put("/", (req, res) => {
  res.send("This is PUT method");
});

//! DELETE --> DELETE data
app.delete("/", (req, res) => {
  res.send("This is DELETE method");
});

const usersRouter = require('./user.router');
app.use('/users', usersRouter);

const f1 = (req, res, next) => {
  console.log("F1");
  next();
}

const f2 = (req, res, next) => {
  console.log("F2");
  next();
}

app.get('/func',[f1, f2], (req, res, next) => {
  console.log("=> Func is proceessing");
  res.end("Function is called");
  next()
}, (req, res) => {
  console.log("=> Respone DONE");
})

app.listen(port, hostName, () => {
  console.log(`Server is starting at http://${hostName}:${port}`);
});
