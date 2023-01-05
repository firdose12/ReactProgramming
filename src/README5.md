Section 5 : 

Lets start with cleaning up the code first , 

i can see const data as a mess for now, 

first of all for whom we write a code ? 

we dont write for machines and browers we write for developers , 

i should write code which you should understand , let us write which we should understand

lets create a data.json file and lets put the data in the data.json 

what is the difference between javascript object and json ? 

const data = [] // this is not a json FYI, 

whay json ? we can simply creaye another simple file and give 

const data = [{} , {}, {}, {}, {}, {}, {}, {}, {},] ? like this ? 

but why we should write json ? 

1 answer is that we get similar format from the backend also , 
and this will help us a lot when we are writing a test cases. 

All the keys should be in the strings here. 

can we have img-name something like this in the key ?  no we cannot to use like that we have to use "" we can use the ' ' also but prettier will convert to "" , not a good practice to use 
hyphen in the key . 

lets have a constant file also called 

constant.js 

say in the constant.js we write something like 

export const title = "Hunger Hub" 

while importing  if you do 

import title from "./constants.js" whill this work ? No 
import {title } from "./constant.js" will this work ? yes 
import * as constant from "./constants.js" ? yes 

this is homework identify y this is happening. 

Here comes one concept say in the CardComponent for now we are jsut using export default CardComponent but what if we have another component in the same fike 

lets say we have something like BeautifyCardComponent which will call the card component with some styles added to it. 

CardComponent.js

export const BeautifyCardComponent = () => {return (
    <div className="style-container">
    <CardComponent />
    </div>
) }

we can use like this and we can import this using {} and name in it 

import {BeautifyCardComponent} from "./CardComponent.js"

WhatEver we did till now we call it as a HigherCorderComponent.


Lets Go Back to the Project and Lets build Search Component.

In the BodyComponent we can have Search Bar , Search Bar is nothing but a Input bar. 

Always use form while you are using this inputs and all because form gives few events by default like onSubmit etc..,

we created a SearchBar component seperately. 

const SearchBar = () => {
    return (
        <div className="search">
            <form>
                <input 
                id="restaurant"
                placeholder="restaurant"
                value="Biriyani"
                ></input>
                <button>Search</button>
            </form>
        </div>
    )
}

here you can see the value is static , and never ever let the variables control or written inside the component , 

to write a data dynamically we have something called "HOOKS"

State ? What is state , say we have sanpshot of your data , dats it. 

WE  JUST HAVE create a local variable inside the searchcomponent so that we can capture
what we are searching in the input. 

for that we have something called useState. 

usestate will let the react know that there is a local variable created 

const [searchText] = useState("Search") // "Search" should be the default one which we need to initialize. 

it is similar to 

const searchtext = "Search"

const SearchBar = () => {
    const [searchText] = useState("Search")
    )
    return (
        <div className="search">
            <form>
                <input 
                id="restaurant"
                placeholder="restaurant"
                value={searchText}
                ></input>
                <h1>{searchText}</h1>
                <button>Search</button>
            </form>
        </div>
    )
}

import { useState } from "react"; we have to import like this , and now you can understand how this useStathe is being exported :) 

Okay while using useState if you use like this 

 const [searchText] = useState("Search") , 

 this will not allow you to type something again its kind of having only one constant varaible with Search just like 

 const searchText = "Search"

 so when ever we change the text in the input the react should know about it , so 

 UseState say that you have created a variable using useState , and you have to control to change the value using my function only which is a second argument in the useState method


 const [x , y] = useState ("hello");
 here x is a local variable and y is a event/onChange variable 

 so 

 const SearchBar = () => {
    const [searchText,setSearchText] = useState("Search")
    )
    return (
        <div className="search">
            <form>
                <input 
                id="restaurant"
                placeholder="restaurant"
                value={searchText}
                onChage = {(e) => {
                    setSearchText (e.target.value);
                }}
                ></input>
                <h1>{searchText}</h1>
                <button>Search</button>
            </form>
        </div>
    )
}


Now OnSubmit of the Search it should work lets work on it , 

we have something called onSubmit

onsubmit will trigger when we click on the button , 

Note : Whenever we do onSubmit we should always use e.preventDefault();


const SearchBar = () => {
    const [searchText,setSearchText] = useState("Search")
    )
    return (
        <div className="search">
            <form>
                <input 
                id="restaurant"
                placeholder="restaurant"
                value={searchText}
                onChage = {(e) => {
                    setSearchText (e.target.value);
                }}
                ></input>
                <h1>{searchText}</h1>
                <button>Search</button>
            </form>
        </div>
    )
}


Well , now when we search it should filter the cards and it should display that cards only how will you do this 

first of all , go to BodyComponent and go to CardContainer , in the CardContainer you can see data.map is happening , but instead of data.map it should filter whatever we are searching on the input so we have to send that filtered / searched text to card Container 

and after that we should also have a state maiatined to display all the data in the beginning so 

in the body component create a state


little complicated to undestand 

In the 

BodyComponent first it should show all the data and then it should show only that data which we are searching on the input by clicking onSubmit button.

so you have a variable to show all the data and also another setVariable in the BodyComponent to bring the recent seareched thing from searchComponent
