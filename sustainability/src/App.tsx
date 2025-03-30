// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import FoodComponent from '../frontend/components/FoodComponent/FoodComponent.tsx';
// import FOOD_DATA from '../backend/DATA/FoodData.tsx';
import {Navbar} from '../frontend/components/Navbar/Navbar.tsx'; 
import Home from '../frontend/components/Homepage/Homepage.tsx';
import Login from '../frontend/components/Authentication/Login/Login.tsx';
import Signup from '../frontend/components/Authentication/Signup/Signup.tsx';
import ContextWrapper from '../frontend/components/WrapperComponent/ContextWrapper.tsx';
import SearchBar from "../frontend/components/SearchPage/SearchBar/SearchBar.tsx";
import DonationForm from '../frontend/components/DonationForm/DonationForm.tsx';


function App() {
  return (

  <ContextWrapper>
    <Router> 
    <Navbar Anchors={[{name:"Saved",ref:'/saved'},{name:"Donate",ref:'/donate'},{name:"Search",ref:"/search"}]} />

   {/* <Navbar Anchors={[{ name: "Home", ref: "https://www.merriam-webster.com/dictionary/test" }, { name: "About", ref: "https://www.merriam-webster.com/dictionary/testing" }]}></Navbar>  */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchBar />}/>
        <Route path="/donate" element={<DonationForm />} />
   
      </Routes>
    </Router> 
    </ContextWrapper>

  );
 
};

export default App;
