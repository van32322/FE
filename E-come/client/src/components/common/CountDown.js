import React, { memo } from "react";
import '../../styles/Countdown.scss'
const Countdown = ({ unit, number }) => {
    return (
        <div className="countdown_container">
            <span className="countdown_number">{number}</span>
            <span className="countdown_unit">{unit}</span>
        </div>
    )
}
export default memo(Countdown);