"use client"

import { FetchUserByID } from "@/services/api/userAPI"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IUser } from "@/types/user"

interface BreadcrumbsProps{
    userID: string
}

export default function Breadcrumbs(props: BreadcrumbsProps){    
    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUserById = async (userId: string) => {
            const response = await FetchUserByID(userId)
            setUser(response?.data || null)
            setLoading(false)
        }

        getUserById(props.userID)
    }, [props.userID])

    return(
        <div className="flex gap-2">
            <Link 
                href={"/"}
                className="text-gray-500 hover:underline"
            >
                Home
            </Link>
            <span>/</span>
            {loading ? (
                <div className="flex items-center">
                    <div
                        className="w-[100px] bg-gray-200 h-4 rounded-md animate-pulse"
                    ></div>
                </div>
            ) : (
                <span>{user?.name}</span>
            )} 
        </div>
    )
}