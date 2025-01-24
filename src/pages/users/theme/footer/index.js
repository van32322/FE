import { memo, useState } from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer-about">
                        <h1 className="footer-about-logo">Team 5</h1>
                        <ul>
                            <li>Địa chỉ:642 Điên Biên Phủ</li>
                            <li>Phone:0373234323</li>
                            <li>Email:phanminhvan13@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer-widget">
                        <h6>Cửa hàng</h6>
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
                <div className="col-lg-3">
                    <div className="footer-widget">
                        <h6>Khuyến mãi và ưu đãi</h6>
                        <p>Đăng kí nhận thông tin tại đây</p>
                        <form action='#'>
                            <div>
                                <input type="text" placeholder="Nhập Email"></input>
                                <button type="submit" className="button-submit">Đăng kí</button>
                            </div>
                            <div className="footer-widget-social">
                                <div><AiOutlineFacebook></AiOutlineFacebook></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
};
export default memo(Footer);