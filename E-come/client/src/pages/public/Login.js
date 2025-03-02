import React, { useState, useCallback } from "react";
import Limg from "../../assets/loginAndRegisterBackGround.png"
import "../../styles/Login.scss"
import { InputField, Button } from "../../components";
import { apiRegister, apiLogin } from '../../apis/user'
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path";
import { useDispatch } from "react-redux";
import {regiser} from '../../store/user/userSlice'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phone: ''
    });
    const [isRegister, setIsRegister] = useState(false)
    const resetPayload = () => {
        setPayload = ({
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            mobile: ''
        })
    }
    const handleSubmit = useCallback(async () => {
        const { firstname, lastname, mobile, ...data } = payload
        if (isRegister) {
            const response = await apiRegister(payload)
            if (response.success) {
                swal.fire('Congratulation', response.mes, 'success').then(() => {
                    setIsRegister(false)
                    resetPayload()
                })
            }
            else {
                swal.fire('Oops', response.mes, 'error')
            }
        }
        else {
            const rs = await apiLogin(data)
            if (rs.success) {
                dispatch(regiser({isLoggedIn:true,token:rs.accessToken,userData:rs.userData}))
                navigate(`${path.HOME}`)
            }
            else {
                swal.fire('Oops', rs.mes, 'error')
            }
        }
    }, [payload, isRegister])
    return (
        <div className="login_container">
            <img className="login_background" src={Limg} alt=""></img>
            <div className="login_form_container">
                <div className="login_form">
                    <h1 className="login_form_title">{isRegister ? 'Register' : 'Login'}</h1>
                    {isRegister &&
                        <div style={{ display: 'flex', alignItems: "center", width: '96%', gap: '50px', marginRight: '20px' }}>
                            <InputField
                                value={payload.firstname}
                                setValue={setPayload}
                                nameKey='firstname'
                            />
                            <InputField
                                value={payload.lastname}
                                setValue={setPayload}
                                nameKey='lastname'
                            />
                        </div>
                    }
                    <InputField
                        value={payload.email}
                        setValue={setPayload}
                        nameKey='email'
                    />
                    {isRegister &&
                        <InputField
                            value={payload.mobile}
                            setValue={setPayload}
                            nameKey='mobile'
                        />}
                    <InputField
                        value={payload.password}
                        setValue={setPayload}
                        nameKey='password'
                        type='password'
                    />
                    <Button name={isRegister ? 'Register' : 'Login'} handleOnClick={handleSubmit} fw />
                    <div className="login_form_link_group">
                        {!isRegister && <span className="login_form_link">Forgot your account</span>}
                        {!isRegister && <span className="login_form_link" onClick={() => setIsRegister(true)}>Create an account</span>}
                        {isRegister && <span className="login_form_link" style={{ width: '100%', textAlign: 'center' }} onClick={() => setIsRegister(false)}>Go login</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;