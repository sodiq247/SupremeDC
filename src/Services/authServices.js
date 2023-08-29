import axios from "axios";
let baseUrl = "";
const accountServices = {
  login: async function (data) {
    let response = await axios.post(`${baseUrl}login`, data);
    return response;
  },
  signup: async function (data) {
    let response = await axios.post(`${baseUrl}register`, data);
    return response;
  },
  resetPassword: async function (data) {
    let response = await axios.post(`${baseUrl}change-password`, data);
    return response;
  },
  updateProfile: async function (data) {
    let response = await axios.put(`${baseUrl}update-profile`, data);
    return response;
  }

  // validateOTP: async function (otp, user_reference) {
  //   let response = await axios.post(`${baseUrl}verify-otp`, {
  //     user_reference: user_reference,
  //     otp_code: otp,
  //   });
  //   return response;
  // },

  // resendOTP: async function (phone_number, user_reference) {
  //   let response = await axios.post(`${baseUrl}resend-otp`, {
  //     user_reference: user_reference,
  //     phone_number: phone_number,
  //   });
  //   return response;
  // },
};
export default accountServices;
