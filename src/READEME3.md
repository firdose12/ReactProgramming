SECTION - 3 LAYING THE FOUNDATION

Component : Everything in the reast is a component , that is the main building block of react.
component is a very small unit of react , then what could be smallest component ? its an empty object.

so lets npm run start , what does it do rememver ? it starts the scripts which we have in the package.json parcel etc.., 

okay say 

const heading = React.createElement("h1",{id:"title"},"Hello World");

is this is a component ? 
Answer is NO , this is a React Element , component is something more than this, the above React Element is giving us a Object thats it.

Component is just a way of communication , its a concept , not a harcoded thing , 

component can be divided into two components , one is fucntional component and the other is class component 

99% we use functional component , 

what is functional component ? 

when we say functional component , its always a function , we will be using arrow functions here , go and check in App.js

in the App.js heading is a react element , how to make it heading component ? 

const HeadComponent = () => {

} it this function return some react element then we can call it as a react component

i.e const HeadComponent = () => {
    return React.createElement("h1",{id:"title"},"Hello World Component");
}

while rendering instead of root.render(heading) do root.render(HeadComponent) -> this will throw an error because the syntax in the root for component should be something like this 
root.render(<HeadComponent />); 

this syntax is JSX , JSX is JavaScript XML , its like you can put some kind of html into JavaScript , its a fancy way of writing that. 

if you want to create a heading using JSX its easy 

const heading = <h1> Hello World JSX</h1> , we can see it as messy , but it gives lots of power , what is that ? 

when parcel sees some html in the javascript , it will compile and at end of the day it will get converted into javascript , so at end of the day its again a Object.

actually not parcel , babel does that for us 

see const heading = React.createElement("h1",{id:"title"},"Hello World"); what this will do  ? 
this will create a object and when you console that you ll see the corresponding html  ( h1 ) der

what JSX do is ?

it generally uses REact.createElement which produces an object and den to html ( DOM element)

so const heading = <h1> Hello World</h1>
here <h1> Hello World</h1> this is JSX

this is not purely HTML , its just like HTML , JSX has its own restricted syntax. 

like in HTML you ll write class="title-class" but in JSX you should write className="title-class"

In HTML you should write tab-index="1" but in JSX you should write
tabIndex="1"

But , 

What is the advantage because , both the heading are doing the same thing then what is there use ? 

Answer : its easier to read and understand 
        if you want to create some child elements for div 
        say exmple 

    const heading = React.createElement("div",{id:"title"},[
        React.createElement("h1",{id:"heading"},"Namaste"),
        React.createElement("h2",{id:"heading"},"From Zero to Hero"),
        React.createElement("h3",{id:"heading"},"in 3 months"),
    ]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(heading);
so here you have created 3 child elements for div , you can see that in the inspect element , see how much efforts you have to put here to just create 3 child elements for div. if you want to create lot and lot then see the pain :) 

it will just gives the head ache , that is y we have introduced JSX , so whole community came and said , y cannot we write the same  thing like HTML in the JavaScript . its easy and like of HTML :) 



so , if you want to create three child elements using JSX what will you do ? 

const heading = < div > 
<h1> Namaste JavaScript</h1>
</div>

this will throw you can bad error , this will not work , because JSX IS A EXPRESSION and IT IS NOT  A EXPRESSION IN THE ABOVE CODE.because EXPRESSION should end in One Statement/line .

so you have to write something like this 

const heading = <div><h1>Namaste JavaScript</h1></div>
but is it possible to write everything in one line no na , so we came up with something called currly braces () , you can put everything together in the round braces and you can have multiple lines , 

const heading = (<div> 
<h1> Namaste JavaScript</h1>
<h2> Zero to Hero</h2>
<h3> in 3 Months</h3>
</div>
);

so whatever we have in the currly braces it will treat as a same line.

so if you want to modify your DOM using React then please use JSX 

Note : someone said ,i cannot always write React.createElement  , then they resolved it by importing "import {createElement} from 'react" and instead of React.createElement just write createElement();

for now just forget createElement now , we ll be only using JSX now :) 

Question : Any performance impact using JSX , ? NO :) its just the way we are writing thats it. its just that babel might take some time to convert the JavaScript.

Parcel has a babel dependency automatically, you dont have to install it along with that. :) 

Question : say we have const x = 10; in App.js , if i want to use it on the web browser then how should you do ? its easy all you have to do is some kind of interpolation

const heading = (
    <div>Namaste
    <h1>{x}</h1>
    </div>
)
in the {} you can write any javascript code.

Question : what if someone want to inser the js code in the html code into your website by somehow getting the control of your code , they can inject js , they can get control of the cookie and storgae , but JSX will sanatise it :) this will be injection free , it will not allow you to inject javascript from outside.

Now coming back to functional component 

const HeadingComponent = () => {
    return (
        <div id="title" className="title-class" tabIndex="1">
        <h1>Namaste JavaScript</h1>
        <h2>From Zero to Hero</h2>
        <h3>in 3 Months</h3>
        </div>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)

Note : <HeadingComponent /> is also same like <HeadingComponent></HeadingComponent>


Question : 

Say we have to title component and we have to use that title component in the HeadComponent how do you do that ? 

Solution : 

    const TitleComponent = () => { 
        return <h1> Title Component </h1>
        }
    this is a title COmponent 

    const HeadComponent = () => { 
        return (<div id="title" className="title-class" tabIndex="1">
        <TitleComponent /> /// like this we have to use component 
        <h2>from Zero to Hero</h2>
        <h3>in 3 Months</h3>
        </div>)
        }

HOMEWORK : 

    1. SuperPowers of JSX
    2. Create a nested component using createComponent
    3. Do the same thing like 2 using JSX
    4. Passing attributes in JSX
    5. Composition of Components
    6.Know what is babel
    7.Create a Header Component with logo , search bar , user icon
    8.instead of type="module" what else we can use


