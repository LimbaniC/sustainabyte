import React, { FormEvent } from "react";
import "./SearchBar.css";
import { useAppContext } from "../../WrapperComponent/ContextWrapper";


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
    <form className="container" onSubmit={handleSearch}>
        <input className="search-input" name='search-bar-entry' type='search' placeholder="Search here"/>
        <button className="search-button"></button>
    </form>
    );
};

export default SearchBar;