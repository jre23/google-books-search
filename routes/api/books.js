// require dependencies
const router = require("express").Router();
const booksController = require("../../controllers/booksController");
// route to controller once full route is hit "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);
// "/api/books/:id"
router.route("/:id")
  .delete(booksController.remove);
// export router
module.exports = router;
