import { useMemo } from "react";
import { generateRange } from "../utils/helpers";
import { BiDotsHorizontalRounded } from 'react-icons/bi'

const usePagination = (totalProductCount, currentPage, siblingCount = 1) => {
    const paginationArray = useMemo(() => {
        const pageSize = process.env.REACT_APP_PRODUCT_LIMIT || 10;
        const paginationCount = Math.ceil(totalProductCount / pageSize);
        const totalPaginationItem = siblingCount + 5;

        if (paginationCount <= totalPaginationItem) return generateRange(1, paginationCount);

        const isShowLeft = currentPage - siblingCount > 2;
        const isShowRight = currentPage + siblingCount < paginationCount - 1;

        if (isShowLeft && !isShowRight) {
            const rightStart = paginationCount - 4;
            const rightRange = generateRange(rightStart, paginationCount);
            return [1, <BiDotsHorizontalRounded />, ...rightRange];
        }

        if (!isShowLeft && isShowRight) {
            const leftRange = generateRange(1, 5);
            return [...leftRange, <BiDotsHorizontalRounded />, paginationCount];
        }

        if (isShowLeft && isShowRight) {
            const siblingLeft = Math.max(currentPage - siblingCount, 1);
            const siblingRight = Math.min(currentPage + siblingCount, paginationCount);
            const middleRange = generateRange(siblingLeft, siblingRight);
            return [1, <BiDotsHorizontalRounded />, ...middleRange, <BiDotsHorizontalRounded />, paginationCount];
        }

        return generateRange(1, paginationCount);
    }, [totalProductCount, currentPage, siblingCount]);

    return paginationArray || [];
};

export default usePagination;
