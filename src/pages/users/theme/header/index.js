import { memo } from "react";
import "./style.scss"
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsMailbox } from "react-icons/bs";
import { formatter } from "utils/formater";
const Header = () => {
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
                    <div className=" col-xl-3">LOGO</div>
                    <div className=" col-xl-6">MENU</div>
                    <div className=" col-xl-3">PHONE</div>
                </div>
            </div>
        </>
    );
};
export default memo(Header);