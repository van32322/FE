import React,{useState} from "react";
import "../../styles/Login.scss"
import { Button } from "../../components";
import { useParams } from "react-router-dom";
import { apiResetPassword } from "../../apis/user";
import { toast } from "react-toastify";
const ResetPassword = () => {
    const [password,setPassword]=useState('')
    const token =useParams()
    const handleResetPassword=async()=>{
        const response= await apiResetPassword({password,token})
        if(response.success){
            toast.success(response.mes)
        }else{
            toast.info(response.mes)
        }
    }
    return (
        <div className="login_modal slide-right" >
                            <div className="login_modal_group">
                                <label htmlFor="password">Enter your new password:</label>
                                <input type="text" id="password" className="login_modal_input" placeholder="Type here" value={password} onChange={e => setPassword(e.target.value)}></input>
                                <div className="login_modal_submit">
                                    <Button children='Submit' handleOnClick={handleResetPassword} />
                                </div>
                            </div>
                        </div>
    )
}
export default ResetPassword;