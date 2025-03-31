import React, { FormEvent } from "react";
import styles from "./SearchBar.module.css"
import { useAppContext } from "../../WrapperComponent/ContextWrapper";
import "../../../../src/assets/fonts.css";



const SearchBar = () => {

    const { setSearch } = useAppContext(); 

    const handleSearch =  (event: FormEvent<HTMLFormElement>) => {
        //prevents the page from reloaded
        event.preventDefault();

        const inputElement = event.currentTarget.elements.namedItem("search-bar-entry") as HTMLInputElement;
        if (inputElement) {
            setSearch(inputElement.value.toString()); // Pass the string value
        }    

        console.log(event);
        
        // setSearch(event);

        // searchFilter(event);
    };



return (
    <form className={styles.container} onSubmit={handleSearch}>
        <input className={styles.search_input} name='search-bar-entry' type='search' placeholder="Search here"/>
        <button className={styles.search_button}>Search</button>
    </form>
    );
};

export default SearchBar;