import React, { Fragment, memo } from "react";
import '../../styles/AdminSidebar.scss'
import logo from '../../assets/logo.png'
import { adminSidebar } from "../../utils/contants";
import { NavLink } from "react-router-dom";
const AdminSidebar = () => {
    return (
        <div className="adminSidebar_container" >
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'8px',alignItems:'center'}}>
                <img src={logo} alt="logo" className="adminSidebar_logo"></img>
                <small>Admin Workspace</small>
            </div>
            <div>
                {adminSidebar.map(el=>(
                    <Fragment key={el.id}>
                        {el.type === 'SINGLE' && <NavLink to={el.path}>
                            <span>{el.icon}</span>
                            <span>{el.text}</span>
                        </NavLink>}
                        {el.type ==='PARENT' }
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
export default memo(AdminSidebar);