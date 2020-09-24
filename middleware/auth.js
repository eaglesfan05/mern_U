const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // get token
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    //   decode token from header
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // set req.user value to the decoded value and user that is set in payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
