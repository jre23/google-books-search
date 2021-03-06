// import dependencies
import React from "react";
// define SavedList component
const SavedList = (props) => {
  return (
    <>
      <div className="col">
        <ul className="list-group" style={{ opacity: "0.88" }}>
          {props.results.map((res) => (
            <li className="list-group-item" key={res._id}>
              <div className="row">
                <div className="col-6" style={{ float: "left" }}>
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
                <div className="col-6">
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
              </div>
              <div className="pt-3" style={{ clear: "both" }}>
                <img
                  alt={res.title}
                  className="img-fluid pr-4 pb-3"
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
// export SavedList component
export default SavedList;
