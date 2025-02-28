import React from "react";
import '../styles/Banner.scss'
import banner_img from '../assets/banner_img.png'
const Banner =()=>{
    return(
        <div className="banner_container">
            <img className="banner_container_image" src={banner_img} alt="banner_image"></img>
        </div>
    )
}
export default Banner;