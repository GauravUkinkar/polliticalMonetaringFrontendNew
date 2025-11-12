import axios from "axios";

// export const getVillageData = async (page,size , exportdata)=>{
//     try {
//         const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}`)
//     } catch (error) {

//     }
// }

export const getAllvillage = async () => {
  try {
    const response = await axios.get(`${
      import.meta.env.VITE_APP_BACKEND_URL
    }voters/villages/all?export=false
`);

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
