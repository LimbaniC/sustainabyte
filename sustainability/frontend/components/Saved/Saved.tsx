import React from "react";
import type { FoodType} from "../FoodComponent/FoodComponent.tsx";
import { useState } from "react";
import "./saved.css";



export function Saved({foods,user}:{foods: FoodType[],user: string}){


    const [savedFoods, setSavedFoods] = useState(foods);

  const removeFood = (indexToRemove: number) => {
    setSavedFoods(savedFoods.filter((_, index) => index !== indexToRemove));
  };
    return(

        <div className ="saved-card">
            <p>Hello {user} you have saved:</p>
            <ul>
                {savedFoods.map((food,index)=>(
                    <li key={index} className="flex"><div className="square">
                    {food.imageUrl ? ( <img src={food.imageUrl} alt={food.foodName} />
            ) : (
              <div className="placeholder-scales square">No image</div>
            )}
          </div>{food.foodName}
            <button
            className="remove-button"
            onClick={() => removeFood(index)}
            aria-label={`Remove ${food.foodName}`}
            >
            ❌
            </button></li>))
                }
                
            </ul>
            <p>This totals to {savedFoods.reduce((acc,food) => acc + (food.value ?? 0),0)}$</p>
            <button className="saved-button">claim</button>
        </div>
    )

}