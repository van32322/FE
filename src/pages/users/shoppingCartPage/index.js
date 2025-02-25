import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import { formatter } from "utils/formater";
import Quantity from "components/Quantity";
import "./style.scss"
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
const ShoppingcartPage = () => {
    const navigate =useNavigate();
    return (
        <>
            <Breadcrumb name="Giỏ hàng" />
            <div className="container">
                <div className="table_cart">
                    <table>
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="shopping_cart_item">
                                    <img
                                        src=""
                                        alt="product-pic"
                                    />
                                    <h4>Tên sản phẩm 1</h4>
                                </td>
                                <td>{formatter(2999999)}</td>
                                <td><Quantity quantity="2" hasAddToCart={false} /></td>
                                <td>{formatter(2999999)}</td>
                                <td className="icon_close">
                                    <AiOutlineClose />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="shopping_checkout">
                            <h2>Tổng đơn</h2>
                            <ul>
                                <li>Số lượng:<span>{2}</span></li>
                                <li>Thành tiền:<span>{formatter(2000000)}</span></li>
                            </ul>
                            <button type="button" className="button-submit" onClick={()=> navigate(ROUTERS.USER.CHECKOUT)}>
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(ShoppingcartPage);