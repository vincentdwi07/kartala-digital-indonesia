import { useEffect } from "react"

interface UserDetailParamsProps{
    params: Promise<{id: string}>
}

export default async function UserDetail({params}: UserDetailParamsProps){
    const resParam = await params
    const idParam = resParam.id

    useEffect(() => {
        
    })
    return(
        <h1>{idParam}</h1>
    )
}