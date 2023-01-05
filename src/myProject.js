import { React } from 'react';
import ReactDOM from 'react-dom/client';


const HeaderComponent = () => {
    return (
        <h2>Learn Courses</h2>
    )
}

const CardComponent = (props) => {
    return ( 
        <div id="react-card" className="react-card"> 
         <img src={props.restraunt.img} />
         <h2>{props.restraunt.title1}</h2>
         <h2>{props.restraunt.title2}</h2>
        </div>
    )
}

const data = [
    {
        img:"https://media.geeksforgeeks.org/img-practice/banner/Data-Structures-With-Python-thumbnail.png?v=19357",
        title1:"React Programming",
        title2:"Learn From Scratch",
        id:1212
    },
    {
        img:"https://media.geeksforgeeks.org/img-practice/banner/bundle-1-thumbnail.png?v=19357",
        title1:"React Programming 1",
        title2:"Learn From Scratch 1",
        id:1313
    },
    {
        img:"https://media.geeksforgeeks.org/img-practice/banner/system-design-live-thumbnail.png?v=19357",
        title1:"React Programming 2",
        title2:"Learn From Scratch 2",
        id:1414
    }
];

const BodyComponent = () => (
    <div className='cardContainer'>
        <CardContainer />
    </div> 
)

const CardContainer = () => {
    const cards = data.map((restaraunt) =>  {
        return <CardComponent restraunt={restaraunt} key={restaraunt.id} />
    })
    return cards
}

const AppLayout = () => (
    <>
    <HeaderComponent />
    <BodyComponent />
    </>
)

const root = ReactDOM.createRoot(document.getElementById("myProject"))
root.render(<AppLayout />)


