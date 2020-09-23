const express = require("express");

const router = express.Router();

// @routem    GET api/auth
// @desc      Auth route
// @access    Public
router.get("/", (req, res) => {
  res.send("Auth route");
});

module.exports = router;
