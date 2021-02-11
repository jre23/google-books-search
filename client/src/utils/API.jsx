import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const maxResults = "maxResults=23&";
const userSearch = "q=title:";

const API = {
  // function to search for a book based on user input
  search: (query) => {
    // console.log(query);
    return axios.get(BASEURL + maxResults + userSearch + query);
  },
  getSavedBooks: () => {
    console.log("====getBooks====");
    return axios.get("/api/books");
  },
  saveBook: (bookData) => {
    console.log("====saveBook====");
    return axios.post("api/books/", bookData);
  },
};

export default API;
