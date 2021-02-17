// require dependencies
const db = require("../models");
const axios = require("axios");
const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const maxResults = "maxResults=23&";
const userSearch = "q=title:";
// define methods for the booksController
module.exports = {
  search: (req, res) => {
    axios
      .get(BASEURL + maxResults + userSearch + req.params.query)
      .then((results) => {
        res.json(results.data.items);
      })
      .catch((err) => res.status(422).json(err));
  },
  // this method is used to get all of the books the user has saved to the mongodb
  findAll: (req, res) => {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // this method is used to add a book to the mongodb (when a user hits the save button)
  create: (req, res) => {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // this method is used to delete a book from the mongodb (when a user hits the delete button and has confirmed deletion)
  remove: (req, res) => {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
