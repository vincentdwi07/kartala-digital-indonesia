import axios from "axios";

const BASE_URL = process.env.NEXT_API_BASE_URL

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers:{
        'content-type':"application/json"
    }
})

export default axiosInstance