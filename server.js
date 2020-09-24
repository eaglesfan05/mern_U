const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();

// Connect Database
connectDB();

// init middleware to get the data from req.body
app.use(express.json({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running"));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
