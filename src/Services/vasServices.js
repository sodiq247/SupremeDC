import axios from "axios";
let baseUrl = "http://localhost:5030/api/v1/";

const vasServices = {
    airTime: async (data) => {
        let response = await axios.post(`${baseUrl}api/topup/`, data);
        return response;
      }
}

export default vasServices;