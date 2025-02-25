import { memo, useEffect, useState } from "react";
import "./style.scss"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsMailbox } from "react-icons/bs";
import { formatter } from "utils/formater";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { ROUTERS } from "utils/router";
import SearchBar from "components/Searchbar/searchBar";
export const categories = [
    "Bóng đá",
    "Bóng rổ",
    "Bóng chuyền",
    "Cầu lông",
    "Quần vợt"
]
const Header = () => {
    const navigate= useNavigate();
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname.length <= 1);
    const [isShowCategories, setShowCategories] = useState(isHome);
    const [menus] = useState([
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

    useEffect(() => {
        const isHome = location.pathname.length <= 1;
        setIsHome(isHome);
        setShowCategories(isHome);
    }, [location]);
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    <BsMailbox />
                                    hello@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <SearchBar></SearchBar>
                            <span onClick={()=>navigate(ROUTERS.ADMIN.LOGIN)}>Đăng nhập</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className=" col-xl-3">
                        <div className="header_logo">
                            <h1>GEAR SPORT</h1>
                        </div>
                    </div>
                    <nav className=" col-xl-6">
                        <div className="header_menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {menu.child && (
                                                <ul className="header_menu_drop">
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
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formatter(100000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={ROUTERS.USER.SHOPPING_CART}><AiOutlineShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero_category_container">
                    <div className="col-lg-3 hero_category">
                        <div className="hero_category_all"
                            onClick={() => setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu />
                            Danh mục thể thao</div>

                        <ul className={isShowCategories ? "" : "hidden"}>
                            {
                                categories.map((category, key) => (
                                    <li key={key}>
                                        <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                                    </li>
                                ))}
                        </ul>

                    </div>
                    {isHome && (
                        <div className="col-lg-9 hero_search_container">
                            <div className="hero_item">
                                <div className="hero_text">
                                    <span>Trai cay tuoi</span>
                                    <h2>
                                        Rau qua<br />
                                        sach 100%
                                    </h2>
                                    <p>mienphi giao hang tan noi</p>
                                    <Link to="" className="primary-btn">
                                        Mua ngay
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};
export default memo(Header);