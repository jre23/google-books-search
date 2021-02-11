import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=title:";

const API = {
  // function to search for a book based on user input
  search: (query) => {
    console.log(query);
    return axios.get(BASEURL + query);
  },
  getSavedBooks: () => {
    console.log("====getBooks====");
    return axios.get("/api/books");
  },
};

// const API = {
//   // function to search for a book based on user input
//   search: (query) => {
//     console.log("====API====");
//     console.log(query);
//     return axios.get("/api/google/" + query);
//   },
// };

export default API;
