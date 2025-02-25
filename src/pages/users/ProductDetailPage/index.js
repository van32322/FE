import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss"
import bannerImg1 from "../../../assets/users/images/hero/banner.png";
import bannerImg2 from "../../../assets/users/images/hero/banner.png";
import bannerImg3 from "../../../assets/users/images/hero/banner.png";
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { formatter } from "utils/formater";
import Quantity from "components/Quantity";
const ProductDetailPage = () => {
    const imgs = [
        bannerImg1, bannerImg2, bannerImg3
    ]
    return (
        <>
            <Breadcrumb name="Chi tiết sản phẩm" />
            <div className="container">
                <div className="row product_detail_head">
                    <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col xs-12 product_detail_pic">
                        <img src={bannerImg3} alt="product-pic"  ></img>
                        <div className="main">
                            {
                                imgs.map((item, key) => (
                                    <img src={item} alt="product-pic" key={key} ></img>
                                ))
                            }
                        </div>

                    </div>
                    <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col xs-12 product_detail_text">
                        <h2>Quan ao dep</h2>
                        <div className="seen-icon">
                            <AiOutlineEye />
                            {`10 (luot da xem)`}
                        </div>
                        <h3>
                            {formatter(2000000)}
                        </h3>
                        <p>
                            Xây dựng website bán hàng với ReactJS từ a đến z.
                            Thiết kế responsive sử dụng đa thiết bị.
                        </p>
                        <Quantity/>
                        <ul>
                            <li>
                                <b>Tình trạng:</b> <span>Còn hàng</span>
                            </li>
                            <li>
                                <b>Số lượng:</b> <span>20</span>
                            </li>
                            <li>
                                <b>Chia sẻ:</b>{" "}
                                <span>
                                    <AiOutlineFacebook />
                                    <AiOutlineLinkedin />
                                    <AiOutlineCopy />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product_detail_tab">
                    <h4>Thông tin chi tiết</h4>
                    <div>
                        Bóng rổ 3×3 Molten B33T5000 sử dụng chất liệu da PU cao cấp cho độ nảy chuẩn, đường bóng chính xác. Sản phẩm đạt chứng nhận FIBA APPROVED!
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(ProductDetailPage);