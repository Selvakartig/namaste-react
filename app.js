
// Single Tag

// let heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "Hello from React"
// )

//Nested Tags

let parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "I'm H1 Tag"),
        React.createElement("h2", {}, "I'm H2 Tag")])
)

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)