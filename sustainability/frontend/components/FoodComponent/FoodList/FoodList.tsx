import React from 'react';
import {useAppContext} from "../../WrapperComponent/ContextWrapper.tsx";
import FoodComponent from "../FoodComponent.tsx";


const FoodList = () => {

  const {foodList, searchTerm, searchFilter} = useAppContext(); 
  
  if (!searchTerm || searchTerm.length === 0){ 
    return (
      <div className="food-section">
          {foodList.map((foodObj) => (
              <FoodComponent key={foodObj.id} food={foodObj}/>  
          ))}
      </div>
    )
  }
  else { 
    const filteredFoodList = searchFilter(foodList);


    return (
      <div className="food-section">
        {filteredFoodList.map((foodObj) => (
          <FoodComponent key={foodObj.id} food={foodObj} />
        ))}
      </div>
    );
  
  }
}

export default FoodList;