// require dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define book schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  description: String,
  image: String,
  link: String,
});
// create instance using mongoose.model
const Book = mongoose.model("Book", bookSchema);
// export Book model
module.exports = Book;