import React, { memo } from "react";
import '../../styles/Comment.scss'
import avatar from '../../assets/avatar.png'
import moment from "moment";
import { renderStarFromNumber } from "../../utils/helpers";
const Comment = ({ image = avatar, name = 'Anonymous', updateAt, comment, star }) => {
    return (
        <div className="comment_container" >
            <div style={{ flex: 'none' }}>
                <img src={image} alt="avatar" className="comment_avatar"></img>
            </div>
            <div className="comment_info">
                <div className="comment_time">
                    <h3 style={{ fontWeight: '600' }}>{name}</h3>
                    <span>{moment(updateAt)?.fromNow()}</span>
                </div>
                <div className="comment_content">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontWeight: '600' }}>Vote:</span>
                        <span className="comment_star">{renderStarFromNumber(star)?.map((el, index) => (
                            <span key={index}>{el}</span>
                        ))}</span>
                    </span>
                    <span style={{ display: 'flex', gap: '4px' }}    >
                        <span style={{ fontWeight: '600' }}>Comment:</span>
                        <span className="comment_star">{comment}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default memo (Comment);