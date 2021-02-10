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

  useEffect(() => {
    const bookSearchAPI = () => {
      console.log(searchState.userSearch);
      API.search(searchState.userSearch).then((res) => {
        console.log("=====res=====");
        console.log(res.data.items);
        setSearchState({
          userSearch: searchState.userSearch,
          results: res.data.items,
        });
      });
    };
    bookSearchAPI();
    let dataValue = (document.getElementById("search-input").value = "");
  }, [searchState.userSearch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let dataValue = document.getElementById("search-input").value;
    console.log(dataValue);
    setSearchState({ ...searchState, userSearch: dataValue });
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
      <ResultsList results={searchState.results}></ResultsList>
    </>
  );
};

export default Search;
