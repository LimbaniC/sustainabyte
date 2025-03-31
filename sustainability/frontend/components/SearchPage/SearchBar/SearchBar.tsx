import React from "react";
import styles from "./SearchBar.module.css"
import "../../../../src/assets/fonts.css"


const SearchBar = () => {

    const handleSearch =  (event: React.FormEvent<HTMLFormElement>) => {
        //prevents the page from reloaded
        event.preventDefault();
        alert("You entered something!")
        //needs to be added to
    };


return (
    <form className={styles.container} onSubmit={handleSearch}>
        <input className={styles.search_input} name='search-bar-entry' type='search' placeholder="Search here"/>
        <button className={styles.search_button}>Search</button>
    </form>
    );
};

export default SearchBar;