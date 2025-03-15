// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import FoodComponent from '../frontend/components/FoodComponent/FoodComponent.tsx';
// import FOOD_DATA from '../backend/DATA/FoodData.tsx';
import {Navbar} from '../frontend/components/Navbar/Navbar.tsx'; 
import Home from '../frontend/components/Homepage/Homepage.tsx'


function App() {
  return (
    
      <><Navbar Anchors={[{ name: "Home", ref: "https://www.merriam-webster.com/dictionary/test" }, { name: "About", ref: "https://www.merriam-webster.com/dictionary/testing" }]}></Navbar><Home /></>
  )
 
}

export default App
