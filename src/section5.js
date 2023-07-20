import React, { useState }  from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json"
import title from "./constants.js"
import CardComponent from "./CardComponent";
import SearchBar from "./SearchBar";
import { useState } from "react";
import NoresultComponent from "./noResultComponent";


//titlpe component 

const HeadingComponent = () => <h1> {title} </h1>


const BodyComponent = () => {

    const [filteredRestaruants , setfilteredRestaruants] = useState(data);

   return (<>
    <div>
        <SearchBar setfilteredRestaruants={setfilteredRestaruants}/>
    </div>
    <div className="card-container">
        <CardContainer filteredRestaruants={filteredRestaruants}/>
    </div>
    </> )
}

const CardContainer = ({filteredRestaruants}) => {
    if(!filteredRestaruants.length) { return <NoresultComponent/>}
    const cards = filteredRestaruants.map((reataurants) => {
        return <CardComponent restraunt = {reataurants} key={reataurants.id}/>
    })

    return cards;

}

const AppLayout = () => (
    <div >
        <HeadingComponent />
        <BodyComponent />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("section5"));
root.render(<AppLayout />);

