import React, { memo } from "react";
import "../styles/Button.scss";

const Button = ({ name, handleOnClick, style, iconsBefore, iconAfter, fw }) => {
    return (
        <button
            type="button"
            className={`button-container ${fw ? "full-width" : "fit-width"} ${style || ""}`}
            onClick={() => { handleOnClick && handleOnClick(); }}
        >
            {iconsBefore}
            <span>{name}</span>
            {iconAfter}
        </button>
    );
};

export default memo(Button);
