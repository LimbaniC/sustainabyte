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

export type FoodData = { 
  foodName: string,
  foodAmount: number,
  foodCategory: string, 
  foodExpirationDate: Date, 
  foodDescription: string, 
  foodAllergen: string,
  foodValue: number, /*added for purpose of saved component might need to be reorganised 
  we need to make a decision on if we want to make global types or keep them local - Jacob*/
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
