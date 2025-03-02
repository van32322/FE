import React, { useState,useCallback } from "react";
import Limg from "../../assets/loginAndRegisterBackGround.png"
import "../../styles/Login.scss"
import { InputField,Button } from "../../components";
const Login = () => {
    const [payload, setPayload] = useState({
        email: '',
        password: '',
        name: ''
    });
    const [isRegister,setIsRegister]=useState(false)
    const handleSubmit=useCallback(()=>{

    },[])
    return (
        <div className="login_container">
            <img className="login_background" src={Limg} alt=""></img>
            <div className="login_form_container">
                <div className="login_form">
                    <h1 className="login_form_title">{isRegister?'Register':'Login'}</h1>
                    {isRegister && 
                    <InputField
                        value={payload.name}
                        setValue={setPayload}
                        nameKey='name'
                    />}
                    <InputField
                        value={payload.email}
                        setValue={setPayload}
                        nameKey='email'
                    />
                    <InputField
                        value={payload.password}
                        setValue={setPayload}
                        nameKey='password'
                        type='password'
                    />
                    <Button name={isRegister?'Register':'Login'} handleOnClick={handleSubmit} fw/>
                    <div className="login_form_link_group">
                        {!isRegister && <span className="login_form_link">Forgot your account</span>}
                        {!isRegister && <span className="login_form_link" onClick={()=>setIsRegister(true)}>Create an account</span>}
                        {isRegister && <span className="login_form_link" style={{width:'100%',textAlign:'center'}} onClick={()=>setIsRegister(false)}>Go login</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;