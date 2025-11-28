// UserTable.tsx
"use client"

import SearchBar from "./SearchBar";
import DetailButton from "./DetailButton";
import UserTableSkeleton from "./UserTableSkeleton";
import Image from "next/image";
import ErrorImage from "../../public/img/error.png"
import DataNull from "../../public/img/data_null.png"

import { FetchAllUser } from "@/services/api/userAPI";
import { ChangeEvent, useEffect, useState } from "react";
import type { IUser, TUserTable } from "@/types/user";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { FaUserXmark } from "react-icons/fa6";

export default function UserTable(){
    const [user, setUser] = useState<IUser[]>([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null) // Tipe sudah benar: string | null
    const theadData: TUserTable[] = [
        {name: "Full Name", width: 25, icons: <BsPersonFill/>}, 
        {name: "Email", width: 25, icons: <MdOutlineAlternateEmail/>},
        {name: "City", width: 15, icons: <IoLocationSharp/>},
        {name: "Company Name", width: 25, icons: <FaBuilding/>},
        {name: "Action", width: 10, icons: <FiTarget/>}
    ]

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const filtereddUser: IUser[] = user.filter((user) => 
        user.name.toLowerCase().includes(search.toLowerCase())
    )
    
    const getAllUser = async () => {
        try {
            setLoading(true)
            const data = await FetchAllUser()
            setUser(data.data)
            setError(null)
        } catch (error) {
            if(error instanceof Error){
                setError(error.message)
            } else if (typeof error === 'string'){
                setError(error)
            }
            
            setUser([])
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllUser()
    }, [])  

    return (
        <>
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
                    onSearch={(e) => handleSearch(e)}
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
                
                {loading ? (
                    <UserTableSkeleton/>
                ) : error ? (
                    <tbody>
                        <tr>
                            <td colSpan={theadData.length} className="text-center">
                                <div className="p-40 text-red-500 text-lg flex flex-col items-center gap-3">
                                    <Image 
                                        loading="lazy"
                                        height={100}
                                        src={ErrorImage} alt="" 
                                        className="opacity-50 filter:"
                                    />
                                    <p>{error}</p> 
                                    <button
                                        className="cursor-pointer border border-gray-300 px-10 p-1 rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition-all duration-300"
                                        onClick={() => getAllUser()}
                                    >Retry</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody
                        className="relative"
                    >
                        {filtereddUser.length === 0 && search !== "" ? (
                            <tr>
                                <td colSpan={theadData.length} className="text-center">
                                    <div className="p-40 text-gray-400 text-lg flex flex-col items-center gap-3 ">
                                        <Image 
                                            loading="lazy"
                                            height={100}
                                            src={DataNull} alt="" 
                                            className="opacity-50"
                                        />
                                        <p>User not found</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            filtereddUser.map((item, index) => (
                                <tr
                                    className="border-b border-gray-200"
                                    key={index}
                                >
                                    <td className="border-r border-gray-200 p-1 px-3 font-semibold" style={{ width: `25%` }}>{item.name}</td>
                                    <td className="border-r border-gray-200 p-1 px-3 underline text-gray-600" style={{ width: `25%` }}>{item.email}</td>
                                    <td className="border-r border-gray-200 p-1 px-3 text-gray-600" style={{ width: `15%` }}>{item.address?.city}</td>
                                    <td className="border-r border-gray-200 p-1 px-3 text-gray-600" style={{ width: `25%` }}>{item.company?.name}</td>
                                    <td className="p-1.5 px-3 text-center" style={{ width: `10%` }}>
                                        <DetailButton/>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                )}
            </table>
        </>  
    );
}