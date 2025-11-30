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
        {name: "No.", width: 5},
        {name: "Title", width: 35},
        {name: "Body", width: 60}
    ]

    console.log("posts", posts)

    return (
        <> 
            <table className="w-full border-collapse">
                <thead className="border-b border-t border-gray-200">
                    <tr>
                        {THeadPostTable.map((item, index) => (
                            <th
                                key={item.name} 
                                className={`text-sm text-start px-2 py-2 border-r border-gray-200 text-gray-500 font-normal ${index === THeadPostTable.length - 1 ? "border-r-0" : ""}`}
                                style={{ width: `${item.width}%` }}
                            >{item.name}</th>
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
                                <td colSpan={THeadPostTable.length}>
                                    this user has no post
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
                                    <td className="border-r border-gray-200 p-1 px-2 text-center text-gray-600">{index + 1}</td>
                                    <td className="border-r border-gray-200 p-1 px-2 text-gray-600">{item.title}</td>
                                    <td className="border-r border-gray-200 p-1 px-2 text-gray-600">{item.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    )
                )}
            </table>
        </>
    )
}