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
      foodName: string,
      foodAmount: number,
      foodCategory: string, 
      foodExpirationDate: Date, 
      foodDescription: string, 
      foodAllergen: string

}


const FoodComponent = ({foodImage, foodName, distanceAway}: FoodSP) => {
    return (
      <div className="food-card">
      <div className="food-image">
        <img src={foodImage} alt={foodName} />
      </div>
      <div className="food-info">
        <span className="bookmark-icon">🔖</span>
        <p>{distanceAway} minutes away...</p>
        <span className="walk-icon">🚶‍♂️</span>
      </div>
    </div>

    );
  };
  

export default FoodComponent;
