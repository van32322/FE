import React, { useState } from "react";
import "../styles/Product.scss"
import { formatMoney } from '../utils/helpers'
import label from "../assets/blank.webp"
import { renderStarFromNumber } from '../utils/helpers'
import { SelectOption } from '../components/index'
import icons from '../utils/icons'
const { AiFillEye, IoMenu, BsFillSuitHeartFill } = icons
const Product = ({ productData, isNew }) => {
    const [isShowOption, setIsShowOption] = useState(false)
    return (
        <div className="product_container">
            <div className="product_group"
                onMouseEnter={e => {
                    e.stopPropagation()
                    setIsShowOption(true)
                }}
                onMouseLeave={e => {
                    e.stopPropagation()
                    setIsShowOption(false)
                }}>
                <div className="product_image_group">
                    {isShowOption && (
                        <div className="product_option slide-top">
                            <SelectOption icon={<AiFillEye />} />
                            <SelectOption icon={<IoMenu />} />
                            <SelectOption icon={<BsFillSuitHeartFill />} />
                        </div>
                    )}
                    <img src={productData?.image[0] || ''} alt="" className="product_image"></img>
                    {isNew ? <img src={isNew ? label : label} alt="" className="product_blank_1"></img> : <img src={isNew ? label : label} alt="" className="product_blank_2"></img>}
                    <span className="product_blank_kind">{isNew ? 'New' : 'Trending'}</span>
                </div>

                <div className="product_info">
                    <span className="product_star">{renderStarFromNumber(productData?.totalRatings)?.map((el,index)=>(
                                                <span key={index}>{el}</span>
                                            ))}</span>
                    <span className="product_title">{productData?.title}</span>
                    <span>{`${formatMoney(productData?.price)} VNĐ`}</span>
                </div>
            </div>
        </div>
    )
}
export default Product;