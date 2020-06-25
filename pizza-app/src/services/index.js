import axios from 'axios';

export const getJson = async (url) => {
	try {
		const response = await axios.get(url);
		return JSON.parse(response.data);
	} catch (e) {
		return new Error(e);
	}
};

export const postJson = async (url, payload) => {
	try {
		const response = await axios.post(url, payload);
		return response.data;
	} catch (e) {
		return new Error(e);
	}
};
