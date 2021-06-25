import React from "react";
import s from "./SearchBar.module.css"

const SearchBar = ({state: {queryWord}, handleChange, onSearch}) => {

    return <header>
        <form>
            <button onClick={onSearch} type="submit">
                <span>Search</span>
            </button>

            <input onChange={handleChange}
                   type="text"
                   autoFocus
                   placeholder="Search movie"
                   value={queryWord}
            />
        </form>
    </header>

}

export default SearchBar