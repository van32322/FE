import React, { useEffect } from "react";
import "../../styles/FinalRegister.scss"
import { useNavigate, useParams } from "react-router-dom";
import path from "../../utils/path";
import Swal from "sweetalert";
const FinalRegister = () => {
    const {status}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if(status==='failed')Swal.fire('Oop!','Đăng ký không thành công','error').then(()=>{
            navigate(`/${path.LOGIN}`)
        })
        if(status==='success')Swal.fire('Congratulation!','Đăng ký thành công','success').then(()=>{
            navigate(`/${path.LOGIN}`)
        })
    },[])
    return (
        
        <div className="finalRegister_container">
            
        </div>
    )
}
export default FinalRegister;