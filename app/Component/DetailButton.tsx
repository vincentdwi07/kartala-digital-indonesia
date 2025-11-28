import Link from "next/link";
import { FaEye } from "react-icons/fa";

interface DetailButtonProps{
    userId: string
}


export default function DetailButton(props: DetailButtonProps){
    return(
        <Link 
            className="py-1 px-3 shadow-sm shadow-gray-100 rounded-md flex gap-2 border border-gray-300 items-center justify-center text-gray-600 hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300"
            href={`/user-detail/${props.userId}`}
        >
            <FaEye/>
            <p>Detail</p>
        </Link> 
    )
}