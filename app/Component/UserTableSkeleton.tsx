export default function UserTableSkeleton(){
    return(
        <tbody>
            {Array.from({length: 10}, (_, index:number) => (
                <tr
                    key={index}
                >
                    {Array.from({length: 5}, (_, index:number) => (
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