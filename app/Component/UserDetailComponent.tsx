"use client"

import { useEffect, useState } from "react"
import { FetchUserByID } from "@/services/api/userAPI"
import { IUser } from "@/types/user"
import { IoIosPerson } from "react-icons/io";
import { FaBuilding } from "react-icons/fa6";
import Image from "next/image"
import React from "react";
import LineSeparator from "./LineSeparator";
import UserPostsTable from "./UserPostsTable";
import UserDetailSkeleton from "./UserDetailSkeleton";
import DataNullImage from "../../public/img/data_null.png"
import ButtonGeneral from "./ButtonGeneral";
import { useRouter } from "next/navigation";

interface UserDetailComponentProps{
    userID: string
}

const UserPostTableMemoized = React.memo(UserPostsTable)

UserPostTableMemoized.displayName = ("UserPostTableMemoized")

export default function UserDetailComponent(props: UserDetailComponentProps){
    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const getUserById = async  (userId: string) => {
            const response = await FetchUserByID(userId)
            setUser(response?.data || null)
            setLoading(false)
        }

        getUserById(props.userID)
    }, [props.userID])

    const backToHomePage = () => {
        router.push('/')
    }

    if(user === null && !loading) {
        return(        
            <div className="absolute h-screen w-full left-0 top-0 flex flex-col gap-3 items-center justify-center">
                <Image
                    src={DataNullImage}
                    width={150}
                    alt="Data not found image"
                />
                <p className="text-gray-400">User not found</p>
                <ButtonGeneral
                    content="Back"
                    onClick={backToHomePage}
                />
            </div>
        )
    }
    
    return(
        <>
        {loading ? (
            <UserDetailSkeleton/>
        ) : (
            <div className="relative">
                <div className="flex mt-5 gap-5">
                    <div className="w-full">
                        <div
                            className="w-full h-60 bg-linear-to-br from-blue-600 via-cyan-500 to-blue-200 rounded-tl-md rounded-tr-md relative"
                        >
                            <div
                                className="flex items-center justify-center absolute -bottom-20 left-0 mx-10 h-[175px] w-[175px] bg-gray-400 border-5 border-white rounded-full"
                            >
                                <IoIosPerson
                                    className="w-full h-full text-gray-300 m-5"
                                />
                            </div>
                        </div>

                        <div className="pt-30 p-10 bg-gray-100 rounded-bl-md rounded-br-md flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold">{user?.name}</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBuilding
                                    className="text-gray-400"
                                />
                                {user?.company.name}
                            </div>
                        </div>

                        <div className="mt-5 bg-gray-100">
                            <UserPostTableMemoized
                                userID={props.userID}
                            />
                        </div>
                    </div>
                    <div className="w-1/3 bg-gray-100 p-10 rounded-md sticky top-5 min-h-[150px] max-h-[200px]">
                        <h1 className="font-semibold mb-5">Public Profile</h1>
                        <div className="flex justify-between border-gray-300">
                            <p className="text-gray-400">Email</p>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                        <LineSeparator/>
                        <div className="flex justify-between border-gray-300">
                            <p className="text-gray-400">City</p>
                            <p className="text-gray-600">{user?.address.city}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}