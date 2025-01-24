import { memo, useState } from "react";
import "./style.scss"
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsMailbox } from "react-icons/bs";
import { formatter } from "utils/formater";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ROUTERS } from "utils/router";
const Header = () => {
    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: "",
                },
                {
                    name: "Cá",
                    path: "",
                },
                {
                    name: "rau",
                    path: "",
                }
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ])
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header-top-left">
                            <ul>
                                <li>
                                    <BsMailbox />
                                    hello@gmail.com
                                </li>
                                <li>
                                    Mien phi ship don tu {formatter(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header-top-right">
                            <ul>
                                <li><Link to={""}><BsFacebook /></Link>

                                </li>
                                <li><Link to={""}><BsFacebook /></Link>

                                </li>
                                <li><Link to={""}><BsFacebook /></Link>

                                </li>
                                <li><Link to={""}><BsFacebook /></Link>

                                </li>
                                <li><Link to={""}><BsFacebook /></Link>
                                    <span>Đăng nhập</span>

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className=" col-xl-3">
                        <div className="header-logo">
                            <h1>Team 5</h1>
                        </div>
                    </div>
                    <nav className=" col-xl-6">
                        <div className="header-menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {menu.child && (
                                                <ul className="header-menu-drop">
                                                    {
                                                        menu.child.map((childItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            )}
                                        </li>
                                    ))
                                }

                                {/* <li>

                                    <ul>
                                        <li>Thịt</li>
                                        <li>Thịt</li>
                                        <li>Thịt</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
                    <div className=" col-xl-3">
                        <div className="header-cart">
                            <div className="header-cart-price">
                                <span>{formatter(100000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}><AiOutlineShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(Header);