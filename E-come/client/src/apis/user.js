import axios from "../axios";
export const apiRegister = (data) => axios({
    url: '/user/register',
    method: 'post',
    data,
})
export const apiFinalRegister = (token) => axios({
    url: '/user/finaleegister/'+token,
    method: 'put',

})
export const apiLogin = (data) => axios({
    url: '/user/login',
    method: 'post',
    data
})
export const apiForgotPassword=(data)=>axios({
    url:'user/forgotpassword',
    method:'post',
    data
})
export const apiResetPassword=(data)=>axios({
    url:'user/resetpassword',
    method:'put',
    data
})
export const apiGetCurrent=()=>axios({
    url:'user/current',
    method:'get',
})