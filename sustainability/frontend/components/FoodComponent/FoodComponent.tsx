import React from 'react';
import './FoodComponent.css';
// import "../../../../src/assets/fonts.css"

export type FoodType = { 
      id: number,
      foodName: string,
      foodAmount: number,
      foodCategory: string, 
      foodExpirationDate: Date, 
      foodDescription: string, 
      foodAllergen: string
      value?: number,
      imageUrl?: string

}


const FoodComponent: React.FC<{food: FoodType}> = ({food}) => {
    return (
      <div className="food-card">
        <div className="food-image">
          {food.imageUrl ? ( <img src={food.imageUrl} alt={food.foodName} />
  ) : (
    <div className="image-placeholder">No image</div>
  )}
</div>

        <button className="add-cart">Add to cart</button>
        <div className="food-info">
          <h3>{food.foodName}</h3>
          <p>Quantity: {food.foodAmount}</p>
          <p>Expiration: {food.foodExpirationDate.toLocaleDateString()}</p>
          <p>Description: {food.foodDescription}</p>
        </div>

      </div>

    );
  };
  

export default FoodComponent;
