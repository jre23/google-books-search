import React from "react";

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

export default Jumbotron;
