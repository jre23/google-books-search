// import dependencies
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import ResultsList from "../components/ResultsList";
import SearchInput from "../components/SearchInput";
// define Search component
const Search = () => {
  const [searchState, setSearchState] = useState({
    userSearch: "",
    results: [],
  });

  const bookSearchAPI = () => {
    API.search(searchState.userSearch)
      .then((res) => {
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
    setSearchState({ ...searchState, userSearch: dataValue });
  };

  const handleSave = (event) => {
    let bookData = {
      title: event.title,
      authors: event.authors,
      description: event.description,
      image: event.imageLinks.thumbnail,
      link: event.infoLink,
    };
    API.saveBook(bookData)
      .then((res) => {
        window.alert("This book has been saved!");
      })
      .catch((err) => console.log(err));
  };

  const enterKey = (event) => {
    if (event.which === 13) {
      let dataValue = document.getElementById("search-input").value;
      setSearchState({ ...searchState, userSearch: dataValue });
      return false;
    }
  };

  return (
    <>
      <br />
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <br />
        <h2>Search for and add books to your saved page!</h2>
      </Jumbotron>
      <SearchInput
        handleSubmit={handleSubmit}
        enterKey={enterKey}
      ></SearchInput>
      <br />
      <ResultsList
        results={searchState.results}
        saveDel="Save"
        handleSave={handleSave}
      ></ResultsList>
    </>
  );
};
// export Search component
export default Search;
