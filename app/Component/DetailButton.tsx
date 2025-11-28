import { FaEye } from "react-icons/fa";

export default function DetailButton(){
    return(
        <div className="py-1 px-3 shadow-sm shadow-gray-100 rounded-md flex gap-2 border border-gray-300 items-center justify-center text-gray-600 hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300">
            <FaEye/>
            <p>Detail</p>
        </div> 
    )
}