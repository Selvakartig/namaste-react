import React from "react";
import ReactDOM from "react-dom/client";

let ReactComponent = () => {
    return <h1>Rendered using React Functional component</h1>
}

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<ReactComponent />)