import { memo } from "react";
import "./style.scss"
import { Link } from "react-router-dom";
const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-md-12 col-sm-12">
                    <div className="footer-about">
                        <div className="footer-logo">
                            <h1 className="footer-about-logo">GEAR SPORT</h1>
                            <h2 className="footer-about-store">Cửa hàng</h2>
                        </div>

                        <div className="footer-about-info">
                            <ul>
                                <li>Địa chỉ:275 nguyễn văn Linh</li>
                                <li>Phone:077-421-231</li>
                                <li>Email:phanminhvan13@gmail.com</li>
                            </ul>
                            <div className="footer-about-info2">
                                <ul>
                                    <li>
                                        <Link to="">Liên hệ</Link>
                                    </li>
                                    <li>
                                        <Link to="">Thông tin về chúng tôi</Link>
                                    </li>
                                    <li>
                                        <Link to="">Sản phẩm kinh doanh</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="">Thông tin tài khoản</Link>
                                    </li>
                                    <li>
                                        <Link to="">Giỏ hàng</Link>
                                    </li>
                                    <li>
                                        <Link to="">Danh sách ưa thích</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
};
export default memo(Footer);