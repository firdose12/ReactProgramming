import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div",{id:"title1"},
[
   React.createElement("h1",{id:'heading0'},"I am Coming"),
   React.createElement("h2",{id:"heading1"},"From"),
   React.createElement("h3",{id:"heading2"},"Normal createElement")
]);
//const root = ReactDOM.createRoot(document.getElementById("practice"));
//root.render(heading);

//Now lets make the about react element as functional component

const HeadingComponent = () => {
    return React.createElement("div",{id:"title"},
    [
        React.createElement("h1",{id:"heading0"},"I am "),
        React.createElement("h2",{id:"heading1"},"Called As"),
        React.createElement("h3",{id:"heading2"},"React Component")
    ]);
}

//const rootComponent = ReactDOM.createRoot(document.getElementById("practice"));
//rootComponent.render(<HeadingComponent />);

//Now lets do the same thing using JSX 

const HeadingJsx = (<div>
    <h1>I am From JSX</h1>
    <h2>I am From JSX</h2>
    <h3>Came from Another Component</h3>
</div>
)

//const rootComponentJSX = ReactDOM.createRoot(document.getElementById("practice"));
//rootComponentJSX.render(HeadingJsx);

const JSXComponent = () => {
    return (<div>
        <h1>I am From JSX</h1>
        <h2>I am From JSX</h2>
        <TitleComponent />
    </div>
    )
}
const JSXComponetRoot = ReactDOM.createRoot(document.getElementById("practice"));
JSXComponetRoot.render(<JSXComponent />)

//Create a title component and use it in the h3 tag

const TitleComponent =  () => {
    return <h3>I came from Title Component</h3>
}


