import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Navigation, TopHeader } from "../../components";
import "../../styles/Public.scss"
const Public = () => {
    return (
        
        <div className="public_container">
            <TopHeader/>
            <Header/>
            <Navigation/>
            <div className="public_container_outlet">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}
export default Public;