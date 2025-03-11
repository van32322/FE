import React, { memo } from "react";
import usePagination from "../../hooks/usePagination";
import '../../styles/Pagination.scss'
import PagiItem from "./PagiItem";
import { useSearchParams } from "react-router-dom";
const Pagination = (totalCount) => {

    const [params] = useSearchParams()
    const pagination = usePagination(totalCount, 2)
    const range = () => {
        const currentPage = +params.get('page')
        const pageSize = +process.env.REACT_APP_PRODUCT_LIMIT || 10
        const start = ((currentPage - 1) * pageSize) + 1
        const end = Math.min(currentPage * pageSize, totalCount)
        return `${start} - ${end}`
    }
    return (
        <div style={{ width: '1220px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {!+params.get('page') && <span>{`Show products 1-${+process.env.REACT_APP_PRODUCT_LIMIT || 10} of ${totalCount} `}</span>}
            {+params.get('page') && <span>{`Show products ${range()}  of ${totalCount} `}</span>}
            <div className="pagination_container" >
                {pagination?.map(el => (
                    <PagiItem key={el}>
                        {el}
                    </PagiItem>
                ))}
            </div>
        </div>
    )
}
export default memo( Pagination);