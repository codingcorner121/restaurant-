import React, { useContext } from "react";
import './FoodDisplay.css';
import { food_list } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)

    return(
        <div className="food-display">
            <h2>Top dishes near you</h2>

            <div className="food-display-list">

                {food_list.map((item,index) => {

                    if (category==="All" || category===item.category) {
                        return(
                            <FoodItem key={index}  id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}  />
                        )
                    }
                    
                })}

            </div>

            

        </div>
    )
}

export default FoodDisplay;