import React, { memo } from "react";
import '../../styles/Quantity.scss'
const SelectQuantity =({quantity,handleQuantity,handleChangeQuantity})=>{
    return(
        <div className="">
            <span onClick={()=>handleChangeQuantity('minus')} className="quantity_minus">-</span>
            <input value={quantity} onChange={e=>handleQuantity(e.target.value)} className="quantity_input" type="number"/>
            <span onClick={()=>handleChangeQuantity('plus')} className="quantity_plus">+</span>

        </div>
    )
}
export default memo(SelectQuantity)