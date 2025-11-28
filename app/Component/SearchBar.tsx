import { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps{
    onSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar(props: SearchBarProps){
    return(
        <div className="flex gap-1 items-center px-3 py-2 border border-gray-300 rounded-md">
            <CiSearch
                className="text-gray-700"
            />
            <input 
                type="text"
                className="rounded-md px-1 focus:outline-0 text-gray-700"
                placeholder="Search for name..." 
                onChange={props.onSearch}
            />

        </div>
    )
}