const router = require("express").Router();
const bookRoutes = require('./api/books')

// Api Routes
router.use('/books', bookRoutes);

module.exports = router;