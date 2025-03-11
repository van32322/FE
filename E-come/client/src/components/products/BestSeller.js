import React, { memo, useEffect, useState } from "react";
import { apiGetProducts } from "../../apis/product";
import '../../styles/BestSellers.scss';
import { CustomSlider } from '..';
import { getNewProducts } from '../../store/products/asynsAction';
import { useDispatch, useSelector } from "react-redux";
const tabs = [
    { id: 1, name: 'best sellers' },
    { id: 2, name: 'new arrivals' },
    { id: 3, name: 'tablet' }
];
const BestSellers = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [bestSellers, setBestSellers] = useState([]);
    const [products, setProducts] = useState(null)
    const dispatch = useDispatch();
    const newProducts = useSelector(state => state.products);
    const fetchProducts = async () => {
        try {
            const response = await apiGetProducts({ sort: '-sold' })

            if (response.success) { setBestSellers(response.products); setProducts(response.products) }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchProducts();
        dispatch(getNewProducts)
    }, []);
    useEffect(() => {
        if (activeTab === 1) setProducts(bestSellers)
        if (activeTab === 2) setProducts(newProducts)

    }, [activeTab])
    // Chọn sản phẩm theo tab

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
                <CustomSlider products={products} activeTab={activeTab} />
            </div>
            <div className="bestSellers_image_group">
                <img src="" alt="" className="bestSellers_image"></img>
                <img src="" alt="" className="bestSellers_image"></img>
            </div>
        </div>
    );
};

export default memo (BestSellers);
