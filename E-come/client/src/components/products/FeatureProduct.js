import { ProductCard } from '..';
import React, { memo, useEffect, useState } from "react";
import '../../styles/FeatureProduct.scss'
import { apiGetProducts } from '../../apis';
const FeatureProduct = () => {
    const [products, setProducts] = useState(null);
    const fetchProducts = async () => {
        const response = await apiGetProducts({ limit: 9, totalRatings: 5 });
        if (response.success) setProducts(response.products)
    }
    useEffect(() => {
        fetchProducts()
    })
    return (
        <div className="featureProduct_container">
            <h3 className="featureProduct_container_title">FEATURE PRODUCT</h3>
            <div className='featureProduct_container_productCard'>
                {products?.map(el => (
                    <ProductCard key={el._id} image={el.thumb} title={el.title} totalRatings={el.totalRatings} price={el.price} />
                ))}
            </div>
            <div className='featureProduct_image'>
                <img src='' alt='' className='featureProduct_image_1' />
                <div className='featureProduct_image_group'>
                    <img src='' alt='' className='featureProduct_image_2' />
                    <img src='' alt='' className='featureProduct_image_3' />
                </div>

                <img src='' alt='' className='featureProduct_image_4' />
            </div>
        </div>
    )
}
export default memo (FeatureProduct);