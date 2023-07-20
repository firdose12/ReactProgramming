import React, { lazy, Suspense, useState } from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {  BodyComponent } from "./section6";
import  ErrorComponent  from "./ErrorComponent";
//import AboutUs from "./AboutUsComponent";
import RestaurantDataComponent from "./RestaurantDataComponent";
import UserContext from "./UserContext";
import HeadingComponent from "./HeadingComponent";
import ThemeContext from "./ThemeContext";
import { Provider } from "react-redux";
import store from "./store";
import CartComponent from "./CartComponent";

const AboutUs = lazy(() => import("./AboutUsComponent"))

const AppLayout = () => {

  const [emailId , setEmailId] = useState("firdulearnsreact@gmail.com")
  const [theme , setTheme] = useState("light");
  return ( 
  <Provider store={store}>
  <ThemeContext.Provider value = {{theme : theme, setTheme : setTheme}}>
  <UserContext.Provider value={{ email : emailId , setEmail : setEmailId}}>
    <div>
      <HeadingComponent />
      {/* <BodyComponent /> */}
      <Outlet />
    </div>
    </UserContext.Provider>
    </ThemeContext.Provider>
    </Provider>
  )};

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      errorElement : <ErrorComponent />,
      children : [ 
        {
          path : "/about-us",
          element : <Suspense fallback = {<h1>loading ..... </h1>}><AboutUs /></Suspense>,
          errorElement : <ErrorComponent />
        },
        {
          path : "/search-results",
          element : <BodyComponent />,
          errorElement : <ErrorComponent />
        },
        {
          path : "/restaurant-data/:id",
          element : <RestaurantDataComponent />,
          errorElement : <ErrorComponent />
        },
        {
          path : "/cart",
          element : <CartComponent />,
          errorElement : <ErrorComponent />
        }

      ]
    }
  ])
  
  const root = ReactDOM.createRoot(document.getElementById("App"));
  root.render(<RouterProvider router={appRouter} />);

// const heading = React.createElement("h1",{id:"title"},"HELLO WORLD");
// console.log(heading);


// const HeadComponent = () => { 
//     return (
//         <div id="title" className="title-class" tabIndex="1">
//         <h1>Namaste JavaScript</h1>
//         <h2>From Zero to Hero</h2>
//         <h3>in 3 Months</h3>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadComponent />); 
// for react component
// root.render(heading); // for react element

/* 

When you gave normal imports here in app.js , you will see error stating that browser file cannot have 
import , that is correct , javascript file cannot have import , so to specify that go to index.html and give 
type="module" in the script tag

*/ 
