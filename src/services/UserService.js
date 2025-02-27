import axios from "axios";

export const apiLogin = (username, password) =>
    axios({
        url: "/api/login",
        method: "post",
        data: { username, password },
    });

export const apiRegister = (username, password) =>
    axios({
        url: "/api/register",
        method: "post",
        data: { username, password },
    });

export const apiGetProductById = (productId) =>
    axios({
        url: `/api/products/${productId}`,
        method: "get",
    });

export const apiGetAllProducts = () =>
    axios({
        url: "/api/products",
        method: "get",
    });
