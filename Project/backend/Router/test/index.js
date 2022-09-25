const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("테스트 만듬");
});

Router.get("/yj", (req, res) => {
  res.send("연주꺼");
});

module.exports = Router;
