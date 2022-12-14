import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",{id:"title"},"HELLO WORLD");
console.log(heading);


const HeadComponent = () => { 
    return (
        <div id="title" className="title-class" tabIndex="1">
        <h1>Namaste JavaScript</h1>
        <h2>From Zero to Hero</h2>
        <h3>in 3 Months</h3>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // for react element
root.render(<HeadComponent />); // for react component

/* 

When you gave normal imports here in app.js , you will see error stating that browser file cannot have 
import , that is correct , javascript file cannot have import , so to specify that go to index.html and give 
type="module" in the script tag

*/ 