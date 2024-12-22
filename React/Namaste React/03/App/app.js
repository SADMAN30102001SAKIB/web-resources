import React from "react";
import ReactDOM from "react-dom/client";

const element = (
  <span className="heading">
    Hello <span>World</span>
  </span>
);

const Title = function ({ prop, children }) {
  return (
    <h1 className="title">
      {element}, {children}
    </h1>
  );
};

// let data = apiResponse.getData(); // malicious code from API

const Heading = () => (
  <div id="container">
    {/* {data} */}
    <Title prop={""} /> {/* Can pass prop but not childen*/}
    {Title({ prop: "" })} {/* Can pass prop but not childen*/}
    <Title prop={""}>React</Title> {/* Can pass both */}
    <h1 className="header">This is a Header!!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
