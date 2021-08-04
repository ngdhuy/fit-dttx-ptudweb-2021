const express = require('express');
const router = express.Router();

const data = require("./data");

router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(data));
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let userObj = data.users.find((item) => item.uid === parseInt(id));
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(userObj));
});

router.get("/:id/roles/:roleID", (req, res) => {
  let id = req.params.id;
  let roleID = req.params.roleID;

  try {
    let userObj = data.users.find((item) => item.uid === parseInt(id));
    let roleObj = userObj.roles.find((role) => role.id == roleID);

    res.writeHead(200, { "Content-Type": "text/json" });
    res.end(JSON.stringify(roleObj));
  } catch {
    res.writeHead(404, { "Content-Type": "text/json" });
    res.end("Cannot find object");
  }
});

router.get("/arr/:from-:to", (req, res) => {
  let fromID = parseInt(req.params.from); 
  let toID = parseInt(req.params.to);
  let arrObj = [];

  data.users.forEach((item) => {
    if(fromID <= item.uid && item.uid <= toID)
      arrObj.push(item);
  })

  res.writeHead(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(arrObj));
});

module.exports = router;