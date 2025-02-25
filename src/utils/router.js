export const ADMIN_PATH="/quan-tri"
export const ROUTERS = {
    USER: {
        HOME: "/",
        PROFILE: "thong-tin-ca-nhan",
        PRODUCTS: "/san-pham",
        PRODUCT: "/san-pham/chi-tiet/:id",
        SHOPPING_CART:"/gio-hang",
        CHECKOUT:"/gio-hang/thanh-toan"
    },
    ADMIN:{
        LOGIN:`${ADMIN_PATH}/dang-nhap`,
        ORDERS:`${ADMIN_PATH}/dat-hang`,
        LOGOUT:`${ADMIN_PATH}/dang-xuat`,
    }
}