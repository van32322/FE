import { memo, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { generatePath, Link } from "react-router-dom";
import { formatter } from "utils/formater";
import "./style.scss"
import { ROUTERS } from "utils/router";
import { FaStar } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { getProductById } from "services/UserService";
const ProductCard = ({ productId }) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductById(productId);
                setProduct(res.data);
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) return <p>Loading...</p>;
    return (
        <>
            <div className="featured_item">
                <div className="featured_item_pic"
                    style={{
                        backgroundImage: `url(${product.img})`
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
                        <Link to={generatePath(ROUTERS.USER.PRODUCT, { id: product.id })}>{product.name}</Link>
                    </h6>
                    <h5>
                        {formatter(product.price)}
                    </h5>
                </div>
                <div className="featured_item_icon1">
                    <div className="rating">
                        <FaStar />{product.rating || 0}
                    </div>
                    <h6>{product.sold || 0}</h6>
                </div>
                <div className="featured_item_icon2">
                    <div className="delivery">
                        <CiDeliveryTruck />{product.deliveryTime || "N/A"}
                    </div>
                    <h6><MdOutlineLocationOn />{product.location || "Không rõ"}</h6>
                </div>
            </div>
        </>
    )
}
export default memo(ProductCard);