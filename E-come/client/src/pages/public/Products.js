import React, { useEffect, useState, useCallback } from "react";
import "../../styles/ProductPublic.scss"
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Breadcrumb, InputSelect, Product, SearchItem,Pagination } from "../../components";
import { apiGetProducts } from "../../apis";
import Masonry from 'react-masonry-css';
import { sorts } from "../../utils/contants";
const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null)
    const [activeClick, setActiveClick] = useState(null)
    const [params] = useSearchParams()
    const [sort, setSort] = useState('')
    const fetchProductsByCategory = async (queries) => {
        const response = await apiGetProducts(queries)
        if (response.success) setProducts(response.products)
    }
    const { category } = useParams()
    useEffect(() => {
        let param = []
        for (let i of params.entries()) param.push(i)
        const queries = {}
        let priceQuery = {}
        for (let i of param) queries[i[0]] = i[1]

        if (queries.to && queries.from) {
            priceQuery = {
                $and: [
                    { price: { gte: queries.from } },
                    { price: { lte: queries.to } }
                ]
            }
            delete queries.price
        }
        else{
            if (queries.from) {
                queries.price = { gte: queries.from }
            }
            if (queries.to) {
                queries.price = { lte: queries.to }
            }
        }
        
        delete queries.to
        delete queries.from

        const q = { ...priceQuery, ...queries }
        fetchProductsByCategory(q)
        window.scrollTo(0,0)
    }, [params,category])
    const changeActiveFilter = useCallback((name) => {
        if (activeClick === name) setActiveClick(null)
        else setActiveClick(name)
    }, [activeClick])
    const changeValue = useCallback((value) => {
        setSort(value);
    }, [sort])
    useEffect(() => {
        if(sort){
            navigate({
                pathname: `/${category}`,
                search: createSearchParams({ sort }).toString()
            })  
        }
    }, [sort])
    return (
        <div className="productPublic_container">
            <div className="detailProduct_title">
                <div className="detailProduct_title_text">
                    <h3 style={{ marginBottom: '10px' }}>{category}</h3>
                    <Breadcrumb category={category} />
                </div>

            </div>
            <div className="productPublic_info">
                <div className="productPublic_filter">
                    <span style={{ fontWeight: '500', fontSize: '20px' }}>Filter By</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <SearchItem name='price' activeClick={activeClick} changeActiveFilter={changeActiveFilter} type="input" />
                        <SearchItem name='color' activeClick={activeClick} changeActiveFilter={changeActiveFilter} type="checkbox" />
                    </div>
                </div>
                <div className="productPublic_sort">
                    <span style={{ fontWeight: '500', fontSize: '20px' }}>Sort By</span>
                    <div style={{ width: '100%' }}>
                        <InputSelect changeValue={changeValue} value={sort} options={sorts} />
                    </div>
                </div>
            </div>
            <div className="productPublic_products">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid masonry"
                    columnClassName="my-masonry-grid_column"
                >
                    {products?.products?.map(el => (
                        <Product key={el._id} bid={el.id} productData={el} normal={true} />
                    ))}
                </Masonry>
            </div>
            
            <div className="productPublic_pagination">
                <Pagination totalCount={products?.counts} />
            </div>
            <div></div>
        </div>
    )
}
export default Products;