import React from "react";
import "./SearchBar.css";


const SearchBar = () => {

    const handleSearch =  (event: React.FormEvent<HTMLFormElement>) => {
        //prevents the page from reloaded
        event.preventDefault();
        alert("You entered something!")
        //needs to be added to
    };


return (
    <form className="container" onSubmit={handleSearch}>
        <input className="search-input" name='search-bar-entry' type='search' placeholder="Search here"/>
        <button className="search-button"></button>
    </form>
    );
};

export default SearchBar;