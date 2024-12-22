import React from "react";
import ReactDOM from "react-dom/client";

const element1 = React.createElement(
  "h1",
  {
    className: "heading1",
    style: { color: "red", backgroundColor: "blue" },
    abc: "xyz",
  },
  "Hello World 1",
);
const element2 = React.createElement(
  "h3",
  {
    className: "heading2",
    style: { color: "yellow", backgroundColor: "black" },
  },
  "Hello World 2",
);

const parent = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "child1" }, [element1, element2]),
  React.createElement("div", { id: "child2" }, [element1, element2]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
