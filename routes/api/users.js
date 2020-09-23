const express = require("express");

const router = express.Router();

// @routem    GET api/users
// @desc      Test route
// @access    Public
router.get("/", (req, res) => {
  res.send("User route");
});

module.exports = router;
