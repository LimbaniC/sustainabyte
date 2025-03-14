// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FoodComponent, { FoodData } from '../frontend/components/FoodComponent/FoodComponent.tsx';
import FOOD_DATA from '../backend/DATA/FoodData.tsx';
import {Saved} from '../frontend/components/Saved/Saved.tsx';


const testFoods: FoodData[] = [
  { 
    foodName: "Apple", 
    foodAmount: 2, 
    foodCategory: "Fruit", 
    foodExpirationDate: new Date("2025-01-01"), 
    foodDescription: "A sweet red apple", 
    foodAllergen: "None", 
    foodValue: 95 
},
{ 
    foodName: "Banana", 
    foodAmount: 3, 
    foodCategory: "Fruit", 
    foodExpirationDate: new Date("2025-02-01"), 
    foodDescription: "A ripe banana", 
    foodAllergen: "None", 
    foodValue: 105 
},
{ 
    foodName: "Orange", 
    foodAmount: 1, 
    foodCategory: "Fruit", 
    foodExpirationDate: new Date("2025-03-01"), 
    foodDescription: "A fresh orange", 
    foodAllergen: "None", 
    foodValue: 62 
},
];

function App() {
  return (
    <Saved foods={testFoods} user={"Jacob"}></Saved>
  )
}

export default App
