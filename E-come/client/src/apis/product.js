import axios from "axios";
export const apiGetProducts = async (params) => {
    try {
        const response = await axios.get("http://localhost:5000/products", { params });
        return { success: true, products: response.data };
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);

        // Kiểm tra loại lỗi
        if (error.response) {
            // ❌ Lỗi từ phía server (ví dụ: 404, 500)
            return { success: false, message: `Lỗi Server: ${error.response.status} - ${error.response.data}` };
        } else if (error.request) {
            // ❌ Lỗi khi không có phản hồi từ server
            return { success: false, message: "Không thể kết nối đến server!" };
        } else {
            // ❌ Lỗi khác (ví dụ: lỗi cú pháp)
            return { success: false, message: "Lỗi không xác định xảy ra!" };
        }
    }
};
export const apiGetProduct = async (pid) => {
    try {
        if (!pid) throw new Error("PID không hợp lệ!");

        // Fake API Response (vì chưa có Backend)
        const fakeData = {
            id: pid,
            name: "Sản phẩm demo",
            price: 100000,
            description: "Đây là một sản phẩm demo vì chưa có Backend.",
        };

        return { success: true, product: fakeData };
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return { success: false, message: error.message || "Không tìm thấy sản phẩm!" };
    }
};

