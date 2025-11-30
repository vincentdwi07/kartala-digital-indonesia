import Breadcrumbs from "@/app/Component/Breadcrums"
import UserDetailComponent from "@/app/Component/UserDetailComponent"

interface UserDetailParamsProps{
    params: Promise<{id: string}>
}

export default async function UserDetail({params}: UserDetailParamsProps){
    const resParam = await params
    const idParam = resParam.id

    return(
        <>
            <Breadcrumbs
                userID={idParam}
            />
            <UserDetailComponent
                userID={idParam}
            />
        </>
    )
}