import React from "react";

const SavedList = (props) => {
  console.log("====results list component====");
  console.log(props.results);
  return (
    <>
      <div className="col">
        <ul className="list-group" style={{ opacity: "0.88" }}>
          {props.results.map((res) => (
            <li className="list-group-item" key={res._id}>
              <div style={{ float: "left" }}>
                <h5>{res.title}</h5>
                <h6>
                  Written by{" "}
                  {res.authors !== undefined
                    ? res.authors.map((item) => {
                        return item + " ";
                      })
                    : res.authors}
                </h6>
              </div>
              <div>
                <a
                  className="btn btn-info"
                  style={{ float: "right" }}
                  onClick={() => {
                    props.handleDelete(res._id);
                  }}
                >
                  {props.saveDel}
                </a>
                <a
                  href={res.link}
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
                  alt={res.title}
                  className="img-fluid pr-4"
                  style={{ float: "left" }}
                  src={res.image !== undefined ? res.image : ""}
                />
                <h6>{res.description}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SavedList;
