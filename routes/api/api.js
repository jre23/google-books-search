const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoute = require("./google");

// book routes
router.use("/books", bookRoutes);

// google books route
router.use("/google", googleRoute);

module.exports = router;