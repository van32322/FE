import React, { memo } from "react";
import '../../styles/Modal.scss'
import { showModal } from "../../store/app/appSlice";
import { useDispatch } from "react-redux";
const Modal = ({ children }) => {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(showModal({ isShowModal: false, modalChildren: null }))} className="modal_container" >
            {children}
        </div>
    )
}
export default memo(Modal);