import axios from "axios";
let baseUrl = "";

const vasServices = {
    airTime: async (data) => {
        let response = await axios.post(`${baseUrl}api/topup/`, data);
        return response;
      }
}

export default vasServices;