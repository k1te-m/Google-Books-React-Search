const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").post(booksController.saveBook);
router.route("/").get(booksController.getBooks);

module.exports = router;
