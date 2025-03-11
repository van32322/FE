import React, { useCallback, useEffect, useState } from "react";
import "../../styles/DetailProduct.scss"
import { useParams } from "react-router-dom";
import { apiGetProduct } from "../../apis/product";
import { Breadcrumb, Button, SelectQuantity, ProductExtraInfoItem,ProductInfomation} from "../../components";
import Slider from "react-slick";
import ReactImageMagnify from 'react-image-magnify';
import { formatMoney, formatPrice, renderStarFromNumber } from '../../utils/helpers'
import { productExtraInfomation } from '../../utils/contants'
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};
const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1)
    const { pid, title, category } = useParams()
    const [product, setProduct] = useState(null)
    const [currentImage,setCurrentImage]=useState('null')
    const [update,setUpdate]=useState(false)
    const fetchProductData = async () => {
        const response = await apiGetProduct(pid)
        if (response.success) {
            setProduct(response.productData)
            setCurrentImage(response.productData?.thumb)
        }
    }
    useEffect(() => {
        if (pid) fetchProductData()
        window.scrollTo(0,0)
    }, [pid])
    useEffect(() => {
        if (pid) fetchProductData()
        
    }, [update])
    const reRender=useCallback(()=>{
        setUpdate(!update)
    },[update])
    const handleQuantity = useCallback((number) => {
        if (!Number(number) || Number(number < 1)) {
            return
        }
        else { setQuantity(number) }

    }, [quantity])
    const handleChangeQuantity = useCallback((flag) => {
        if (flag === 'minus' && quantity === 1) return
        if (flag === 'minus') setQuantity(prev => +prev - 1)
        if (flag === 'plus') setQuantity(prev => +prev + 1)
    }, [quantity])
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
                    <div className="detailProduct_container_reactImageMagnify">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: currentImage,   
                            },
                            largeImage: {
                                src: currentImage,
                                width: 1800,
                                height: 1500
                            }
                        }} />
                    </div>

                    <div className="detailProduct_slider">
                        {/* <Slider {...settings}>
                            {product?.images?.map(el=>(
                                <img src={el} alt="sub-product" className="detailProduct_subImages"/>
                            ))}
                        </Slider> */}
                    </div>
                </div>
                <div className="detailProduct_container_detail_price">
                    <div className="detailProduct_container_detail_price_group">
                        <h2 className="detailProduct_container_detail_price_text">{`${formatMoney(formatPrice(product?.price))} VND`}</h2>
                        <span className="detailProduct_container_quanity">{`In stock: ${product?.quantity}`}</span>
                    </div>
                    <div className="detailProduct_container_detail_price_star">{renderStarFromNumber(product?.totalRatings)?.map((el, index) => (
                        <span key={index}>{el}</span>))}
                        <span className="detailProduct_container_sold">{`(Sold: ${product?.sold} pieces)`}</span>
                    </div>
                    <ul className="detailProduct_container_detail_price_description">
                        {product?.description?.map(el => (<li className="detailProduct_container_detail_price_description_list" key={el}>{el}</li>))}
                    </ul>
                    <div className="detailProduct_container_detail_price_button">
                        <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
                            <span>Quantity</span>
                            <SelectQuantity quantity={quantity} handleQuantity={handleQuantity} handleChangeQuantity={handleChangeQuantity} />
                        </div>
                        <Button fw>Add to cart</Button>
                    </div>
                </div>
                <div className="detailProduct_container_detail_info">
                    {productExtraInfomation.map(el => (
                        <ProductExtraInfoItem key={el.id} title={el.title} icon={el.icon} sub={el.sub} />
                    ))}
                </div>
            </div>
            <div className="detailProduct_container_description"><ProductInfomation reRender={reRender} pid={product?._id} totalRatings={product?.totalRatings} ratings={product?.ratings} nameProduct={product?.title}/></div>
            <div ></div>
        </div>
    )
}
export default DetailProduct;