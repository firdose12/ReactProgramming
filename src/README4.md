SECTION - 4 - TALK IS CHEAP SHOW ME THE CODE.
Verify File : Section4.js

A Component is basically a Concept, at the end of the day its a function.Not Always a function return JSX dont thing like that.

const HeadingComponent = () => {
  <h1>Hello Section 4<h2>
}

if you do console for the above component , what it will does ? 
console.log(HeadingComponent);
its simple, it is a function na , so what js does while it is executing , we have 2 things na Memory component and code component , so its a function it will store its entire data in the memory component , so simply it will print all the skeleton. 

but what is you do 
console.log(<HeadingComponent />);
so here when i write using angular bracket we are refering to the execution , in the console it will be an object in the DOM it will be HTML element

so :) did you find something here 
<HeadingComponent /> is almost equal to Headingcomponent();

Lets Build a App Called Hunger hub 

const title = "Hunger Hub"

const HeadingComponent = () => {
    <div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />;

lets build somethnig like swiggy , cards 

let build one card using JSX 

all we need is one div , one image and some info
copy some image address go to swiggy and just copt the image address

const CardComponent = () => {
    return (
        <div id="card" className="card">
    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nfieyqgxk1omknxfbluj">
    <h2>Biriyani By Darbar</h2>
    <h3>Hydrebadi Biriyani</h3>
    <h4>4 stars</h4>
    
    )
}

const BodyComponent = () => { 

    <CardComponent />
    }


so now where do you put this card component ? 

simple create a whole app with one big component called AppLayout Component 

const AppLayout = () => {
    <HeadingComponent />
    <BodyComponent />
}

you know what AppLayout will throw you error because it always want to retrun only one JSX element not mutliple , it will work it you write something like this 

const AppLayout = () => {<HeadingComponent />} , so what we can do here is just create a div tag and have wrapped in it 

const AppLayout = () => {
    <div>
    <HeadingComponent />
    <BodyComponent />
    </div>
}
now it is returning only element which is div which wrapped other , but that is an extra div na ? if you go to inspect element and see the elements you will see extra div created , we dont need that , so we have Something called "ReactFragment" 

ReactFragment will not render anything and show what is inside 

const AppLayout = () => {
    <React.Fragment>
    <HeadingComponent />
    <BodyComponent />
    </React.Fragment>
}

But Again , it annoying to write ReactFragment everytime :) so we came up with something called empty tag

const AppLayout = () => {
    <>
    <HeadingComponent />
    <BodyComponent />
    </>
}

you can use div when you want to have some css class applied on it :) 


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />

Okay now , let have multiple cards , may be 5 , so go to cardComponent and repeat the cards


const BodyComponent = () => (
    <>
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    </>
    )

you can refer section4.js , 

import React from 'react';
import ReactDOM from 'react-dom/client';

const title = "Hunger Hub";

const HeadingComponent = () => (
    <h2>{title}</h2>
)

//const root = ReactDOM.createRoot(document.getElementById("section4"));
//root.render(<HeadingComponent />)

//lets build like swiggy , one card , with image and details 

const CardComponent = () => (
    <div id="card">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nfieyqgxk1omknxfbluj"></img>
        <h3>New Taj Darbar</h3>
        <h3>3 Stars</h3>
    </div>
)

const BodyComponent = () => (
    <div className="card-container">
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    </div>

)

const AppLayout = () => (
    <div>
       <HeadingComponent />
       <BodyComponent />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("section4"));
root.render(<AppLayout />);


till here it is static card components we want eveyrthing to be dynamic we have to do it by using props(Properties)

lets say we have some constant called data and data has properties img , name , cusine, stars , and we have to pass this data to the card component.

const data = {
    img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nfieyqgxk1omknxfbluj",
    name: "Biriyani By Kilo",
    Cusine : "Biriyani, Hydrebadi",
    starts : 4
}

const CardComponent = () => (
    <div id="card">
        <img src={data.img}></img>
        <h3>New Taj Darbar</h3>
        <h3>3 Stars</h3>
    </div>
)

we can do this , but it cannot be Biriyani By Kilo Always
data cannot be one object , it should be arry of objects


Generally we pass props like this 

const BodyComponent = () => (
  <div className="card-container">
    <CardComponent restraunt = {data[0]}/>
    <CardComponent restraunt = {data[1]}/>
    <CardComponent restraunt = {data[2]}/>
    <CardComponent restraunt = {data[3]}/>
    <CardComponent restraunt = {data[4]}/>
  </div>
);

whenever you create a Functoinal Component it will be haveing a default argument called "props" , you know what it is <CardComponent restraunt = {data[0]}/> ? you remever we use to lay down some properties when we use to write. 

const root = React.createElement("div",{},....) this {} we use to pass properties like id = something , exactly that is what we are doing here.


while receiving it will be like 

const CardComponent = (props) => (
  <div id="card">
    <img src={props.restraunt.img}></img>
    <h4>{props.restraunt.name}</h4>
    <h3>{props.restraunt.Cusine}</h3>
    <h4>{props.restraunt.starts}</h4>
  </div>
);

if you see the code , code started becoming ugly right ? so lets restructure the component and move the body component to another file 

And Also you might be irritated to write everytime props.restraunt.name
props.restraunt.etccsss. 

you can do restructuring , and make it simple like this 

const CardComponent = (props) => {

    const restraunt = props.restraunt;
    const {img,name,Cusine,starts} = restraunt;
  return (
    <div id="card">
      <img src={img}></img>
      <h4>{name}</h4>
      <h3>{Cusine}</h3>
      <h4>{starts}</h4>
    </div>
);
};

One More Thing , 

see the body Component , in the body Component , you have been calling 
CardComponent multiple times , it should not be like that , it should be like the no of card components we pass to the body Component that number of times it should be shown , that means it should be dynamic.

lets create a a card container for it , 

const CardContainer = () => {
    for(let i = 0 ; i < data.length ; i++){
        <CardComponent restraunt = {data[i]}/>
    }
}

but , let me more smart and use map function. check in section4.js

Important Note : in the console you always you use to see the error / warning message saying that every thing should have a unique key in the react where ever you find list / array / map kind of thing.

Solution : So from the backened we generally get id along with the data , so whenever you get that id and if you find some list / map you are using in the code , please do as following

const CardContainer = () => {
   const cards = data.map((restraunt) => {
    return <CardComponent restraunt={restraunt} key={restraunt.id}/>
   })
   return cards
}

 {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlt4ml0id5wei4yi840b",
    name: "Nandhini Deluxe",
    Cusine: "Andhra Biriyani",
    starts: 4,
    id:6
  },

  if you have id in the backened. 

  if you dont have id in the backened , then you can use index

  const CardContainer = () => {
    // for(let i = 0 ; i < data.length ; i++){
    //     <CardComponent restraunt = {data[i]}/>
    // }

   const cards = data.map((restaraunt,index) => {
    return <CardComponent restraunt={restaraunt} key={index}/>
   })
   return cards
}

But y we need id / Unique key ? 

Because say if you want to modify something in the 4th column , you have to iterate over it and see when it comes to 4 and then do the thing , react dont want this to happen , so id is 



