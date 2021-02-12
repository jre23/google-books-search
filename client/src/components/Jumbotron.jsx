// import dependencies
import React from "react";
// define Jumbotron component
const Jumbotron = ({ children }) => {
  return (
    <div className="col justify-content-center">
      <div
        style={{
          height: 300,
          clear: "both",
          paddingTop: 72,
          textAlign: "center",
          opacity: "0.88",
        }}
        className="jumbotron"
      >
        {children}
      </div>
    </div>
  );
};
// export Jumbotron component
export default Jumbotron;
