import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import "./style.scss"
const HeaderAd = ({ children, ...props }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const navItems = [
        {
            path: ROUTERS.ADMIN.ORDERS,
            onclick: () => navigate(ROUTERS.ADMIN.ORDERS),
            label: "Đặt hàng",
            icon: <AiOutlineShoppingCart />
        },
        {
            path: ROUTERS.ADMIN.LOGIN,
            onclick: () => navigate(),
            label: "Đăng xuất",
            icon: <AiOutlineLogout />
        },
    ]
    return (
        <div {...props}>
            <div className="admin_header container" {...props}>
                <nav className="admin_header_nav">
                    {
                        navItems.map(({ path, onClick, label, icon }) => (
                            <div
                                key={path}
                                className={`admin_header_nav-item ${location.pathname.includes(path)
                                    ? "admin_header_nav_item--active" : ""}`}
                                onClick={onClick}>
                                <span className="admin_header_nav-icon">{icon}</span>
                                <span>{label}</span>
                            </div>
                        ))
                    }
                </nav>
            </div>
        </div>
    );
};
export default memo(HeaderAd);