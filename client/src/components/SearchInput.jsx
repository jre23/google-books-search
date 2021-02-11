import React from "react";
import Search from "../pages/Search";

const SearchInput = (props) => {
  return (
    <>
      <div
        className="input-group col-md-6 col-sm-8"
        style={{ margin: "0 auto" }}
      >
        <input
          id="search-input"
          type="text"
          placeholder="Book Search"
          name="searchInput"
          className="form-control"
          aria-label="Text input"
          aria-describedby="button-addon"
          onKeyPress={props.enterKey}
        />
        <button
          type="button"
          id="button-addon"
          className="btn btn-secondary justify-content-center col-.5 d-flex mr-auto"
          style={{ color: "#86b3d1" }}
          onClick={props.handleSubmit}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInput;
