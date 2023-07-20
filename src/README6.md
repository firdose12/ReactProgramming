Session 6 - Explore the world 

What is state first of all and all we have seen in session 5.

Best Practices while using Hooks 

When ever you are writing a component write it in a pure component 

what is pure component ?  Ans : everytime we render a data it should render the same , 

may be we can send some props which should always render the same data. 

What i understood is that we should make everything generic 

we have created a local variable , means created use state , but what if we need one more local variable , we can create a local variable in n number 

say we have a scenario where we need a another search box which should search for cusine 
so you might want to create a another useState , but never write anything like if this is the condition use this state else use that state , no react will get confused , because react will remember everything in a fashion one by one so dont do that.

Now , lets search something which is not available , it will show blank screnn , so lets make a new file to show it as "NoResult page "


And go to the place where the value is being captured 

 const cards = filteredRestaruants.map((reataurants) => {
        if(!filteredRestaruants.length) { return <noResultsComponent/>}
        return <CardComponent restraunt = {reataurants} key={reataurants.id}/>
    })

right now we are using data.json , but lets talk to external world now 

lets use the api from the swiggy , let introduce new hook called "UseEffect"

so whenever we need to load the content from the api 90% of the times we use this useEffect.

useEffect is used if you want to load the content just after your component is loaded.

just do 

useEffect(() => {
    console.log("Hello world!");
}) 

just after your Body component is loaded , you ll see it loaded very fast , 

its place should always be inside the component.

useEffect(() => { 

//Renders the component with []
//Make a API call and fill filtereedRestaruants

} )

const BodyComponent = () => {

    const [filteredRestaruants , setfilteredRestaruants] = useState(data);


    useEffect(() => {
        console.log("Hello world!");
    })

   return (<>
    <div>
        <SearchBar setfilteredRestaruants={setfilteredRestaruants}/>
    </div>
    <div className="card-container">
        <CardContainer filteredRestaruants={filteredRestaruants}/>
    </div>
    </> )
}

just after Body Component is rendered , this will be called , you can put a debugger and see.

How genrally we make a api call ? 

async function fetchData () {
    const data = await fetch()
}


go to swiggy and search for v5 in the network tab , and take that api link , we will use that today.

https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.993135999999999&page_type=DESKTOP_WEB_LISTING

UseEffect takes 

1. function as argument and 
2. also array as argument  , which we call it as a dependency array.

useEffect(() => {
    console.log("Hello, world!");
},[]);

if it is empty then it means that it will render only once , it means that it will apply the effect and dats it.

what is i need to keep calling my effect whenever my state changes whever ever my text in the search changes , so you have to put that variable in the useEffect.

useEffect(() => {
    fetchData();
},[filteredRestaurants]);

if we have multiple useEffect which will be called first ? 

never write a code where order matters never do that , never rely on the order.


Now i have seen the below error in the console.
Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.993135999999999&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

Uncaught (in promise) TypeError: Failed to fetch
    at fetchData (section6.js:27:28)
    at section6.js:23:9
    at commitHookEffectListMount (react-dom.development.js:23150:26)
    at commitPassiveMountOnFiber (react-dom.development.js:24926:13)
    at commitPassiveMountEffects_complete (react-dom.development.js:24891:9)
    at commitPassiveMountEffects_begin (react-dom.development.js:24878:7)
    at commitPassiveMountEffects (react-dom.development.js:24866:3)
    at flushPassiveEffectsImpl (react-dom.development.js:27039:3)
    at flushPassiveEffects (react-dom.development.js:26984:14)
    at react-dom.development.js:26769:9
    at workLoop (scheduler.development.js:266:34)
    at flushWork (scheduler.development.js:239:14)
    at MessagePort.performWorkUntilDeadline (scheduler.development.js:533:21)



    HAHAHAHHAHAHAHAHAHHAh , expected right ? 

    cors issue , just see the cors video by akshay.

    all you have to do to get rid of this is  go to cors extension and add it to your browser and click on it and enable it thats it , it will go off and you can see the api resposne in the console.

    we have the data now :) 

    what we need now is now the information to fit in the card so see the api , it should be inside the data inside the card 

    its data.data.cards[2].data.cards


    Am Following Live Course Now : 

    Named Export   - when ever you give export const data = {} , then you have to import like , import {data} from "path" this we generally use when we create variables in the constants file
    Default Export  - when ever you give export default data , then   you have to import like , import data from "path" , this we generally use when we have one / two functions defined in it 
    using as  - we can also use like import as XYS from "path " and then can use as XYZ.data
    config files / const files , named export  - we should have constnts file in our project to store all the hardcoded stuff here , because if you need some hardcoded stuff to be used in most of the places of project it will be waste of time and memory , instead you can import it if you have it at one place
    Search Functionality



react uses one way data binding , you can have a variable but you also need to have 
control of modifying it

Onchnage whavtere yuo are chaging you should make sure that change go to the value 
property
 every component in react maintains the state , you can put all the varialbles in that state 

 if you want to create a state you should use state , hooke is nothing but just a normal function , i get my useState from react , to create state variables we use use state , 

 useState returns an array , first element is local state variable name , another element is setSearchText property

 how do you update that varaible : setSearchText(e.target.value)  



 To be more clear on what state is 

 what ever html we have say 

 <div>
 <ul>
 <li>
 </div>

 this will be represented as virtual dom element as a tree structure , when you change h1 , exactly h1 will rerender not everything


 useEffect -> hook => function,  -> geenrally we use this function to make api calls but this will get calle when ever component re - renders , and component re - renders for eevry property change , state change, so useEffect has something called "dependency array" which contains a variable name which says that whenever that variable changes then call the api.






