// require dependencies
const router = require("express").Router();
const bookRoutes = require("./books");
// define the second part of the api route "/books
router.use("/books", bookRoutes);
// export router
module.exports = router;