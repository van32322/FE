import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import path from "../../utils/path";
import { useSelector } from "react-redux";
import { AdminSidebar } from "../../components";
const AdminLayout = () => {
    const { isLoggedIn, current } = useSelector(state => state.user)
    // if (!isLoggedIn || !current || current.role !== 1945) return <Navigate to={`/${path.LOGIN}`} replace={true} />
    return (
        <div style={{display:'flex',width:'100%',backgroundColor: '#0c4a6e',minHeight:'100vh',position:'relative'}}>
            <div style={{width:'327px',flex:'none',position:'fixed',top:'0',bottom:'0'}}>
                <AdminSidebar/>
            </div>
            <div style={{width:'327px'}}></div>
            <div style={{flex:'1 1 auto'}}>
                <Outlet />
            </div>
        </div>
    )
}
export default AdminLayout;