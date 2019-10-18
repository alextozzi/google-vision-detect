import React from "react";
import ReactDOM from "react-dom";
import ImageComponent from "./ImageComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ImageComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
