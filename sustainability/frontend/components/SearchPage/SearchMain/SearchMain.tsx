import React from 'react';
import SearchBar from "../SearchBar/SearchBar.tsx";
import FoodList from "../../FoodComponent/FoodList/FoodList.tsx";

const SearchMain = () => {
  return (
    <div>
        <SearchBar/>
        <FoodList/>
    </div>
  )
}

export default SearchMain;