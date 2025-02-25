import { memo, useState } from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";
const Breadcrumb = (props) => {
    return (
        <div className="areadcrumb">
            <div className="breadcrumb_text">
                <div className="breadcrumb_option">
                    <ul>
                        <li className="link">
                            <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
                        </li>
                        <li>{props.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default memo(Breadcrumb);