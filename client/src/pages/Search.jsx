import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"

const Search = () => {
  const [searchState, setSearchState] = useState({
    userSearch: "",
    results: []
  })

useEffect(()=>{
  const bookSearchAPI = () => {
    if (searchState.userSearch){
    API.search(searchState.userSearch)
      .then(res => {
        console.log("=====res=====");
        console.log(res.data.items);
      setSearchState({...searchState, results: res.data.items });
      })
    }
  }
    bookSearchAPI();
  let dataValue = document.getElementById("search-input").value = "";
}, [searchState.userSearch]);

const handleSubmit = event => {
  event.preventDefault();
  let dataValue = document.getElementById("search-input").value;
  console.log(dataValue);
  setSearchState({ ...searchState, userSearch: dataValue});
}

  return (
    <>
      <p>
      Hello from the Search.jsx file!
      </p>
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <br/>
        <h2>Search for and add books to your saved page!</h2>
      </Jumbotron>
      <div className="input-group col-4" style={{ margin: "0 auto" }}>
        <input id="search-input" type="text" placeholder="Book Search" name="searchInput" className="form-control" aria-label="Text input" aria-describedby="button-addon" />
        <button type="button" id="button-addon" className="btn btn-secondary justify-content-center col-.5 d-flex mr-auto" style={{ color: "#86b3d1" }} onClick={handleSubmit}>Search</button>
      </div>
      <br/>
      <div className="col">
        <ul className="list-group" style={{opacity: "0.85"}}>
          {searchState.results.map(res => (
            <li className="list-group-item" key={res.id}>
              <h5>{res.volumeInfo.title}</h5>
              <img alt={res.volumeInfo.title} className="img-fluid pt-4 pr-4" style={{ float: "left"}} src={res.volumeInfo.imageLinks.smallThumbnail} /><h6 className="pt-4">{res.volumeInfo.description}</h6>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Search;