// import dependencies
import axios from "axios";
// define url endpoint for google books apis
const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const maxResults = "maxResults=23&";
const userSearch = "q=title:";
// define API methods
const API = {
  // function to search for a book based on user input
  search: (query) => {
    // console.log(query);
    return axios.get(BASEURL + maxResults + userSearch + query);
  },
  getSavedBooks: () => {
    console.log("====getSavedBooks====");
    return axios.get("/api/books");
  },
  saveBook: (bookData) => {
    console.log("====saveBook====");
    return axios.post("/api/books/", bookData);
  },
  deleteBook: (id) => {
    console.log("====deleteBook====");
    return axios.delete("/api/books/" + id);
  },
};
// export API methods
export default API;
