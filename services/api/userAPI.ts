import { AxiosError } from "axios";
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
        const axiosError = error as AxiosError

        if(axiosError.response && axiosError.response.status === 404){
            return null
        }

        console.error("Error when fetching user by id", error)
        throw new Error("Error when fetching user data")
    }
}