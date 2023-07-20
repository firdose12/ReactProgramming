Session 8 : 

Let's get Classy ; 

Class Based Components :

previously this is the only thing which was used to create class based components, 

they fount hat class based components are messy compared to function based components and those were complex also

so since we know much of the things now , we can learn about class based components. 

Note : Class Based Components are no more used because you can write everything using function based components.

Right Now i am skipping this chapter because we dont use it anymore , but it is very important for interview purpose please learn it seperately.


so lets move to another Topic : 

Optimizing Code :  Cleaning the Mess

Here we will learn how to use our own hook and we ll also see how we do lazy loading and how to reduce bundle. 

What Feature we are trying to build now is 

We will be having a dropdown which will filter our cards based on city and etc ..,

Just go to SearchBar and just do exactly how you have done for input.

 <select value={searchState} onChange={(e) => {
                    setSearchState(e.target.value)}}>
                    {Object.keys(stateObj).map((state) => <option 
                    key = {state}
                    value={state}> {state}</option>)}
                </select>


Now we have to have a one more select for cities also , now how will you extract cities , let assume that 
we have one api call lets say hungerhub/cities?state="Andhra" so based on the state this api should return its cities , yes we are going to build that today , 

so , generally what you will do ? you will create a useEffect and based on the state value you will make a api call again again , is this a good approach no right ? 
 instead of that we have something called a customHook  , 

 CustomHook For Extracting Cities : 

 lets build this. 

1. every hook should start with "use"

2.  lets create a new File called useCities.js => go and check their 

Note : we will be just assuming that we have a api call in point no 2 , since we dont have we are using mock data.

3. you what we have done , what ever we have done / created a custom hook we could have done in the same file but its a mess , thats where difference comes between a normal developer and brilliant developer.


Now about Bundlers : 


what is bundling ? just taking everything into one file and shipping

will you be able to see in browser , yes :) 

go to network tab => select only Js there , what bundler does here is out of all the files it has created only 4 files to us. 

so We might have 1000's of files right , as a developer we know that we dont need most of the code , or i want to take control of what i want to load and what i dont want to that is what we call is as 
"LAZY LOADING" => "ONLY LOAD WHEN ITS REQUIRED"

Example : say we have multiple links like about us / contact us etc , when we are on the search page do you think that we need that code of about us / contact us page to be loaded into the bundler ? no right ?
 
 so we do something called "LOAD ON DEMAND" 

 so lets do it : 

 example , when we click on about us link then only AboutUs Page should be loaded  , lets do this. 

 go to App.js , what we are doing their ? we care importing AboutUs Component as static i mean in a normal way , so just comment it out that and let load the AboutUs Component On " LOAD ON DEMAND"

LAZY LOAD ABOUT US : 

react gives us something called lazy function 

const AboutUs = lazy(() => import("./components/AboutUs")); ---> this is called defer loading

Now go to browser and load the page and click on about us link , you will see that other than that 4 js files one more file created called AboutUs.us ajsklfjk something , this says that AboutUs is lazy loaded. 

but you see that it is not rendering the componnet , to render the lazy loaded components we have to wrap them in <Suspense > provided by react

you can have fallback into the <Suspense> also , which will help us to add loaders there until it loads

<Suspense fallback = { <h1> loading...</h1>}>


so this is one wonderful way of optimizing the app. 

we are just splitting the chunks and loading on demand . 

lets lazy load the search Component also. i failed look into it again 