import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../apis/products";
import '../styles/BestSellers.scss';
import { Product } from './';
import Slider from "react-slick";

const tabs = [
    { id: 1, name: 'best sellers' },
    { id: 2, name: 'new arrivals' },
    { id: 3, name: 'tablet' }
];

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Hiển thị 3 sản phẩm cùng lúc
    slidesToScroll: 1
};

const BestSellers = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [bestSellers, setBestSellers] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const responses = await Promise.all([
                    apiGetProducts({ sort: '-sold' }), 
                    apiGetProducts({ order: '-createdAt' })
                ]);

                if (responses[0]?.success) setBestSellers(responses[0].products);
                if (responses[1]?.success) setNewProducts(responses[1].products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Chọn sản phẩm theo tab
    const displayedProducts = activeTab === 1 ? bestSellers : newProducts;

    return (
        <div>
            <div className="bestSellers_container">
                {tabs.map(el => (
                    <span 
                        key={el.id} 
                        className={`bestSellers_title ${activeTab === el.id ? 'bestSellers_title_active' : ''}`} 
                        onClick={() => setActiveTab(el.id)}
                    >
                        {el.name}
                    </span>
                ))}
            </div>

            <div className="bestSellers_content">
                {displayedProducts.length > 0 ? (
                    <Slider {...settings}>
                        {displayedProducts.map(el => (
                            
                                <Product key={el.id} bid={el.id} productData={el} isNew={activeTab===1 ? false:true}/>
                            
                        ))}
                    </Slider>
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
            <div className="bestSellers_image_group">
                <img src="" alt="" className="bestSellers_image"></img>
                <img src="" alt="" className="bestSellers_image"></img>
            </div>
        </div>
    );
};

export default BestSellers;
