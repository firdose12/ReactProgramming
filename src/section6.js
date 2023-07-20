import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";
import title from "./constants.js";
import CardComponent from "./CardComponent";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import NoresultComponent from "./noResultComponent";
import Logo from "./assets/img/FoodVilla.png";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import HeadingComponent from "./HeadingComponent";
import { useContext } from "react";
import UserContext from "./UserContext.js";
import ThemeContext from "./ThemeContext";

//titlpe component



const loggedInUser = () => {
    //API call to check authentication
    return true;
}

// export const HeadingComponent = () => {
// const [isLoggedIn , setIsLoggedIn] = useState(false);
// return (  
//     <div className="header">
//       <div>
//         <img data-testid="logo" className="header-logo" alt="logo" src={Logo} />
//       </div>
//       <div className="inline-flex">
//          <p className="handle-spacing">Home</p>
//          <p className="handle-spacing">About</p>
//          <p className="handle-spacing">Contact</p>
//          <p className="handle-spacing">Cart</p>
//       </div>
//       <div>
//         {
//         isLoggedIn ? 
//         ( <button className="login-button" onClick={() => setIsLoggedIn(false)}>Logout</button> ) :
//         (  <button  className="login-button" onClick={() => setIsLoggedIn(true)} >Login</button> )
//         }

//       </div>
//     </div>
//  )
// } seperate file created.
export const BodyComponent = () => {
  const [allRestaruants, setallRestaruants] = useState([]);
  const [filteredRestaruants, setfilteredRestaruants] = useState([]);
  const {email , setEmail } = useContext(UserContext);
  const {theme , setTheme} = useContext(ThemeContext);
  // why we are maintaining two states above is , we have to filter the data in the
  //allrestaurants not the filtered one , so we should always have one state for having
  //all the restaurants and one for filtered restaurants

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data?.json();
    setallRestaruants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaruants(json?.data?.cards[2]?.data?.data?.cards); // this is bad way to deal we need to do optional chaining
  }

  //Early Return , it means maintaining good experience
  if (!allRestaruants) {
    return null;
  }
  return allRestaruants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h4> Search Page Component UserContext : {email}</h4>
        <button onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light")
        }}> Update Theme from SearchPageComponent : {theme}</button>
        <SearchBar
          setfilteredRestaruants={setfilteredRestaruants}
          allRestaruants={allRestaruants}
        />
      </div>
      <div className="card-container">
        <CardContainer filteredRestaruants={filteredRestaruants} />
      </div>
    </>
  );
};

const CardContainer = ({ filteredRestaruants }) => {
  if (!filteredRestaruants.length) {
    return <NoresultComponent />;
  }
  const cards = filteredRestaruants.map((reataurants) => {
    return <Link key = {reataurants.data.id} to={"/restaurant-data/" + reataurants?.data?.id}><CardComponent className="card-box" {...reataurants.data} /></Link>;
  });

  return cards;
};

