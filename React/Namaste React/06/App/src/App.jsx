import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

const App = () => (
  <>
    <Home />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
