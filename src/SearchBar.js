import { useState } from "react";
import data from "./data.json"


const searchRestaruants = (searchText) => {
    //Searching and filtering logic
    return data.filter((text) => text.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
}

const SearchBar = ({setfilteredRestaruants}) => {
    const [searchText,setSearchText] = useState("Search")
    return (
        <div className="search">
            <form onSubmit={(e) => {
                e.preventDefault();
               const searchedText =  searchRestaruants(searchText);
               setfilteredRestaruants(searchedText);
            }}>
                <input 
                id="restaurant"
                placeholder="restaurant"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
                ></input>
                <h3>{searchText}</h3>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;