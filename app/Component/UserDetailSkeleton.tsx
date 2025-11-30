// File: UserDetailSkeleton.tsx

import LineSeparator from "./LineSeparator"

export default function UserDetailSkeleton(){
    return(
        <div className="relative">
            <div className="flex flex-col xl:flex-row mt-5 gap-5"> 
                
                <div className="w-full">
                    <div
                        className="w-full aspect-4/1 bg-gray-200 rounded-tl-md rounded-tr-md relative animate-pulse" 
                    >
                        <div
                            className="flex items-center justify-center absolute -bottom-10 left-0 mx-5  
                                        h-[75px] w-[75px] bg-gray-400 border-5 border-white rounded-full
                                        xl:h-[150px] xl:w-[150px] xl:-bottom-20 xl:mx-10"
                        >
                        </div>
                    </div>

                    <div className="pt-15 p-5 bg-gray-100 rounded-bl-md rounded-br-md 
                                    flex justify-between items-start flex-col gap-5 
                                    xl:flex-row xl:pt-30 xl:p-10">
                        <div className="min-h-[50px]"> 
                            <div className="h-8 w-64 bg-gray-300 rounded animate-pulse"></div> 
                            
                            <div className="mt-2 xl:hidden space-y-2">
                                <div className="h-5 w-48 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-32 bg-gray-300 rounded animate-pulse"></div>
                        </div>
                    </div>

                    <div className="mt-5 bg-gray-100 p-4 rounded-md">
                        <div className="h-10 w-full bg-gray-300 rounded mb-4 animate-pulse"></div> 
                        <div className="h-60 w-full bg-gray-200 rounded animate-pulse"></div> 
                    </div>
                </div>

                <div className="w-full xl:w-1/3 bg-gray-100 p-10 rounded-md sticky top-5 min-h-[150px] max-h-[200px] hidden xl:block">
                    <h1 className="font-semibold mb-5">Public Profile</h1>
                    
                    <div className="flex justify-between border-gray-300">
                        <p className="text-gray-400">Email</p>
                        <div className="h-5 w-2/3 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                    <LineSeparator/>
                    <div className="flex justify-between border-gray-300 mt-3">
                        <p className="text-gray-400">City</p>
                        <div className="h-5 w-1/3 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}