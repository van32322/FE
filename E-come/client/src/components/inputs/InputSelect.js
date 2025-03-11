import React, { memo } from "react";
import '../../styles/InputSelect.scss'
const InputSelect =({value,changeValue,options})=>{
    return(
        <select className="form_select_custom" value={value} onChange={e=>changeValue(e.target.value)} >
            <option value=''>Random</option>
            {options?.map(el=>(
                <option key={el.id} value={el.value}>{el.text}</option>
            ))}    
        </select>
    )
}
export default memo( InputSelect);