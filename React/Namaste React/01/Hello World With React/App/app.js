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

console.log(element2); // object { type: 'h1', props: { id: 'heading2', style: { color: 'yellow', backgroundColor: 'black' }, children: 'Hello World 2' } }

const parent = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "child1" }, [element1, element2]),
  React.createElement("div", { id: "child2" }, [element1, element2]),
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // creates a container where the entire React application is rendered into the DOM

console.log(root);
/* 
i) Internally, root is an instance of a class or an object that encapsulates React's rendering capabilities which manages a FiberRootNode, a specialized data structure used by React for managing the React tree, efficient rendering and reconciliation of components. 
ii) It has a property called _internalRoot which is the Fiber node that represents the entire React application, serving as the entry point for coordinating updates and rendering within the React application. 
iii) The FiberRootNode interacts closely with the Virtual DOM to perform efficient rendering and reconciliation of components.
iv) React's reconciliation algorithm uses the Virtual DOM and Fiber data structures to determine the minimal changes needed to update the actual DOM, optimizing performance and user interface responsiveness. 
v) Fiber node is a node in the virtual DOM tree. Each Fiber node represents a component or a piece of the component tree in React for storing information about the current state of components, their relationships, and other metadata required for efficient updates and rendering. They do not directly represent the elements you create using React.createElement() or JSX syntax.
vi) The Virtual DOM exists as a concept and implementation managed by React globally across the application.
*/

root.render(parent); //converts the object to DOM element and renders it to the root element
