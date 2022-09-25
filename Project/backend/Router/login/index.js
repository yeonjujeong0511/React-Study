const express = require("express");
const router = express.Router();

router.get("/hi", (req, res) => {
  console.log(req, "안녀어어어엉");
  res.send("hihi");
});

module.exports = router;
