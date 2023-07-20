import { useState } from "react";
import stateObj from "./state-city.json"
import useCities from "./useCities";


 function filterData(searchText, allRestaruants) {
    const filterData = allRestaruants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }



  //y we use lowercase because in javascript , "Roti === roti ? " no its false so to havea 
  //sensitive search we write that

const SearchBar = ({setfilteredRestaruants,allRestaruants}) => {
    const [searchText,setSearchText] = useState("")
    const [searchState , setSearchState] = useState("");
    const [cityName , setCityName] = useState("");
    const cityList = useCities(searchState);
   // console.log(cityList);

    return (
        <div className="search">
            <form onSubmit={(e) => {
                e.preventDefault();
               const searchedText =  filterData(searchText,allRestaruants);
               setfilteredRestaruants(searchedText);
            }}>
                <input 
                className="search-bar"
                id="restaurant"
                placeholder="search restaurant"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
                ></input>
                
                <select value={searchState} onChange={(e) => {
                    setSearchState(e.target.value)}}>
                    {Object.keys(stateObj).map((state) => <option 
                    key = {state}
                    value={state}> {state}</option>)}
                </select>

                <select value={cityName} onChange={(e) => {
                    setCityName(e.target.value)}}>
                    {cityList?.map((city) => <option 
                    key = {city}
                    value={city}> {city}</option>)}
                </select>

                {/* <h3>{searchText}</h3> */}
                <button className="search-button">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;


