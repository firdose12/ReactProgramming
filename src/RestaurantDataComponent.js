import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "./CardComponent";
import Shimmer from "./Shimmer";
import {RESTAURANT_DETAIL_API } from "./constants"
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "./cartSlice";
import FoodItem from "./FoodItem"
const RestaurantDataComponent = () => {

    const { id } = useParams();
    const [restInfo, setRestInfo] = useState(null);
    const dispatch = useDispatch();

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const  fetchRestaurantData = async() => {
    const data = await fetch(RESTAURANT_DETAIL_API+id);
    const json = await data?.json();
    setRestInfo(json?.data);
  }

  if(restInfo === null) {
  return <Shimmer /> };


  

const  { name , cuisines , costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
//console.log(name, cuisines, costForTwoMessage);
//console.log(restInfo)

 const {itemCards} = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 //console.log("ItemCards" , itemCards[0]?.card?.info?.name);

// const menuItems = itemCards.map((menu) => {
//   console.log(menu?.card?.info?.name)
// })

// console.log("MenuItems" , menuItems);

const addCartItem = () => { 

 dispatch (addItem({
    name : 'Pizza'
}))

}

const clearCartHandler = () => {
  dispatch(clearCart())
}

const menuItems1 = Object.values(itemCards).map((item) => {
  console.log("menuItems1" , item?.card?.info);
})


  return (
    <div className="flex" style={{gap : '19%'}}>
      <div>
      <div>
        <h1>{restInfo?.cards[0]?.card?.card?.info?.name}</h1>
        <h3>{restInfo?.cards[0]?.card?.card?.info?.cuisines}</h3>
        <h3>{restInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <h1>
        {" "}
        I am Restaurant Data i will be shown when you click on one of the cards
        : {id}
      </h1>
      <button className="font-bold p-5 m-5 bg-green-100" onClick={addCartItem}> Add Item to Cart </button>
      <button className="font-bold p-5 m-5 bg-red-500" onClick={clearCartHandler}> Delete Item </button>
      </div>
    <div>
    <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                      { 
                      // itemCards.map((menu) => {
                      //   <FoodItem item = {menuItems}/> 
                      // <FoodItem item = {null}></FoodItem>
                      // <FoodItem item = {null} />
                        Object.values(itemCards).map((menuItem) => {
                         return  <FoodItem item = {menuItem?.card?.info} isCartPage = {false}/>
                        })
                        // <FoodItem></FoodItem>
                      }
                  </ul>
                </div>
              </div>
            </div>
    </div>
  );
};

export default RestaurantDataComponent;
