import React, { useEffect, useState } from "react";
import { Banner, Sidebar } from "../../components";
import "../../styles/Home.scss"
import { apiGetProducts } from "../../apis/products";
const Home = () => {
    const fetchProduct = async () => {
        const [bestSellers, newProducts] = await Promise.all([apiGetProducts({ order: '-sold' }), apiGetProducts({ order: '-createdAt' })])

    }
    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <div className="home_container">
            <div className="home_container_sidebar">
                <Sidebar />
                <span>Deal daily</span>
            </div>
            <div className="home_container_banner">
                <Banner />
                <span>Best seller</span>
            </div>
        </div>
    )
}
export default Home;