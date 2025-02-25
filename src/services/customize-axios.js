import axios from "axios";

const instance = axios.create({
    baseURL: "https://reqres.in",
});

// Sử dụng interceptors đúng cách
instance.interceptors.response.use(
    function (response) {
        return response.data ? response.data : { statusCode: response.status };
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
