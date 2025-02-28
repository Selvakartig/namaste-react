import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

let App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)