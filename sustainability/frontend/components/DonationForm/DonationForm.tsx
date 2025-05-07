import React, { useState } from 'react';
import {useAppContext} from "../WrapperComponent/ContextWrapper.tsx";
import './DonationForm.css';


const DonationForm = () => {

 const { updateFood, addToFoodList}  = useAppContext(); 
 const [imageUrl, setImageUrl] = useState<string | null>(null);
 const [showThankYou, setShowThankYou] = useState(false); 

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string); 
    };
    reader.readAsDataURL(file);
  }

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const foodName = formData.get('foodName') as string;
    const foodAmount = parseInt(formData.get('foodAmount') as string, 10);
    const foodCategory = formData.get('foodCategory') as string;
    const foodExpirationDate = new Date(formData.get('foodExpirationDate') as string);
    const foodDescription = formData.get('foodDescription') as string;
    const foodAllergen = formData.get('foodAllergen') as string;

    const foodData = {
      foodName,
      foodAmount,
      foodCategory,
      foodExpirationDate,
      foodDescription,
      foodAllergen,
      imageUrl: imageUrl ?? ""
    };

    try {
      const response = await fetch('http://localhost:5004/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(foodData)
      });

      if (response.ok) {
        const newFood = { id: Date.now(), ...foodData };
        updateFood(newFood);
        addToFoodList(newFood);
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 3000);
        (e.target as HTMLFormElement).reset();
        setImageUrl(null);
      } else {
        console.error('Failed to upload food');
      }
    } catch (error) {
      console.error('Error posting food data:', error);
    }
  };

  return (  
    <> 
    {showThankYou && (
      <div className="thank-you-banner">Thank you for donating!</div>
    )}

    <div className='donation-page'>
    <><div className="outer">

      <h1>Donate your Food!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="foodName" placeholder="Food Name" required />
        <input type="number" name="foodAmount" placeholder="Food Amount" required />
        <input type="text" name="foodCategory" placeholder="Food Category" required />
        <input type="date" name="foodExpirationDate" required />
        <textarea name="foodDescription" placeholder="Food Description"></textarea>
        <input type="text" name="foodAllergen" placeholder="Food Allergen" />
        <button type="submit">Donate</button>
      </form>

      {/* <p className="donation-paragraph">{JSON.stringify(food)}</p>  */}

    </div> 

    <div className="donation-right">
        <h2>Upload Food Image</h2>

        {imageUrl ? (
          <img src={imageUrl} alt="Preview" className="image-preview" />
        ) : (
          <div className="image-placeholder">No image selected</div>
        )}

        <input type="file" accept="image/*" onChange={handleImageChange} />
        <p className="image-note">Image must show expiration date</p>
      </div></>

      </div>
      </>
  )
}

export default DonationForm