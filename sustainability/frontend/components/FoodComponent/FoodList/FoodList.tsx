import React from 'react';
import {useAppContext} from "../../WrapperComponent/ContextWrapper.tsx";
import FoodComponent from "../FoodComponent.tsx";
import styles from "./FoodList.module.css"


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
      <div className={styles.container}>
        {filteredFoodList.map((foodObj) => (
          <FoodComponent key={foodObj.id} food={foodObj} />
        ))}
      </div>
    );
  
  }
}

export default FoodList;