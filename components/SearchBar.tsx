"use client";
import { useState } from "react";
import { SearchManufacturer } from "./index";

const SearchBar = () => {
    const [manufacturer, setMearchValue] = useState(""); 

    const handleSearch = () => { };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer />
            </div>
        </form>
    );
};

export default SearchBar;
