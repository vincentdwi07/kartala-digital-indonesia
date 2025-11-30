interface UserTableSkeletonProps{
    rows: number,
    cols: number
}

export default function UserTableSkeleton(props: UserTableSkeletonProps){
    return(
        <tbody>
            {Array.from({length: props.rows}, (_, index:number) => (
                <tr
                    key={index}
                >
                    {Array.from({length: props.cols}, (_, index:number) => (
                        <td 
                            key={index}
                            className="p-3"
                        >
                            <div className="h-6 w-full bg-gray-200 rounded-md animate-pulse"></div>
                        </td>
                    ))}
                </tr>
            ))}                
        </tbody>
    )
}