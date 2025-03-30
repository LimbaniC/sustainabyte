import React from 'react';
import {useAppContext} from "../../WrapperComponent/ContextWrapper.tsx";
import FoodComponent from "../FoodComponent.tsx";


const FoodList = () => {

  const {foodList} = useAppContext(); 

  return (
    <div className="food-section">
        {foodList.map((foodObj) => (
            <FoodComponent food={foodObj}/>  
        ))}
    </div>
  )
}

export default FoodList;