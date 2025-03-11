import React, { memo } from "react";
import '../../styles/ProductExtraInfoItem.scss'
const ProductExtraInfoItem = ({icon,title,sub}) => {
    return (
        <div className="productExtraInfoItem_container" >
            <span className="productExtraInfoItem_container_icon">{icon}</span>
            <div className="productExtraInfomation_group"> 
                <span className="productExtraInfomation_group_title">{title}</span>
                <span className="productExtraInfomation_group_sub">{sub}</span>
            </div>
        </div>
    )
}
export default memo(ProductExtraInfoItem);