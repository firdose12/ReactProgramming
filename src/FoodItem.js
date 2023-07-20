import { useDispatch } from "react-redux";
import {addItem , deleteItem} from "./cartSlice"

const FoodItem = ({item , isCartPage}) => {
    console.log("Hellooooo");
    console.log("item From FoodItem" , item);
    const dispatch = useDispatch();

    const addMenuItemHandler = () => {         
    dispatch (addItem(item))
    }

    const removeItemHandler = () => {
      dispatch(deleteItem(item))
    }

    return (
        <div>
             <li className="flex py-6" key={item?.id}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">{item?.name}</a>
                            </h3>
                            <p className="ml-4">{item?.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{item?.category}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>

                          <div className="flex">
                         { !isCartPage &&
                         <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 mr-8" onClick={addMenuItemHandler}>Add to cart</button>
                          }
                        { isCartPage &&
                         <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 mr-8" onClick={removeItemHandler}>Remove Item</button>
}
                          </div>
                        </div>
                      </div>
                    </li>
        </div>
    )
}

export default FoodItem;