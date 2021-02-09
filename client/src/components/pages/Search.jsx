import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const Search = () => {
  const [searchState, setSearchState] = useState({
    userSearch: "",
    results: {}
  })

useEffect(()=>{
  const bookSearchAPI = () => {
    console.log(searchState.userSearch);
    API.search(searchState.userSearch)
      .then(res => {
        console.log("=====res=====");
        console.log(res);
        console.log(searchState.userSearch);
      // setSearchState({...searchState, results: res });
      })
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
      <div className="input-group col-4" style={{ margin: "0 auto" }}>
        <input id="search-input" type="text" placeholder="Book Search" name="searchInput" className="form-control" aria-label="Text input" aria-describedby="button-addon" />
        <button type="button" id="button-addon" className="btn btn-secondary justify-content-center col-.5 d-flex mr-auto" style={{ color: "#86b3d1" }} onClick={handleSubmit}>Search</button>
      </div>
      <br/>
      {/* <ul className="list-group">
      {searchState.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.image} />
        </li>
      ))}
    </ul> */}
    </>
  )
}

export default Search;