import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SavedList from "../components/SavedList";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState({
    results: [
      {
        title: "Test Title",
        authors: ["Joel Estrada"],
        description: "Testing saved component",
        image:
          "http://books.google.com/books/content?id=4D6FDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link:
          "https://play.google.com/store/books/details?id=4D6FDwAAQBAJ&source=gbs_api",
      },
    ],
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

  const handleDelete = (event) => {
    console.log(event);
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
