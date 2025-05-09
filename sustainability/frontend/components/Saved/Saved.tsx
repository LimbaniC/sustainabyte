import React, { useContext } from "react";
import type { FoodType} from "../FoodComponent/FoodComponent.tsx";
import { useState } from "react";
import { useAppContext } from '../WrapperComponent/ContextWrapper';
import "./saved.css";



export function Saved({user}:{user: string}){


    const {savedFoods, removeSavedFood,donatedFoods,removeDonatedFood} = useAppContext();

  
    return(
      <div className ="center-saved">
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
            onClick={() => removeSavedFood(index)}
            aria-label={`Remove ${food.foodName}`}
            >
            ❌
            </button></li>))
                }
                
            </ul>
        </div>


        <div className ="saved-card">
            <p>Hello {user} you have donated:</p>
            <ul>
                {donatedFoods.map((food,index)=>(
                    <li key={index} className="flex"><div className="square">
                    {food.imageUrl ? ( <img src={food.imageUrl} alt={food.foodName} />
            ) : (
              <div className="placeholder-scales square">No image</div>
            )}
          </div>{food.foodName}
            <button
            className="remove-button"
            onClick={() => removeDonatedFood(index)}
            aria-label={`Remove ${food.foodName}`}
            >
            ❌
            </button></li>))
                }
                
            </ul>
        </div>




        </div>



    )

}