const db = require("../models");

module.exports = {
  getBooks: (req, res) => {
    db.Book.find({})
      .then((books) => res.json(books))
      .catch((error) => res.status(422).json(error));
  },
  saveBook: (req, res) => {
    console.log(req.body);
    db.Book.create(req.body)
      .then((book) => {
        res.json(book);
        console.log("Book Saved!");
      })
      .catch((error) => res.status(422).json(error));
  },
};
