const db = require("../models");

module.exports = {
  getBooks: (req, res) => {
    db.Book.find({})
      .then((books) => res.json(books))
      .catch((error) => res.status(422).json(error));
  },
  saveBook: (req, res) => {
    db.Book.create(req.body)
      .then((book) => {
        res.json(book);
        console.log("Book Saved!");
      })
      .catch((error) => res.status(422).json(error));
  },
  findById: (req, res) => {
    db.Book.findById(req.params.id)
      .then((book) => res.json(book))
      .catch((err) => res.status(422).json(err));
  },
  deleteBook: (req, res) => {
    db.Book.findById({ _id: req.params.id })
      .then((book) => book.remove())
      .then((book) => res.json(book))
      .catch((err) => res.status(422).json(err));
  },
};
