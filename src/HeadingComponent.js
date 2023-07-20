import React from "react";
import { useState, useEffect } from "react";
import Logo from "./assets/img/FoodVilla.png";
import UserContext from "./UserContext";
import { getMaxListeners } from "process";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

 
 const HeadingComponent = () => {

    const cartItems = useSelector( (store) => store.cart.value);
    const count = cartItems.length;
    console.log("CartItems", count);

    const [isLoggedIn , setIsLoggedIn] = useState(false);
    return (  
        <div className="header">
          <div>
            <img data-testid="logo" className="header-logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5hgeQXnjjctJ2hJHMl2rPrZ2VbUQ5KHlNQ&usqp=CAU" />
          </div>
          <div className="inline-flex">
             <p className="handle-spacing">Home</p>
             <p className="handle-spacing">About</p>
             <p className="handle-spacing">Contact</p>
             <Link to="/cart"><span className="handle-spacing"> {count}- Cart</span></Link> 
          </div>
          <UserContext.Consumer>{ ({email , setEmail }) => {
           return  <>
           <button onClick={ () => {
            setEmail("headingfrom@getMaxListeners.com");
           }}>Update Email : </button>
           <span>{email}</span></>
          }
            }</UserContext.Consumer>
          <div>
            {
            isLoggedIn ? 
            ( <button className="login-button" onClick={() => setIsLoggedIn(false)}>Logout</button> ) :
            (  <button  className="login-button" onClick={() => setIsLoggedIn(true)} >Login</button> )
            }
    
          </div>
        </div>
     )
    }

    export default HeadingComponent;