import axios from "axios";
const instance = axios.create({
    baseURL: 'https://reqres.in'
});
instance.interceptors.response.use(function (respond) {
    return respond.data ? respond.data : { statusCode: respond.status };
}, function (error) {
    // console.log(">>>check error: ",error.name)
    // console.log(">>>check error: ",error.respond   )
    return Promise.reject(error)
});
export default instance;