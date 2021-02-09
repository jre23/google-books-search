const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
// define middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// serve static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// API routes
// app.use();
// send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// set up connection to mongodb using mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
// start the server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});