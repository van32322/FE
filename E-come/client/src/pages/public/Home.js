import React from "react";
import { Banner, Sidebar,BestSellers } from "../../components";
import "../../styles/Home.scss"

const Home = () => {
    
    return (
        <div className="home_container">
            <div className="home_container_sidebar">
                <Sidebar />
                <span>Deal daily</span>
            </div>
            <div className="home_container_banner">
                <Banner />
                <BestSellers/>
            </div>
            <div className=""></div>
        </div>
    )
}
export default Home;