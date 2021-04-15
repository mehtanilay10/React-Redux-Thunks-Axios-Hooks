import axios from "axios";

const apiClient = () => {
	const { REACT_APP_API_URL } = process.env;

	const axiosInstance = axios.create({
		baseURL: REACT_APP_API_URL,
		responseType: "json",
	});

	return axiosInstance;
};

export default apiClient;
