import React from 'react';
import {useAppContext} from "../WrapperComponent/ContextWrapper.tsx";
import './DonationForm.css';


const DonationForm = () => {

 const { food, updateFood }  = useAppContext(); 

  return (
    <div className="outer">
        <h1>Donate your Food!</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const foodName = formData.get('foodName') as string;
            const foodAmount = parseInt(formData.get('foodAmount') as string, 10);
            const foodCategory = formData.get('foodCategory') as string;
            const foodExpirationDate = new Date(formData.get('foodExpirationDate') as string);
            const foodDescription = formData.get('foodDescription') as string;
            const foodAllergen = formData.get('foodAllergen') as string;
            
            updateFood({foodName, foodAmount, foodCategory, foodExpirationDate, foodDescription, foodAllergen});
        }}>
            <input type="text" name="foodName" placeholder="Food Name" required />
            <input type="number" name="foodAmount" placeholder="Food Amount" required />
            <input type="text" name="foodCategory" placeholder="Food Category" required />
            <input type="date" name="foodExpirationDate" required />
            <textarea name="foodDescription" placeholder="Food Description"></textarea>
            <input type="text" name="foodAllergen" placeholder="Food Allergen" />
            <button type="submit">Donate</button>
        </form>

        <p className="donation-paragraph">{JSON.stringify(food)}</p>


    </div>
    
  )
}

export default DonationForm