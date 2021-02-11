import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import ResultsList from "../components/ResultsList";
import SearchInput from "../components/SearchInput";

const Search = () => {
  const [searchState, setSearchState] = useState({
    userSearch: "",
    results: [],
  });

  const bookSearchAPI = () => {
    // console.log(searchState.userSearch);
    API.search(searchState.userSearch)
      .then((res) => {
        // console.log("=====res=====");
        // console.log(res.data.items);
        setSearchState({
          ...searchState,
          results: res.data.items,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchState.userSearch !== "") {
      bookSearchAPI();
    }
    let dataValue = (document.getElementById("search-input").value = "");
  }, [searchState.userSearch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let dataValue = document.getElementById("search-input").value;
    console.log(dataValue);
    setSearchState({ ...searchState, userSearch: dataValue });
  };

  const handleSave = (event) => {
    console.log("====handleSave====");
    console.log(event);
    let bookData = {
      title: event.title,
      authors: event.authors,
      description: event.description,
      image: event.imageLinks.thumbnail,
      link: event.infoLink,
    };
    console.log(bookData);
    API.saveBook(bookData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <br />
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <br />
        <h2>Search for and add books to your saved page!</h2>
      </Jumbotron>
      <SearchInput handleSubmit={handleSubmit}></SearchInput>
      <br />
      <ResultsList
        results={searchState.results}
        saveDel="Save"
        handleSave={handleSave}
      ></ResultsList>
    </>
  );
};

export default Search;
