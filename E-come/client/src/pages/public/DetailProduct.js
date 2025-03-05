import React, { useEffect, useState } from "react";
import "../../styles/DetailProduct.scss"
import { useParams } from "react-router-dom";
import { apiGetProduct } from "../../apis/product";
import { Breadcrumb } from "../../components";
import Slider from "react-slick";
const DetailProduct = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const { pid, title, category } = useParams()
    const [product, setProduct] = useState(null)
    const fetchProductData = async () => {
        const response = await apiGetProduct(pid)
        if (response.success) setProduct(response.productData)
    }
    useEffect(() => {
        if (pid) fetchProductData()
    }, [pid])
    return (
        <div className="detailProduct_container">
            <div className="detailProduct_title">
                <div className="detailProduct_title_text">
                    <h3 style={{ marginBottom: '10px' }}>{title}</h3>
                    <Breadcrumb title={title} category={category} />
                </div>
            </div>
            <div className="detailProduct_container_detail">
                <div className="detailProduct_container_detail_image">
                    <div>
                        {/* <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: product?.images
                            },
                            largeImage: {
                                src: product?.images,
                                width: 1200,
                                height: 1800
                            }
                        }} /> */}
                    </div>
                    <img src={product?.images} alt="product" className="detailProduct_images"></img>
                    <div className="detailProduct_slider">
                        {/* <Slider {...settings}>
                            {product?.images?.map(el=>(
                                <img src={el} alt="sub-product" className="detailProduct_subImages"/>
                            ))}
                        </Slider> */}
                    </div>
                </div>
                <div className="detailProduct_container_detail_price">
                    price
                </div>
                <div className="detailProduct_container_detail_info">
                    infomation
                </div>
            </div>
            <div ></div>
        </div>
    )
}
export default DetailProduct;