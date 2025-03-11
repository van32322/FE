import React, { memo } from "react";
import '../../styles/SelectOption.scss'
const SelectionOption =({icon})=>{
    return(
        <div className="icon_container">
            {icon}
        </div>
    )
}
export default memo (SelectionOption)