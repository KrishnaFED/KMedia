//This File is created by Krishna
import axios from "axios";
import { API_SERVER_ADDRESS } from "../../Constants/serverAddress";

const AxiosInstance = axios.create({
    baseURL: API_SERVER_ADDRESS,
});

AxiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
);


export default AxiosInstance;