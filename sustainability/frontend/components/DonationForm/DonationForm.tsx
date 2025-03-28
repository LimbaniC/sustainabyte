import React from 'react';
import useAppContext from "../WrapperComponent/ContextWrapper.tsx";
import { FoodType } from '../FoodComponent/FoodComponent.tsx';



const DonationForm = () => {

 const { food, updateFood }  = useAppContext(); 

  return (
    <div>
        <h1>Donate your Food!</h1>


        <p>Available food: {food || "No food available"}</p>
    </div>
  )
}

export default DonationForm