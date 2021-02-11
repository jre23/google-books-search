import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import ResultsList from "../components/ResultsList";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState({
    results: [],
  });

  const loadSavedBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        setSavedBooks({ results: res.data });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadSavedBooks();
  }, []);

  return (
    <>
      <br />
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <br />
        <h2>View your saved books here!</h2>
      </Jumbotron>
      <br />
    </>
  );
};

export default Saved;
