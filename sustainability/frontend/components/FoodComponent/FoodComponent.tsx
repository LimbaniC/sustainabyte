import React from 'react';
import './FoodComponent.css';

/*
 Input: 
 Food image, 
 Food name,
 Distance away

*/

export type FoodSP = { 
  foodImage: string;
  foodName: string;
  distanceAway: number;
}

export type FoodType = { 
      id: number,
      foodName: string,
      foodAmount: number,
      foodCategory: string, 
      foodExpirationDate: Date, 
      foodDescription: string, 
      foodAllergen: string
      value?: number

}


const FoodComponent: React.FC<{food: FoodType}> = ({food}) => {
    return (
      <div className="food-card">
        <div className="food-image">

        </div>

        <div className="food-info">
          <h3>{food.foodName}</h3>
          <p>Quantity: {food.foodAmount}</p>
          <p>Expires: {food.foodExpirationDate.toLocaleDateString()}</p>
        </div>

      </div>

    );
  };
  

export default FoodComponent;
