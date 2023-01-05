import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent";

const title = "Hunger Hub";

const HeadingComponent = () => <h2>{title}</h2>;

//const root = ReactDOM.createRoot(document.getElementById("section4"));
//root.render(<HeadingComponent />)

//lets build like swiggy , one card , with image and details

/*

Static Way of CardComponent

const CardComponent = () => (
    <div id="card">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nfieyqgxk1omknxfbluj"></img>
        <h3>New Taj Darbar</h3>
        <h3>3 Stars</h3>
    </div>
)

*/

const data = [
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nfieyqgxk1omknxfbluj",
    name: "Biriyani By Kilo",
    Cusine: "Hydrebadi",
    starts: 4,
    id:2
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bkrl3ckz1tfmc7y4aoap",
    name: "Truffles",
    Cusine: "Banglore",
    starts: 5,
    id:3
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lvxyt7qdchtmzh8telc2",
    name: "Beijing Bites",
    Cusine: "American",
    starts: 3,
    id:4
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/teg1rujhfwroaoig95qs",
    name: "Al-Bek",
    Cusine: "Arabian",
    starts: 4.2,
    id:5
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlt4ml0id5wei4yi840b",
    name: "Nandhini Deluxe",
    Cusine: "Andhra Biriyani",
    starts: 4,
    id:6
  },
];

// const CardComponent = (props) => (
//   <div id="card">
//     <img src={props.restraunt.img}></img>
//     <h4>{props.restraunt.name}</h4>
//     <h3>{props.restraunt.Cusine}</h3>
//     <h4>{props.restraunt.starts}</h4>
//   </div>
// ); Moved to CardComponent.js file

// const BodyComponent = () => (
//   <div className="card-container">
//     <CardComponent restraunt = {data[0]}/>
//     <CardComponent restraunt = {data[1]}/>
//     <CardComponent restraunt = {data[2]}/>
//     <CardComponent restraunt = {data[3]}/>
//     <CardComponent restraunt = {data[4]}/>
//   </div>
// ); //You can see abother BodyComponent using CardContainer

const BodyComponent = () => (
  <div className="card-container">
    <CardContainer />
  </div>
); 

const CardContainer = () => {
    // for(let i = 0 ; i < data.length ; i++){
    //     <CardComponent restraunt = {data[i]}/>
    // }

   const cards = data.map((restaraunt) => {
    return <CardComponent restraunt={restaraunt} key={restaraunt.id}/>
   })
   return cards
}



const AppLayout = () => (
  <div>
    <HeadingComponent />
    <BodyComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("section4"));
root.render(<AppLayout />);
