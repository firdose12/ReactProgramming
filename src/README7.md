from here we will do everything on section 6 file only

Once Search is completed , when you see on the browser you can see that it is loading slowly so we have to add loader here 

so we need to have something called shimmer effect here , what is shimmer effect is 
when api call is loading and still data is yet to come on the screen we are not suppose to show the images / data on the page , lets see empty cards and lets add loader also here 

shimmer effect : Shimmer effects are loading indicators used when fetching data from a data source that can either be local or remote , this can be for good experience


conditional rendering  : 

    if you didnt receive render Shimmer UI ( Shimmer.js )
    else call the component which we want to render

How do we write that ? we write using () ,, something like this 

return (conditional rendering) (
    <>
) 

example : 

if length 0 show shimmer ui , else show the real data
   return (allRestaruants.length === 0 ) ? <Shimmer />  : (<>
    <div>
        <SearchBar  setfilteredRestaruants={setfilteredRestaruants} allRestaruants = {allRestaruants}/>
    </div>
    <div className="card-container">       
        <CardContainer filteredRestaruants={filteredRestaruants}/> 
    </div>
    </> )


Early Return : 

if there is no api call data , then return null

Login and Logout Functionality : 

lets say we have authentication API to aunthenticate user , if user it available then he is authenticated otherwise not , lets write the conditional property on this. 

Note , here you cannot wirte something like {
    a = 10 ; console.log(a) 
} // this is JS statement , 

but JS Expression works 

Read JSX Curly braces documentation

Coming back to authenticate the user

const loggedInUser = () => {
    //API call to check authentication
    return true;
}

we are doing something like , if the user is authenticated then show login button , once login button is shown then show logout button

Amazin thing in react is , only that particular element will get refreshed not the entire thing 

HomeWork : Where is the diff algorithm written ? in react or react - dom? 



section - 7 Finding The Path : 

From now we will be refering to the App.js in index.js file, 
Always remember useEffect will be called everytime if you dont give dependcy array

What is Applayout ,? its a functional component , 
Important Note : Never Ever create a component inside a component

Few Important things about hooks : 

1. never ever create/use a usestate inside the if condition , because it depends on the state changing and dont want to restrict itsels to some condition 

2. Never ever create/use a usestate inside the for loop , because it depends on the state changing and dont want to restrict itsels to some condition

3. react give usestate to create a local state inside your functional component , dont create states outside of the functional component

4. Can i use more than 1 useEffect ? Yes Ofcourse

HomeWork , : Why should we use CDN to store images ? 

lets go to Another Topic : 

lets Implement the Shimmer UI 

we do have a package for that , but do you really want to use it , its just a simple thing lets write code for it 

to implement Shimmer , its just that we need some dummy boxed with some background-color as grey , lets show 15 boxes 
may be , how do you do that ,

its simple 

Array(10).fill("").map(e => <div className ="shimmer-card">Shimmer</div>).

previously the shimmer was like this 

const Shimmer  = () => {
    return (
      <h1>Shimmer Loading</h1>
    )
}

export default Shimmer

now we changed to how it is now 


Update : be cautious about importing the packages , dont import anything , we have something called "Formik"  if you want to work with forms go for formik its really really good , easy way to handle validations and all 

Chapter for Today : :) 

we are going to install a package library called "react router dom" lets use the version 6 

lets install , npm i react-router-dom

lets build  Home , About , Contact , Cart Pages keep this in header and we ll configure routes for this

FINDING THE PATH : 

https://reactrouter.com/en/main
npm i react-router-dom

lets create a root level router i.e in App.js , first import createBrowserRouter and RouterPorvider in App.js 

what BrowserRouter takes into argument is the path object , it takes array of paths
in which you mention the path and its component , 

if by mistake you gave the wrong name in the browser the react router will correct it for you it will throw an error saying "Hey developer Correct your path " :) thats the beaty of react router 

Now instead of exporting AppLayout , export the RouteProvider which will take argument which contains array of paths.


The Assignment which we have done in this session is that. 

1. in the app layout we should keep the heading as common , and other components we should display based on the urls we hit , 

2. for example , /about-us should load the about us component , searchRestaurant Component shoudl load when we hit /searchRestaurant

3. we have a beautiful thing given by the react called children, 

4. not to pass the data  dynamically in the url we use :id 


Solution : 

generally we have written something like this 

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      errorElement : <ErrorComponent />
    },
    {
      path : "/about-us",
      element : <AboutUs />,
      errorElement : <ErrorComponent />
    }
  ])


  but now under the parent we should have multiple children , based on which it should load the components. 

  for that we have something called "children" parameter which is again a array of objects of paths 



  So , now it will be like as below 


const AppLayout = () => (
    <div>
      <HeadingComponent />
      {/* <BodyComponent /> */}
      <Outlet />
    </div>
  );

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      errorElement : <ErrorComponent />,
      children : [ 
        {
          path : "/about-us",
          element : <AboutUs />,
          errorElement : <ErrorComponent />
        },
        {
          path : "/search-results",
          element : <BodyComponent />,
          errorElement : <ErrorComponent />
        },
        {
          path : "/restaurant-data",
          element : <RestaurantDataComponent />,
          errorElement : <ErrorComponent />
        }

      ]
    }
  ])




  Note : when you use children make sure that you use Outlet , which is used to replace the children component


  Exercise No 2 is : 

  when you click on the card you should pass the id of that card to the restarusant detail page and based on that id you should be having a api call which should show the information based on the id 

  Solution : 

  lets first build the restaurant detail page , we have a component already called RestaurantDataComponent here you can have a api call.


  1. first build the api link in App.js so that it can accept the dynamic id i.e : /restaurant-data/:id 
  2. using useParams you can capture the id from that component
  3. make the api call and console the data
  




