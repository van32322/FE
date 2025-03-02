import React,{memo} from "react";
import '../styles/TopHeader.scss'
import { Link } from "react-router-dom";
import path from "../utils/path";
const TopHeader = () => {
    return (
        <div className="topHeader_container">
            <div className=" topHeader_container_group">
                <span>Just cll Vi everything is not okay</span>
                <Link className="topHeader_container_login" to={`${path.LOGIN}`}>Sign in or Create account</Link>
            </div>
        </div>
    )
}
export default memo(TopHeader);