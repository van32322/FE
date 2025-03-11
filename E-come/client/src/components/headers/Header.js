import React, { Fragment, memo } from "react";
import "../../styles/Header.scss"
import logo from "../../assets/logo.png"
import icons from "../../utils/icons";
import { Link } from "react-router-dom";
import path from "../../utils/path";
import { useSelector } from "react-redux";
const Header = () => {
    const { RiPhoneFill, MdEmail, BsHandbagFill, FaUserCircle } = icons
    const { current } = useSelector(state => state.user)
    return (
        <div className="header_container">
            <Link to={`/${path.HOME}`}>
                <img src={logo} alt="logo" className="header_container_logo"></img>
            </Link>
            <div className="header_container_info">
                <div className="header_container_info_group">
                    <span className="header_container_phone">
                        <RiPhoneFill color="red" />
                        <span className="header_container_number">(+1800) 000 8808</span>
                    </span>
                    <span>Mon-Sat 9:00AM - 8:00PM</span>
                </div>
                <div className="header_container_info_group">
                    <span className="header_container_phone">
                        <MdEmail color="red" />
                        <span className="header_container_number">phaminhvan12@gmail.com</span>
                    </span>
                    <span>online support 24/7</span>
                </div>
                {current && <Fragment>
                    <div className="header_container_items1">
                        <BsHandbagFill color="red" />
                        <span>0 item(s)</span>
                    </div>
                    <Link to={+current?.role === 1945 ? `/${path.ADMIN}/${path.DASHBOARD}` : `/${path.MEMBER}/${path.PERSONAL}`} className="header_container_items2"><FaUserCircle color="red" size={24} />
                        <span>Profile</span>
                    </Link>
                </Fragment>}
            </div>
        </div>
    )
}
export default memo( Header);