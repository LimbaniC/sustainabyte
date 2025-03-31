import React from 'react';
import {useAppContext} from "../../WrapperComponent/ContextWrapper.tsx";
import FoodComponent from "../FoodComponent.tsx";
import styles from "./FoodList.module.css"


const FoodList = () => {

  const {foodList} = useAppContext(); 

  return (
    <div className={styles.container}>
        {foodList.map((foodObj) => (
            <div><FoodComponent food={foodObj}/> </div>
        ))}
    </div>
  )
}

export default FoodList;