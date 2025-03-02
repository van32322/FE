import React from "react";
import "../../styles/Public.scss"
import { useParams } from "react-router-dom";
const DetailProduct = () => {
    const{pid,title}=useParams()
    return (
        <div className="public_container">
           
        </div>
    )
}
export default DetailProduct;