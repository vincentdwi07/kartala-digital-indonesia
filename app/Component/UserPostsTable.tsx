"use client"

import { FetchUserPostsByID } from "@/services/api/userAPI"
import { TUserPosts } from "@/types/user"
import { useEffect, useState } from "react"
import UserTableSkeleton from "./UserTableSkeleton"

interface UserPostsTableProps{
    userID: string
}

export default function UserPostsTable(props: UserPostsTableProps){
    const [posts, setPosts] = useState<TUserPosts[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUserPostsById = async (id: string) => {
            try {
                const response = await FetchUserPostsByID(id)
                setPosts(response?.data || []) 

            } catch (error) {
                console.error("Failed to fetch user posts:", error);
                setPosts([]); 
            } finally {
                setLoading(false)
            }
        }

        getUserPostsById(props.userID)
        
    }, [props.userID])

    const THeadPostTable = [
        {name: "No.", width: 5, minWidth: '50px'},
        {name: "Title", width: 35, minWidth: '200px'}, 
        {name: "Body", width: 60, minWidth: '350px'}   
    ]


    return (
        <div className="w-full overflow-x-auto"> 
            <table className="w-full border-collapse">
                <thead className="border-b border-t border-gray-200 bg-gray-50">
                    <tr>
                        {THeadPostTable.map((item, index) => (
                            <th
                                key={item.name} 
                                className={`text-sm text-start px-2 py-2 border-r border-gray-200 text-gray-500 font-medium ${index === THeadPostTable.length - 1 ? "border-r-0" : ""}`}
                                style={{ width: `${item.width}%`, minWidth: item.minWidth }}
                            >
                                <p className="whitespace-nowrap">{item.name}</p> 
                            </th>
                        ))}
                    </tr>
                </thead>
                {loading ? (
                    <UserTableSkeleton
                        rows={10}
                        cols={3}
                    />
                ) : (
                    posts?.length == 0 ? (
                        <tbody>
                            <tr>
                                <td colSpan={THeadPostTable.length} className="text-center p-10 text-gray-400">
                                    <p>This user has no posts</p>
                                </td>
                            </tr>
                        </tbody>
                    ) : (
                        <tbody>
                            {posts?.map((item, index) => (
                                <tr
                                    className="border-b border-t border-gray-200"
                                    key={item.id} 
                                >
                                    <td 
                                        className="border-r border-gray-200 p-2 text-center text-gray-600 text-xs lg:text-sm" 
                                        style={{ minWidth: THeadPostTable[0].minWidth }}
                                    >
                                        {index + 1}
                                    </td>
                                    <td 
                                        className="border-r border-gray-200 p-2 text-gray-700 font-medium whitespace-nowrap text-xs lg:text-sm xl:whitespace-break-spaces" 
                                        style={{ minWidth: THeadPostTable[1].minWidth }}
                                    >
                                        {item.title}
                                    </td>
                                    <td 
                                        className="border-r border-gray-200 p-2 text-gray-600 text-xs lg:text-sm" 
                                        style={{ minWidth: THeadPostTable[2].minWidth }}
                                    >
                                        {item.body}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )
                )}
            </table>
        </div>
    )
}