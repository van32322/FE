import React, { Children, memo, useEffect, useState } from "react";
import '../../styles/SearchItem.scss'
import icons from "../../utils/icons";
import { colors } from '../../utils/contants'
import { apiGetProducts } from "../../apis";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import useDebounce from '../../hooks/useDebounce'
const { AiOutlineDown } = icons
const SearchItem = ({ name, activeClick, changeActiveFilter, type = 'checkbox' }) => {
    const [selected, setSelected] = useState([])
    const { category } = useParams()
    const [bestPrice, setBestPrice] = useState(null)
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const [price, setPrice] = useState({
        from: '',
        to: ''
    })
    const handleSelect = (e) => {

        const alreadyEl = selected.find(el => el === e.target.value)
        if (alreadyEl) setSelected(prev => prev.filter(el => el !== e.target.value))
        else setSelected(prev => [...prev, e.target.value])
        changeActiveFilter(null)
    }
    const fetchBestPriceProduct = async () => {
        const response = await apiGetProducts({ sort: '-price', limit: 1 })
        if (response.success) setBestPrice(response.products[0]?.price)
    }
    useEffect(() => {

        let param = []
        for (let i of params.entries()) param.push(i)
        const queries = {}
        for (let i of param) queries[i[0]] = i[1]
        if (selected.length > 0) {
            queries.color = selected.join(',')
            queries.page = 1
        } else delete queries.color

        navigate({
            pathname: `/${category}`,
            search: createSearchParams({ queries }).toString()
        })
    }, [selected])
    useEffect(() => {
        if (type === 'input') fetchBestPriceProduct()
    }, [type])
    useEffect(() => {
        if (price.from && price.to && price.from > price.to) {
            alert('From price cannot higher to price')
        }
    }, [price])
    const debouncePriceFrom = useDebounce(price.from, 500)
    const debouncePriceTo = useDebounce(price.to, 500)
    useEffect(() => {
        let param = []
        for (let i of params.entries()) param.push(i)
        const queries = {}
        for (let i of param) queries[i[0]] = i[1]
        if (Number(price.from) > 0) queries.from = price.from;
        else delete queries.from
        if (Number(price.to) > 0) queries.to = price.to;
        else delete queries.to
        queries.page = 1
        navigate({
            pathname: `/${category}`,
            search: createSearchParams(queries).toString(),
        });
    }, [debouncePriceFrom, debouncePriceTo]);

    return (
        <div onClick={() => changeActiveFilter(name)} className="searchItem_container" >
            <span className="searchItem_name">{name}</span>
            <AiOutlineDown />
            {activeClick === name && <div className="searchItem_content">
                {type === 'checkbox' && <div className="searchItem_checkbox" onClick={e => e.stopPropagation()}>
                    <div style={{ padding: '16px', alignItems: 'center', display: 'flex', justifyContent: 'space-between', gap: '8px', borderBottom: '1px solid lightgray' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>{`${selected.length} selected`}</span>
                        <span onClick={e => {
                            e.stopPropagation()
                            setSelected([])
                            changeActiveFilter(null)
                        }} className="searchItem_checkbox_info">Reset</span>
                    </div>
                    <div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                        {(colors || []).map((el, index) => (
                            <div key={index} className="searchItem_checkbox_items">
                                <input type="checkbox" className="custom-input" value={el} onClick={handleSelect} id={el} checked={selected.some(selectedItem => selectedItem === el)}></input>
                                <label style={{ textTransform: 'capitalize' }} htmlFor={el}>{el}</label>
                            </div>
                        ))}
                    </div>
                </div>}
                {type === 'input' && <div onClick={e => e.stopPropagation()}>
                    <div style={{ padding: '16px', alignItems: 'center', display: 'flex', justifyContent: 'space-between', gap: '8px', borderBottom: '1px solid lightgray' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>{`The highest price is ${Number(bestPrice).toLocaleString()} VND`}</span>
                        <span onClick={e => { e.stopPropagation(); setPrice({ from: '', to: '' }); changeActiveFilter(null) }} className="searchItem_checkbox_info">Reset</span>
                    </div>
                    <div className="searchItem_input">
                        <div className="searchItem_input_items">
                            <label htmlFor="from">From</label>
                            <input className="searchItem_input_item" type="number" id="from" value={price.from}
                                onChange={e => setPrice(prev => ({ ...prev, from: e.target.value }))} />
                        </div>
                        <div className="searchItem_input_items">
                            <label htmlFor="to">To</label>
                            <input className="searchItem_input_item" type="number" id="to" value={price.to}
                                onChange={e => setPrice(prev => ({ ...prev, to: e.target.value }))} />
                        </div>
                    </div>
                </div>}
            </div>}
        </div>
    )
}
export default memo(SearchItem);