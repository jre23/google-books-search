// require dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// define first part of the api route "/api"
router.use("/api", apiRoutes);
// if no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// export the router
module.exports = router;
