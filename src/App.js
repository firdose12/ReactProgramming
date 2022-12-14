import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",{id:"title"},"HELLO WORLD");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/* 

When you gave normal imports here in app.js , you will see error stating that browser file cannot have 
import , that is correct , javascript file cannot have import , so to specify that go to index.html and give 
type="module" in the script tag

*/ 