import React from "react";
import type {FoodData} from "../FoodComponent/FoodComponent.tsx";
import "./saved.css";



export function Saved({foods,user}:{foods: FoodData[],user: string}){

    return(

        <div className ="saved-card">
            <p>Hello {user} you have saved:</p>
            <ul>
                {foods.map((food,index)=>(
                    <li key={index}>{food.foodName}</li>))
                }
            </ul>
            <p>This totals to {foods.reduce((acc,food) => acc + food.foodValue,0)}$</p>
            <button className="saved-button">claim</button>
        </div>
    )

}