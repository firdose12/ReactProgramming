DATA IS THE NEW OIL : 


here we will see about how to deal with the data ,

how do you communicate data between the components , 

1. one way is how we are sending allRestaurants and filteredRestaurants to the search Component. 

Example , lets print the Name of the State in the Card. 

from the search component a values needs to get updated in the parent component 

Note : Install React Developer Tools it gives good view, 

SearchPageComponent = BodyComponent

Okay , Generally we have to first get the value from searchBar and bring it to BodyComponent and send it to CardContainer and CardContainer should send it to CardComponent , this might be bigger chanin also , 

if you Obsever Carefully , most of the childresn in between are just passing the state to reach their sibiling component , they are not using actually , this we call it as "State Lift Up " 

this is not a good practice at all , to reduce this pain we have something called "Redux"

Redux Says : 

its a store of data , what ever may be the component it can update the state in the redux store and whom ever wants to use they can subscribe it . 

we are not talking about redux in this lecture but we can solve similar issue using "CONTEXT API" 

CONTEXT API : its like a Global State for react. 

what we are going to develop  :

i want my userInfo in my header also / card also / where ever i want 

to store something like that we use "CONTEXT API"

let create one now : 

1. create a new file called UserContext.js
2. we have createContext from react
3. say we need this context all over the app
4. go to app.js and wrap whole app inside userContext provider .
5. now i can go anywhere in my app and this context is available to me.
6. lets try to consume it in HeadingComponent.
7. go to HeadingComponent.js and use UserContext.Consumer
8. what ever value you give in the UserContext.Provider you ll receive it in headingsComponent.
9. do that in multiple places.


1. there is another way where you can do this , react have another hook called usecontext 
2. lets use that in BodyComponent ( section6.js)
3. as simple as we have used useParams

How do we Update our Context ? : 

1. lets create 2 variables now instead of just a variable in the UserContext.

from this

const UserContext = createContext ( "default@gmail.com" );

to this

const UserContext = createContext ({
    email : "default@example.com",
    setEmail : () => { }
}); 

2. go to APP.js 

from this 

  <UserContext.Provider value="firdulearnsreact@gmail.com">
    <div>
      <HeadingComponent />
      {/* <BodyComponent /> */}
      <Outlet />
    </div>
    </UserContext.Provider> 

to this 

const AppLayout = () => {

  const [emailId , setEmailId] = useState("firdulearnsreact@gmail.com")
   
  return ( 
  <UserContext.Provider value={{ email : emailId , setEmail : setEmailId}}>
    <div>
      <HeadingComponent />
      {/* <BodyComponent /> */}
      <Outlet />
    </div>
    </UserContext.Provider>
  )};

3. going back to consumers 

HeadingComponent : 

from this 

  <UserContext.Consumer>{ (email) => {
           return 
           <span>{email}</span>
          }
            }</UserContext.Consumer>


to this 

  <UserContext.Consumer>{ ({email , setEmail }) => {
           return  <>
           <button onClick={ () => {
            setEmail("headingfrom@getMaxListeners.com");
           }}>Update Email : </button>
           <span>{email}</span></>
          }
            }</UserContext.Consumer>

4. section 6 where we have used the hook 

from this 

  const email = useContext(UserContext);


to this 

  const {email , setEmail } = useContext(UserContext);

  Note : we have created one button in the HeadingComponent to just test the updaion of the state , onClick of that button when you setEmail to something it will update everywhere else


so this is one beautiful thing which is a global thing where you can update from anywhere

Generally Users Information is kept in Context 

When to use ? 

1. passing between 1 / 2 / 3 levels passing props is good way 
2. hirerachy is big ? then go for Context. 

Redux solves the similar problem but lets see that later.

lets create one more Content Called "THEME CONTEXT"

ThemeContext:

1. Create a theme context

import { createContext } from "react";

const ThemeContext = createContext({
    theme : "default",
    setTheme : () => {}
})

export default ThemeContext;

2. go to App.js 

 const [emailId , setEmailId] = useState("firdulearnsreact@gmail.com")
  const [theme , setTheme] = useState("light");
  return ( 
  <ThemeContext.Provider value = {{theme : theme, setTheme : setTheme}}>
  <UserContext.Provider value={{ email : emailId , setEmail : setEmailId}}>
    <div>
      <HeadingComponent />
      {/* <BodyComponent /> */}
      <Outlet />
    </div>
    </UserContext.Provider>
    </ThemeContext.Provider>
  )};


  Note : you can write any number of Context like this , but writing in the app.js it is provided all over the app.

  3. lets Consume now in section6

    const {theme , setTheme} = useContext(ThemeContext);


          <button onClick={() => {
          setTheme("dark");
        }}> Update Theme from SearchPageComponent : {theme}</button>

    Created a button to check the updation of the theme. 

4. lets consume it in the cardComponent 










