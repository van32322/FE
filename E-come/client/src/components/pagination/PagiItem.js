import React, { memo } from "react";
import '../../styles/Pagination.scss'
import clsx from 'clsx'
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const PagiItem = ({ children }) => {
    const navigate = useNavigate();
    const [params] = useSearchParams()
    const { category } = useParams()
    const handlePagination = () => {
        let param = []
        for (let i of params.entries()) param.push(i)
        const queries = {}
        for (let i of param) queries[i[0]] = i[1]
        if (Number(children)) queries.page = children
        navigate({
            pathname: `/${category}`,
            search: createSearchParams(queries).toString()
        })
    }
    return (
        <button type="button" disabled={!Number(children)} onClick={handlePagination()} className={clsx("pagination_items", !Number(children) && 'pagination_items2', Number(children) && 'pagination_items3',+params.get('page')===+children&&'pagination_items4',!+params.get('page')&& +children===1 &&'pagination_items4')} >
            {children}
        </button>
    )
}
export default memo (PagiItem);