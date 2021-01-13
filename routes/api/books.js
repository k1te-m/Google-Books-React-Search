const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").post(booksController.saveBook);

module.exports = router;