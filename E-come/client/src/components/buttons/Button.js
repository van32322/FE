import React, { memo } from "react";
import "../../styles/Button.scss";

const Button = ({ children, handleOnClick, style, fw }) => {
    return (
        <button
            type="button"
            className={`button-container ${fw ? "full-width" : "fit-width"} ${style || ""}`}
            onClick={() => { handleOnClick && handleOnClick(); }}
        >
            {children}
        </button>
    );
};

export default memo(Button);
