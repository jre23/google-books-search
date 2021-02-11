const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// "/api/google/"
router.route("/")
  .get(booksController.findAll);

// "/api/google/:query"
router.route("/:query")
  .get(booksController.findAllSearch);
  console.log("====google /:query====");
module.exports = router;