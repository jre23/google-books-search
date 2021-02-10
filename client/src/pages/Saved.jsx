import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import ResultsList from "../components/ResultsList";

const Saved = () => {
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
