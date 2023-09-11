/** @format */

import axios from "axios";
let baseUrl = "http://localhost:5030/api/v1/vas/";

const vasServices = {
	airTime: async (data) => {
		let response = await axios.post(`${baseUrl}airtime`, data);
		return response;
	},
	dataBundle: async (data) => {
		let response = await axios.post(`${baseUrl}data`, data).catch((err) => {
			console.log(err);
		});
		return response;
	},
	electric: async (data) => {
		let response = await axios.post(`${baseUrl}electric`, data).catch((err) => {
			console.log(err);
		});
		return response;
	},
	cabletv: async (data) => {
		let response = await axios.post(`${baseUrl}cabletv`, data).catch((err) => {
			console.log(err);
		});
		return response;
	},
};

export default vasServices;
