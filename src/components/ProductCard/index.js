import { memo } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { generatePath, Link } from "react-router-dom";
import { formatter } from "utils/formater";
import "./style.scss"
import { ROUTERS } from "utils/router";
import { FaStar } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
const ProductCard = ({ img, name, price }) => {
    return (
        <>
            <div className="featured_item">
                <div className="featured_item_pic"
                    style={{
                        backgroundImage: `url(${img})`
                    }}>
                    <ul className="featured_item_pic_hover">
                        <li>
                            <AiOutlineEye />
                        </li>
                        <li>
                            <AiOutlineShoppingCart />
                        </li>
                    </ul>
                </div>
                <div className="featured_item_text">
                    <h6>
                        <Link to={generatePath(ROUTERS.USER.PRODUCT, { id: 1 })}>{name}</Link>
                    </h6>
                    <h5>
                        {formatter(price)}
                    </h5>
                </div>
                <div className="featured_item_icon1">
                    <div className="rating">
                        <FaStar />4.9
                    </div>
                    <h6>đã bán 400</h6>
                </div>
                <div className="featured_item_icon2">
                    <div className="delivery">
                    <CiDeliveryTruck />4-5 ngày
                    </div>
                    <h6><MdOutlineLocationOn />Hà nội</h6>
                </div>
            </div>
        </>
    )
}
export default memo(ProductCard);