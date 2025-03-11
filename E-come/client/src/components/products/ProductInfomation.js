import React, { memo, useCallback, useState } from "react";
import '../../styles/ProductInfomation.scss'
import { productInfoTabs } from '../../utils/contants'
import { Button, Comment, Votebar, VoteOption } from '..'
import { renderStarFromNumber } from "../../utils/helpers";
import { apiRatings } from "../../apis";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from '../../store/app/appSlice';
import Swal from "sweetalert2";
import path from "../../utils/path";
import { useNavigate } from "react-router-dom";
const ProductInfomation = ({ totalRatings, ratings, nameProduct, pid, reRender }) => {
    const [activedTab, setActivedTab] = useState(1)
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.user)
    const navigate = useNavigate()
    const handleSubmitVoteOption = async ({ comment, score }) => {
        if (!comment || !pid || !score) {
            alert('Please vote when click submit')
            return
        }
        await apiRatings({ star: score, comment, pid, updateAt: Date.now() })
        reRender()
        dispatch(showModal({ isShowModal: false, modalChildren: null }))
    }
    const handleVoteNow = () => {
        if (!isLoggedIn) {
            Swal.fire({
                text: 'Login to vote',
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Go login',
                title: 'Oops!',
                showCancelButton: true,
            }).then((rs) => {
                if (rs.isConfirmed) navigate(`/${path.LOGIN}`)
            })
        } else {
            dispatch(showModal({ isShowModal: true, modalChildren: <VoteOption handleSubmitVoteOption={handleSubmitVoteOption} nameProduct={nameProduct} /> }))
        }
    }
    return (
        <div>

            <div className="productInfomation_list">
                {productInfoTabs.map(el => (
                    <span onClick={() => setActivedTab(el.id)}
                        className={`productInfoTabs ${activedTab === el.id ? 'productInfoTabs_active' : 'productInfoTabs_notActive'}`}
                        key={el.id}>{el.name}
                    </span>
                ))}

            </div>
            <div className="productInfomation_info">
                {productInfoTabs.some(el => el.id === activedTab) && productInfoTabs.find(el => el.id === activedTab).content}
            </div>

            <div className="productInfomation_ratings">
                <div style={{ display: 'flex', border: '1px solid lightgray' }}>
                    <div className="productInfomation_ratings_left">
                        <span className="productInfomation_totalratings">{`${totalRatings}/5`}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>{renderStarFromNumber(totalRatings)?.map((el, index) => (
                            <span key={index}>{el}</span>
                        ))}</span>
                        <span className="productInfomation_totalCount">{`${ratings?.length} reviewers and comments`}</span>
                    </div>
                    <div className="productInfomation_ratings_right">
                        {Array.from(Array(5).keys()).reverse().map(el => (
                            <Votebar
                                key={el}
                                number={el + 1}
                                ratingCount={ratings?.filter(i => i.star === el + 1)?.length}
                                ratingTotal={ratings?.length} />
                        ))}
                    </div>
                </div>
                <div className="productInfomation_vote">
                    <span>Do you review this product?</span>
                    <Button handleOnClick={handleVoteNow}>Vote now!</Button>
                </div>
                <div className="productInfomation_comment">
                    {ratings?.map(el => (
                        <Comment key={el._id} star={el.star} updateAt={el.updateAt} comment={el.comment} name={`${el.postedBy?.lastname} ${el.postedBy?.firstname}`} />
                    ))}
                </div>
            </div>

        </div>
    )
}
export default memo(ProductInfomation);