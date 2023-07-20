Lets Build our store :

previously we have built a context where it helps to establish a communication for the components by providing all to the components.

Problem : we might need some data to be communicated between any components , it can from one component to other component , or it can be from outside the component anywhere else , its valid scenario ,

what we did till now it we used context and provided the global state to entire project.

what is the advantage of using redux store now ?

what should we use context / redux store ?

what are the disadvantages of context ?

above questions are the homework .

lets learn Redux today :

Agenda :

Today in our application we are going to build "cart flow"

1. when you add it should add to the cart.

what is the purpose of redux store.

before that we will be using redux toolkit becauuse using redux installing packages everything is complex so we have redux toolkit

Assume it like database for front end.

slice is a small section of redux store , it can have multiple slices

what slices can our project have ? 1. cart slice , user slice , theme slice etc..

when we create a slice ( nthg but object ) we will create with initial value , there is something known as reducer , reducer is a function that is used to update the slice , when you do Add Cart , it should call the reducer and update the card ,

Now ,

How many types of update can happen ? update , create , delete so we might need multiple functions , these functions are known as "Actions"

simplly add() , delete () , clear() we call these as actions

we also hear something called "Dispatch" , its just a fancy way of saying
when we click on Add Button
from "Updating the reducer with the help of action to cart slice "
to "Dispatching an action which is in reducer which updates the slice"

So finally in a fancy way

When you click on Add Button -> Dispatch the action which is in reducer which updates the slice.

these complicated words seems scary thats y it seems scary for others also

you can see the video again to see beautiful representation of the image.

We also heared something called "Selector"

you ll see cart icon right ? next to cart icon you ll also see number right ? from there that number comes , yes from selector , so using data from slice with the help of selector is what it does.

selector is just like a consumer ( just like a "useContext" )

lets get into the Code now :)

Steps :

1. first thing , let us get reduc tool kit into our project "npm install @reduxjs/toolkit
2. also install npm install react-redux

two things added , what is the difference , just understand one is core pacakage and other acts like a api

Always know what is coming from where imports - Home Work.

3. lets build a store , just create store.js file , we have api called configureApi which comes from redux toolkit

what does this store contain ? slices right ? lets look later

const store = configureStore({

})

export default store;

4. first provide this store available to all the application , go to app.js and wrap it to a Provider which comes from react redux.

from

return (
<ThemeContext.Provider value = {{theme : theme, setTheme : setTheme}}>
<UserContext.Provider value={{ email : emailId , setEmail : setEmailId}}>
<div>
<HeadingComponent />
{/_ <BodyComponent /> _/}
<Outlet />
</div>
</UserContext.Provider>
</ThemeContext.Provider>
)};

to

return (
<Provider store = {store}>
<ThemeContext.Provider value = {{theme : theme, setTheme : setTheme}}>
<UserContext.Provider value={{ email : emailId , setEmail : setEmailId}}>
<div>
<HeadingComponent />
{/_ <BodyComponent /> _/}
<Outlet />
</div>
</UserContext.Provider>
</ThemeContext.Provider>
</Provider>
)};

what store you are giving here ? where does this store comes from , yes we just created right store.js that is the store which we are making available to everyone.

5. lets build a slice now , we can do it the store.js but lets create a new file for slice , cartSlice.js
   slice is nothing but object only , there is a api called createSlice

slice has name , initialState , reducers ( actions inside that ) ;

by default when you create a slice , it will make you available the actions you can try that by giving , cartSlice.actions

to make that action available we have to use below like convention

export const {addItem} = cartSlice.actions;

now how action will be updating the store is like

            state.value.push(action.payload);

6. now lets try to read the store in the header page , lets build something called cart. before that we have created a store right and to that store we should inform that we have slice created want to store in you , generally silce exposrts the reducer we cannot directly export the slice you have to do something like this

export default cartSlice.reducer

so in short when we create a slice it creates actions and reducer

and in the store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const store = configureStore({
reducers : {
cart : cartReducer,
}
});

export default store;

7.  just to summerize till now

            7.1 create a empty store first  , configure a store with slices , its named a reducer ( weired name , generally they should have given the name as slice )
            7.2 a store can have many slices right ? ( in their words reducer )

                const store = configureStore({
                     reducers : {
                             cart : cartReducer,
                             payment : paymentReducer,
                             card : cardReducer 
                             etc...,,,
                            }

                    });
            7.3 lets create a slice using createSlice , it has name , initial state , and reducers ( which has bunch of actions that updates the slice ) something like this 


export const cartSlice = createSlice({

    name : 'cart',
    initialState : {
        value : []
    },
    reducers : { 
        //actions , you can call it action  / payload
        addItem : (state , action) => {
            // how do you update to your state ? 
            state.value.push(action.payload);
        }
         deleteItem : (state) => {
            // how do you update to your state ? 
            state.value.pop();

        }

    }
})

cartSlice is something like this 

cartSlice = {
    actions : {
        
    },
    reducers : { 
        }
}

i want to export these actions and reducers we will not be exporting directly the slice , we will be exporting actions and reducers 

export const {addItem , deleteItem }  = cartSlice.actions
export default CartSlice.reducer
we can access these in the code not the function written

lets build a cart page now

1. go to headingComponent

yes we have created a cart and added a link to it , now we need access of the store in headingComponent what do we need to get the acces ? 

yes Slector , for that we have a hook , "useSelector"

const cartItems = useSelector() -> this gives access to the entire slice , but i need only cart which is available in the store 

so const cartItems = useSelector( store => store.cart)

if we console log 

CartItems {value: Array(0)}value: [][[Prototype]]: Object

lets add 2 items in the slice and check whethe it will update the length or not

now what do we do to update an slice ? dispatch an action which is in the recuders to the store.

lets dispatch an action , lets create a button inside the /restaurant-data component , when you click the card it goes inside the restaurant details right ? there 

so what is the agenda is when you click on the button it should dispatch the addItem action which updates the store , how many number of items we click the button the cart item lebgth should also change just do it. 

you can see as you keep clicking the button in restaurantDataComponent you will see the cart length and getting updated in heading Component, thats the power of redux.

Module 2 : 

let build clearing the Item  :

just like addItem create one more button called clear cart and do the same thing. 

lets build the list of items in the restaurantdata component , lets select one restaurant and lets show the list of items that restaurant has and lets add what ever items we need , for that lets use tailwind components.


copy the code from here 
https://tailwindui.com/components/ecommerce/components/shopping-carts 

put it in the RestaurantDataComponent 

just go through what you have done for Cart you will understand everything :) its really beautiful :) 

one more thing we have a extension called "Redux Dev Tool " add it to chrome just add it enable it and see the magic :) 

it will keep a track of all the actions , even though your cart became empty , this will maintain the history of all the items :) 






