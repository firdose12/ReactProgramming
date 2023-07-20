
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";



const CartComponent = () => {

const cartValue = useSelector( store => store?.cart?.value);
console.log("CartValue from FoodItem" , cartValue);       

return (
                <>
                <h2> I am into Cart Page</h2>
                {
                        cartValue.map(cart => {                 
                       return  <FoodItem item = {cart} isCartPage = {true}></FoodItem>
                        })
                }
                </>    
        )
}

export default CartComponent;