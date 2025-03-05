import React from "react";
import "../styles/Header.scss"
import logo from "../assets/logo.png"
import icons from "../utils/icons";
import { Link } from "react-router-dom";
import path from "../utils/path";
const Header = () => {
    const { RiPhoneFill, MdEmail, BsHandbagFill, FaUserCircle } = icons
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
                <div className="header_container_items1">
                    <BsHandbagFill color="red" />
                    <span>0 item(s)</span>
                </div>
                <div className="header_container_items2"><FaUserCircle color="red" size={24} />
                <span>Profile</span>
                </div>
            </div>
        </div>
    )
}
export default Header;