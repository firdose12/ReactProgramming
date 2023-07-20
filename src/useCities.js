import { useEffect, useState } from "react"
import stateMap from "./state-city.json"




const useCities = (state) => {

const [cities , setCities] = useState([]);

useEffect(() => {
    fetchData();
    async function fetchData() {

        // const data = await fetch('http://localhost/getCities?state=${state}')
        // above statement we just assumed that we might have a api call , lets assume that we got the data
        console.log(stateMap);
        console.log(stateMap[state]);
        const json = stateMap[state];
        setCities(json);
    }


} , [state])

return cities;


}

export default useCities;