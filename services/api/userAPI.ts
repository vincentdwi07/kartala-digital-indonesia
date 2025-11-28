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
