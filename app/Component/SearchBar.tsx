"use client"

import React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps{
    onSearch: (text: string) => void
}

const SearchIconContent = () => {
    return <CiSearch className="text-gray-700"/>
}

const SearchIconMemoized = React.memo(SearchIconContent)

export default function SearchBar(props: SearchBarProps){
    const [searchValue, setSearchValue] = useState(() => {
        if (typeof window !== "undefined"){
            const localSearchValue = localStorage.getItem("search-value") || "";
            props.onSearch(localSearchValue)
            return localSearchValue
        }else{
            return ""
        }

    });

    const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value); 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem("search-value", searchValue);  
            props.onSearch(searchValue)          
        }, 300);

        return () => clearTimeout(timer);
    }, [searchValue, props]);

    return(
        <div className="flex gap-1 items-center px-3 py-2 border border-gray-300 rounded-md">
            <SearchIconMemoized/>
            <input 
                type="text"
                className="rounded-md px-1 focus:outline-0 text-gray-700"
                placeholder="Search for name..." 
                onChange={handleSearchValue}
                value={searchValue} 
            />
        </div>
    );
}