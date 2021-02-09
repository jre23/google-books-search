import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=title:";

const API = {
  // function to search for a book based on user input
  search: query => {
    console.log(query);
    return axios.get(BASEURL + query);
  }
}

export default API;
