import React from "react";

const ResultsList = (props) => {
  return (
    <>
      <div className="col">
        <ul className="list-group" style={{ opacity: "0.88" }}>
          {props.results.map((res) => (
            <li className="list-group-item" key={res.id}>
              <h5>{res.volumeInfo.title}</h5>
              <img
                alt={res.volumeInfo.title}
                className="img-fluid pt-4 pr-4"
                style={{ float: "left" }}
                src={res.volumeInfo.imageLinks.smallThumbnail}
              />
              <h6 className="pt-4">{res.volumeInfo.description}</h6>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResultsList;
