import Breadcrumbs from "@/app/Component/Breadcrums"

interface UserDetailParamsProps{
    params: Promise<{id: string}>
}

export default async function UserDetail({params}: UserDetailParamsProps){
    const resParam = await params
    const idParam = resParam.id

    return(
        <Breadcrumbs
            userID={idParam}
        />
    )
}