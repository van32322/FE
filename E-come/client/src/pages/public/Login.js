import React, { useState, useCallback, useEffect } from "react";
import Limg from "../../assets/loginAndRegisterBackGround.png"
import "../../styles/Login.scss"
import { InputField, Button } from "../../components";
import { apiRegister, apiLogin, apiForgotPassword, apiFinalRegister } from '../../apis/user'
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import path from "../../utils/path";
import { useDispatch } from "react-redux";
import { login } from '../../store/user/userSlice'
import { toast } from "react-toastify";
import { validate } from "../../utils/helpers";
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [payload, setPayload] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        mobile: ''
    });
    const[isVerifiedEmail,setIsVerifiedEmail]=useState(false)
    const [invalidFields, setInvalidFields] = useState([])
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const resetPayload = useCallback( () => {
        setPayload({
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            mobile: ''
        })
    },[])
    const [token,setToken]=useState('')
    const [email, setEmail] = useState('')
    const handleForgotPassword = async () => {
        const response = await apiForgotPassword({ email })
        if (response.success) {
            toast.success(response.mes)
        } else {
            toast.info(response.mes)
        }
    }
    useEffect(() => {
        resetPayload()
    }, [isRegister,resetPayload])
    const handleSubmit = useCallback(async () => {
        const { firstname, lastname, mobile, ...data } = payload
        const invalids = isRegister ? validate(payload,setInvalidFields) : validate(data,setInvalidFields)
        if (invalids === 0) {
            if (isRegister) {
                const response = await apiRegister(payload)
                if (response.success) {
                    setIsVerifiedEmail(true)
                    // Swal.fire('Congratulation', response.mes, 'success').then(() => {
                    //     setIsRegister(false)
                    //     resetPayload()
                    // })
                }
                else {
                    Swal.fire('Oops', response.mes, 'error')
                }
            }
            else {
                const rs = await apiLogin(data)
                if (rs.success) {
                    dispatch(login({ isLoggedIn: true, token: rs.accessToken, userData: rs.userData }))
                    navigate(`${path.HOME}`)
                }
                else {
                    Swal.fire('Oops', rs.mes, 'error')
                }
            }
        }
    }, [payload, isRegister,setInvalidFields])
    const finalRegister = async()=>{
        const response =await apiFinalRegister(token)
        if(response.success){
            Swal.fire('Congratulation', response.mes, 'success').then(() => {
                        setIsRegister(false)
                        resetPayload()
                    })
        }
        else {
            Swal.fire('Oops', response.mes, 'error')
            setIsVerifiedEmail(false)
            setToken('')
        }
    }
    return (
        <div className="login_container">
           {isVerifiedEmail &&  <div className="login_container_modal">
                <div className="login_container_modal_container">
                    <h4 className="login_container_modal_info">We  sent a code to your mail.Please check your mail and enter your code:</h4>
                    <input type="text" value={token} onChange={e=>setToken(e.target.value)} className="login_container_modal_input"></input>
                    <button onClick={finalRegister} type="button" className="login_container_modal_button">
                        Submit
                    </button>
                </div>
            </div>}
            {isForgotPassword &&
                <div className="login_modal slide-right" >
                    <div className="login_modal_group">
                        <label htmlFor="email">Enter your email</label>
                        <input type="text" id="email" className="login_modal_input" placeholder="Exp:email@gmail.com" value={email} onChange={e => setEmail(e.target.value)}></input>
                        <div className="login_modal_submit">
                            <Button name='Submit' handleOnClick={handleForgotPassword} />
                            <Button name='Back' handleOnClick={() => setIsForgotPassword(false)}

                            />
                        </div>
                    </div>
                </div>
            }

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
                                InvalidFields={invalidFields}
                                setInvalidFields={setInvalidFields}
                            />
                            <InputField
                                value={payload.lastname}
                                setValue={setPayload}
                                nameKey='lastname'
                                InvalidFields={invalidFields}
                                setInvalidFields={setInvalidFields}
                            />
                        </div>
                    }
                    <InputField
                        value={payload.email}
                        setValue={setPayload}
                        nameKey='email'
                        InvalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                    />
                    {isRegister &&
                        <InputField
                            value={payload.mobile}
                            setValue={setPayload}
                            nameKey='mobile'
                            InvalidFields={invalidFields}
                            setInvalidFields={setInvalidFields}
                        />}
                    <InputField
                        value={payload.password}
                        setValue={setPayload}
                        nameKey='password'
                        type='password'
                        InvalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                    />
                    <Button name={isRegister ? 'Register' : 'Login'} handleOnClick={handleSubmit} fw />
                    <div className="login_form_link_group">
                        {!isRegister && <span onClick={() => setIsForgotPassword(true)} className="login_form_link">Forgot your account</span>}
                        {!isRegister && <span className="login_form_link" onClick={() => setIsRegister(true)}>Create an account</span>}
                        {isRegister && <span className="login_form_link" style={{ width: '100%', textAlign: 'center' }} onClick={() => setIsRegister(false)}>Go login</span>}
                    </div>
                    <Link className="login_form_link" to={`/${path.HOME}`}>Go home?</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;