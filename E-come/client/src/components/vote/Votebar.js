import React, { memo, useEffect, useRef } from "react";
import '../../styles/Votebar.scss'
import { AiFillStar } from 'react-icons/ai';

const Votebar = ({ number, ratingCount, ratingTotal }) => {
    const percentRef = useRef()
    useEffect(() => {
        const percent =Math.round(ratingCount*100 / ratingTotal)||0
        percentRef.current.style.cssText = `right: ${100-percent}%`
    }, [ratingCount, ratingTotal])
    return (
        <div className="votebar_container" >
            <div className="votebar">
                <span>{number}</span>
                <AiFillStar color="orange" />
            </div>
            <div className="votebar_percent">
                <div style={{ width: '100%', height: '6px', backgroundColor: '#e5e7eb', position: 'relative' }}>
                    <div ref={percentRef} className="votebar_progress"></div>
                </div>
            </div>
            <div className="votebar_ratingCount">{`${ratingCount || 0} reviewers`}</div>
        </div>
    )
}
export default memo (Votebar);