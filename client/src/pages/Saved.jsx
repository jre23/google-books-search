import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SavedList from "../components/SavedList";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState({
    results: [],
  });

  const loadSavedBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        setSavedBooks({ results: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadSavedBooks();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    let deleteBool = window.confirm(
      "Are you sure you want to delete this saved book?"
    );
    if (deleteBool) {
      API.deleteBook(id)
        .then((res) => {
          console.log(res);
          loadSavedBooks();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <br />
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <br />
        <h2>View your saved books here!</h2>
      </Jumbotron>
      <br />
      <SavedList
        results={savedBooks.results}
        saveDel="Delete"
        handleDelete={handleDelete}
      ></SavedList>
    </>
  );
};

export default Saved;
