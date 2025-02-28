import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation } from "../../components";
import "../../styles/Public.scss"
const Public = () => {
    return (
        <div className="public_container">
            <Header/>
            <Navigation/>
            <div className="public_container_outlet">
                <Outlet />
            </div>
        </div>
    )
}
export default Public;