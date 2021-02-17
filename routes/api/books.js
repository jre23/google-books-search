// require dependencies
const router = require("express").Router();
const booksController = require("../../controllers/booksController");
// route to controller once full route is hit "/api/books"
router.route("/").get(booksController.findAll).post(booksController.create);
// "/api/books/:id"
router.route("/:id").delete(booksController.remove);
// "api/books/search/:query"
router.route("/search/:query").get(booksController.search);
// export router
module.exports = router;
