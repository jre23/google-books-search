// import dependencies
import axios from "axios";
// define url endpoint for google books apis
const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const maxResults = "maxResults=23&";
const userSearch = "q=title:";
// define API methods
const API = {
  // this function queries the Google Books APIs to search for books based on user input
  search: (query) => {
    return axios.get(BASEURL + maxResults + userSearch + query);
  },
  // this function gets all of the saved books from the mongodb
  getSavedBooks: () => {
    return axios.get("/api/books");
  },
  // this function saves a book to the mongodb
  saveBook: (bookData) => {
    return axios.post("/api/books/", bookData);
  },
  // this function deletes a book from the mongodb
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
};
// export API methods
export default API;
