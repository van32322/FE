import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss"
import { formatter } from "utils/formater";
const CheckoutPage = () => {
    return (
        <>
            <Breadcrumb name="Thanh toán" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="checkout_input">
                            <label>
                                Họ và tên:<span className="required">*</span>
                            </label>
                            <input type="text" placeholder="Nhập họ và tên" />
                        </div>
                        <div className="checkout_input">
                            <label>
                                Địa chỉ:<span className="required">*</span>
                            </label>
                            <input type="text" placeholder="Nhập địa chỉ" />
                        </div>
                        <div className="checkout_input_group">
                            <div className="checkout_input">
                                <label>
                                    Số điện thoại:<span className="required">*</span>
                                </label>
                                <input type="text" placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="checkout_input">
                                <label>
                                    Email:<span className="required">*</span>
                                </label>
                                <input type="text" placeholder="Nhập Email" />
                            </div>
                        </div>
                        <div className="checkout_input">
                                <label>
                                    Ghi chú:<span className="required">*</span>
                                </label>
                                <textarea rows={1} placeholder="Nhập ghi chú" />
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="checkout_order">
                            <h3>Đơn hàng</h3>
                            <ul>
                                <li>
                                    <h4>San pham 1</h4>
                                    <b>{formatter(2000000)}</b>
                                </li>
                                <li className="checkout_order_subtitle">
                                    <h3>Tổng đơn</h3>
                                    <b>{formatter(2000000)}</b>
                                </li>
                            </ul>
                            <button type="button" className="button-submit">Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(CheckoutPage);