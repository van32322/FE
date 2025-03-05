import React, { memo, useEffect } from "react";
import '../styles/TopHeader.scss'
import { Link } from "react-router-dom";
import path from "../utils/path";
import { getCurrent } from "../store/user/asyncAction";
import { useDispatch, useSelector } from 'react-redux'
import icons from "../utils/icons";
import { logout } from "../store/user/userSlice";
const {AiOutlineLogout}=icons
const TopHeader = () => {
    const dispatch = useDispatch()
    const { isLoggedIn, current } = useSelector(state => state.user)
    useEffect(() => {
        if (isLoggedIn) dispatch(getCurrent())
    }, [dispatch, isLoggedIn])
    return (
        <div className="topHeader_container">
            <div className=" topHeader_container_group">
                <span>Just cll Vi everything is not okay</span>
                {isLoggedIn
                    ? <div className="topHeader_container_after_login">
                        <span>{`Welcome,${current?.lastname} ${current?.firstname}`}</span>
                        <span onClick={()=>dispatch(logout())} className="topHeader_container_after_login_icon"> <AiOutlineLogout size={18}/></span>
                       
                    </div>
                    : <Link className="topHeader_container_login" to={`${path.LOGIN}`}>Sign in or Create account</Link>}
            </div>
        </div>
    )
}
export default memo(TopHeader);