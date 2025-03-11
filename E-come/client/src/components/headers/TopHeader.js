import React, { memo, useEffect } from "react";
import '../../styles/TopHeader.scss'
import { Link, useNavigate } from "react-router-dom";
import path from "../../utils/path";
import { getCurrent } from "../../store/user/asyncAction";
import { useDispatch, useSelector } from 'react-redux'
import icons from "../../utils/icons";
import { logout, clearMessage } from "../../store/user/userSlice";
import Swal from "sweetalert2";
const { AiOutlineLogout } = icons
const TopHeader = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn, current, mes } = useSelector(state => state.user)
    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            if (isLoggedIn) dispatch(getCurrent())
        }, 300)
        return () => {
            clearTimeout(setTimeoutId)
        }
    }, [dispatch, isLoggedIn])
    useEffect(() => {
        if (mes) Swal.fire('Oops!', mes, 'info').then(() => {
            dispatch(clearMessage())
            navigate(`${path.LOGIN}`)
        })
    }, [mes])
    return (
        <div className="topHeader_container">
            <div className=" topHeader_container_group">
                <span>Just cll Vi everything is not okay</span>
                {isLoggedIn && current
                    ? <div className="topHeader_container_after_login">
                        <span>{`Welcome,${current?.lastname} ${current?.firstname}`}</span>
                        <span onClick={() => dispatch(logout())} className="topHeader_container_after_login_icon"> <AiOutlineLogout size={18} /></span>

                    </div>
                    : <Link className="topHeader_container_login" to={`${path.LOGIN}`}>Sign in or Create account</Link>}
            </div>
        </div>
    )
}
export default memo(TopHeader);