import React, { memo } from "react";
import '../../styles/ProductCard.scss'
import { formatMoney, renderStarFromNumber } from "../../utils/helpers";
const ProductCard = ({ price, totalRatings, title, image }) => {
    return (
        <div className="productCard_container">
            <div className="productCard_group">
                <img src={image} alt='products' className="productCard_image"></img>
                <div>
                    <div className="productCard_info">
                        <span className="productCard_title">{title.toLowerCase()}</span>
                        <span className="productCard_star">{renderStarFromNumber(totalRatings, 14)?.map((el, index) => (
                            <span key={index}>{el}</span>
                        ))}</span>
                        <span>{`${formatMoney(price)} VNĐ`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo (ProductCard)