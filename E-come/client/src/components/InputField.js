import React from "react";
import '../styles/InputField.scss'
const InputField =({value,setValue,nameKey,type,invalidFields,setInvalidFields})=>{
    return(
        <div className="inputField_container" >
            {value.trim()!=='' && <label className="inputField_label animate-slide-top-sm" htmlFor={nameKey}>{nameKey?.slice(0,1).toUpperCase() + nameKey?.slice(1)}</label>}
            <input type={type || 'text'} 
            className="inputField_input" 
            placeholder={nameKey?.slice(0,1).toUpperCase() + nameKey?.slice(1)}
            value={value} 
            onChange={e=>setValue(prev=>({...prev,[nameKey]:e.target.value}))}
            
            ></input>
        </div>
    )
}
export default InputField;