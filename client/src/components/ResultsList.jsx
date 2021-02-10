import React from "react";

const ResultsList = (props) => {
  return (
    <>
      <div className="col">
        <ul className="list-group" style={{ opacity: "0.88" }}>
          {props.results.map((res) => (
            <li className="list-group-item" key={res.id}>
              <div style={{ float: "left" }}>
                <h5>{res.volumeInfo.title}</h5>
                <h6>Written by {res.volumeInfo.authors}</h6>
              </div>
              <div>
                <a className="btn btn-info" style={{ float: "right" }}>
                  {props.saveDel}
                </a>
                <a
                  href={res.volumeInfo.infoLink}
                  rel="noreferrer"
                  target="_blank"
                  role="button"
                  className="btn btn-success mr-1"
                  style={{ float: "right", color: "white" }}
                >
                  View
                </a>
              </div>
              <div className="pt-3" style={{ clear: "both" }}>
                <img
                  alt={res.volumeInfo.title}
                  className="img-fluid pr-4"
                  style={{ float: "left" }}
                  src={res.volumeInfo.imageLinks.thumbnail}
                />
                <h6>{res.volumeInfo.description}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResultsList;
