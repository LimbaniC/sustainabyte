import React from 'react';
import SearchBar from "../SearchBar/SearchBar.tsx";
import FoodList from "../../FoodComponent/FoodList/FoodList.tsx";
import styles from "./SearchMain.module.css"
import "../../../../src/assets/fonts.css"

const SearchMain = () => {
  return (
    <>
      <div className={styles.pageContainer}>
            <div className={styles.searchContainer}>
              <h1>Find food items you're looking for!</h1>
              <SearchBar/>
            </div>  
            <div className={styles.foodListContainer}>
                <FoodList/>
            </div>
      </div>
    </>
  )
}

export default SearchMain;