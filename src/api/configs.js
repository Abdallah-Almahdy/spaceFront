import axios from "axios";

const BaseUrl = "";

const axiosInstance = axios.create(
    {
        baseURL:BaseUrl,
        headers:{
            "Content-Type" : "application/json"
        }
    }
)


async function getData(route){
    try {
        const response  = await axiosInstance.get(route)
        return response;
    } catch (error) {
        return error;
    }
}




async function postData(route,payload){
    try {
        const response  = await axiosInstance.post(route,payload)
        return response;
    } catch (error) {
        return error;
    }
}



async function putData(route,payload){
    try {
        const response  = await axiosInstance.put(route,payload)
        return response;
    } catch (error) {
        return error;
    }
}



async function deleteData(route){
    try {
        const response  = await axiosInstance.delete(route)
        return response;
    } catch (error) {
        return error;
    }
}


export {getData,postData,putData,deleteData}