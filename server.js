// require dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
// initialize express app
const app = express();
// configure the PORT
const PORT = process.env.PORT || 3001;
// use middleware to handle json, string, or array request objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serve static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// API routes
app.use(routes);
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