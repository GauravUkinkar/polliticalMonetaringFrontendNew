import axios from "axios"



export const getVillageData = async (page,size , exportdata)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}`)
    } catch (error) {
        
    }
}