import { memo, useEffect, useState } from "react";
import "./style.scss";
import { formatter } from "utils/formater";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const STATUS = {
    ORDERED: {
        key: "ORDERED",
        label: "Đã đặt",
        className: "orders_dropdown-item"
    },
    PREPARING: {
        key: "PREPARING",
        label: "Lên đơn",
        className: "orders_dropdown-item"
    },
    DEVIVERED: {
        key: "DEVIVERED",
        label: "Đã giao hàng",
        className: "orders_dropdown-item"
    },
    CANCELLED: {
        key: "CANCELLED",
        label: "Đã hủy",
        className: "orders_dropdown-item orders_dropdown-item--danger",
    },
}
const OrderPageAdPage = () => {
    const orders = [
        {
            id: 1,
            total: 20000000,
            customerName: "john",
            date: "12/02/2004",
            status: "dang len don",
        },
        {
            id: 2,
            total: 2000000,
            customerName: "john",
            date: "1/1/2004",
            status: "dang len don",
        },
    ];
    const [activedDropdown, setActivedDropdown] = useState(null);
    useEffect(() => {
        const handleClickOutSide = (event) => {
            const isDropDown = event.target.closest("orders_dropdown");
            if (!isDropDown) {
                setActivedDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () => document.removeEventListener("mousedown", handleClickOutSide);
    }, [])
    return (
        <div className="container">
            <div className="orders">
                <h2>Quản lý đơn hàng:</h2>
                <div className="orders_content">
                    <table className="orders_table">
                        <thead>
                            <tr>
                                <th>Mã đơn hàng</th>
                                <th>Tổng đơn</th>
                                <th>Khách hàng</th>
                                <th>Ngày đặt</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <span>{item.id}</span>
                                    </td>
                                    <td>{formatter(item.total)}</td>
                                    <td>{item.customerName}</td>
                                    <td>{new Date(item.date).toLocaleDateString()}</td>
                                    <td>
                                        <div className="orders_dropdown">
                                            <button className={`orders_action-buton`}
                                                onClick={() => setActivedDropdown(item.id)}
                                            >
                                                Đã đặt
                                                <span className="arrow">▿ </span>
                                            </button>
                                            {
                                                activedDropdown === item.id && (
                                                    <div className="orders_dropdown-menu">
                                                        {
                                                            Object.values(STATUS).map((status) => (
                                                                <button key={status.key} className={status.className} 
                                                                onClick={()=>setActivedDropdown(null)}>{status.label}</button>
                                                            ))
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                <div className="orders_footer">
                    <div className="orders_pagination">
                        <div className="orders_page-number">
                            <button className="orders_page-btn"><AiOutlineArrowLeft /></button>
                            <button className="orders_page-btn orders_page-btn--active">1</button>
                            <button className="orders_page-btn">2</button>
                            <button className="orders_page-btn">3</button>
                            <button className="orders_page-btn"><AiOutlineArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(OrderPageAdPage);