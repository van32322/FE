import axios from "axios";
const loginApi = (username, password) => {
    return axios.post("/api/login", { username, password });
}
const registerApi = (username, password) => {
    return axios.post("/api/register", { username, password });
};
const getProductById = (productId) => {
    return axios.get(`/api/products/${productId}`);
};
const getAllProducts = () => {
    return axios.get("/api/products");
};
export { loginApi, registerApi, getProductById, getAllProducts  };