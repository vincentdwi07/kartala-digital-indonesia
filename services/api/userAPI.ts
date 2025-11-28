import axiosInstance from "../axiosInstance";

export async function FetchAllUser(){
    try {
        const reponse = await axiosInstance.get("/users")
        return reponse
    } catch (error) {
        console.error("Error when fetching user data", error)
        throw new Error("Error when fetching user data")
    }
}

export async function FetchUserByID(id: string){
    try{
        const response = await axiosInstance.get(`/users/${id}`)
        return response
    }catch(error){
        console.error("Error when fetching user by id", error)
        throw new Error("Error when fetching user data")
    }
}