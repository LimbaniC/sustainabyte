// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FoodComponent from '../frontend/components/FoodComponent/FoodComponent.tsx';
import FOOD_DATA from '../backend/DATA/FoodData.tsx';

function App() {
  return (
    <>
      <div>
        <FoodComponent {...FOOD_DATA[0]} />
        <FoodComponent {...FOOD_DATA[1]} />
        <FoodComponent {...FOOD_DATA[2]} />
        <FoodComponent {...FOOD_DATA[3]} />
      </div> 
    </>
  )
}

export default App
