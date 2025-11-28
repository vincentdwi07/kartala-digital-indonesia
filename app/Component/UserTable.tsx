"use client"

import SearchBar from "./SearchBar";
import DetailButton from "./DetailButton";

import { FetchAllUser } from "@/services/api/userAPI";
import { useEffect, useState } from "react";
import type { IUser, TUserTable } from "@/types/user";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";

export default function UserTable(){
    const [user, setUser] = useState<IUser[]>([])
    const [search, setSearch] = useState("")
    const theadData: TUserTable[] = [
        {name: "Full Name", width: 25, icons: <BsPersonFill/>}, 
        {name: "Email", width: 25, icons: <MdOutlineAlternateEmail/>},
        {name: "City", width: 15, icons: <IoLocationSharp/>},
        {name: "Company Name", width: 25, icons: <FaBuilding/>},
        {name: "Action", width: 10, icons: <FiTarget/>}
    ]

    const handleSearch = (text: string) => {
        setSearch(text)
    }

    const filtereddUser: IUser[] = user.filter((user) => 
        user.name.toLowerCase().includes(search.toLowerCase())
    )
  
    useEffect(() => {
        const getAllUser = async () => {
        const data = await FetchAllUser()
        setUser(data.data) 
    }

    getAllUser()
  }, [])  

  return (
    <>
    <div>
        
    </div>
        <div className="flex items-center gap-3 mb-5">
            <h1 className="font-semibold text-3xl">
                User Data
            </h1>
            <div className="bg-gray-200 text-gray-500 text-sm font-semibold rounded-lg px-3 py-0 flex justify-center items-center h-7">
                {user.length}
            </div>
        </div>

        <div className="mb-3 w-full flex justify-start">
            <SearchBar
                onSearch={(e) => setSearch(e.target.value)}
            />
        </div>

        <table className="rounded-md w-full border-collapse">
            <thead className="border-t border-b border-gray-200 text-sm bg-gray-50">
                <tr>
                    {theadData.map((item, index) => (
                        <th 
                            key={index}
                            className={`text-sm px-3 py-2 border-r border-gray-200 text-gray-500 ${index === theadData.length - 1 && "border-r-0"}`}
                            style={{ width: `${item.width}%`, fontWeight: "500" }}
                        >
                            <div className="flex gap-2 items-center">
                                {item.icons}
                                <p>{item.name}</p>
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {filtereddUser.map((item, index) => (
                    <tr
                        className="border-b border-gray-200"
                        key={index}
                    >
                        <td className="border-r border-gray-200 p-1 px-3 font-semibold">{item.name}</td>
                        <td className="border-r border-gray-200 p-1 px-3 underline text-gray-600">{item.email}</td>
                        <td className="border-r border-gray-200 p-1 px-3 text-gray-600">{item.address.city}</td>
                        <td className="border-r border-gray-200 p-1 px-3 text-gray-600">{item.company.name}</td>
                        <td className="p-1.5 px-3 inline-block">
                            <DetailButton/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>  
  );
}