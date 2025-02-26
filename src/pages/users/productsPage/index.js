import { memo, useEffect, useState } from "react";import Breadcrumb from "../theme/breadcrumb";
import "./style.scss"
import { Link } from "react-router-dom";
import { categories } from "../theme/header";
import { ROUTERS } from "utils/router";
import ProductCard from "components/ProductCard";
import { getAllProducts } from "services/UserService";
const ProductsPage = () => {
    const sorts = [
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllProducts();
                setProducts(res.data);
            } catch (error) {
                console.error("Lỗi khi tải danh sách sản phẩm:", error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <>
            <Breadcrumb name="danh sách sản phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="sidebar">
                            <div className="sidebar_item">
                                <h2>Tìm kiếm</h2>
                                <input type="text" />
                            </div>
                            <div className="sidebar_item">
                                <h2>Mức giá</h2>
                                <div className="price-range-wrap">
                                    <div>
                                        <p>Từ:</p>
                                        <input type="number" min={0} />
                                    </div>
                                    <div>
                                        <p>Đến:</p>
                                        <input type="number" min={0} />
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar_item">
                                <h2>Sắp xếp</h2>
                                <div className="tags">
                                    {sorts.map((item, key) => (
                                        <div className={`tag ${key === 0 ? "active" : ""}`} key={key}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="sidebar_item">
                                <h2>Thể loại khác</h2>
                                <ul>
                                    {categories.map((name, key) => (
                                        <li key={key}>
                                            <Link to={ROUTERS.USER.PRODUCTS}>{name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                        {products.length > 0 ? (
                                products.map((product) => (
                                    <div className="col-lg-4" key={product.id}>
                                        <ProductCard
                                            productId={product.id}
                                            name={product.name}
                                            img={product.img}
                                            price={product.price}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>Không có sản phẩm nào.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(ProductsPage);