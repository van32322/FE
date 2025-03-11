import React, { memo } from "react";
import '../../styles/Banner.scss'
import Slider from "react-slick";
import { Product } from '..'
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Hiển thị 3 sản phẩm cùng lúc
    slidesToScroll: 1
};
const CustomSlider = ({ products, activeTab, normal }) => {
    return (
        <>
            {products > 0 ? (
                <Slider {...settings}>
                    {products.map((el, index) => (
                        <Product key={index} bid={el.id} productData={el} isNew={activeTab === 1 ? false : true} normal={normal} />

                    ))}
                </Slider>
            ) : (
                <p>Loading products...</p>
            )}
        </>
    )
}
export default memo(CustomSlider);