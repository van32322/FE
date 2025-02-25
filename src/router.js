import { ADMIN_PATH, ROUTERS } from "./utils/router";
import HomePage from "./pages/users/homePage";
import { Routes, Route, useLocation } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import ProductsPage from "pages/users/productsPage";
import ProductDetailPage from "pages/users/ProductDetailPage";
import ShoppingCartPage from "pages/users/shoppingCartPage";
import CheckoutPage from "pages/users/checkoutPage";
import LoginAdPage from "pages/admin/loginPage";
import MasterAdLayout from "pages/admin/theme/masterAdLayout";
import OrderPage from "pages/admin/orderPage";
const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.PRODUCTS,    
            component: <ProductsPage />
        },
        {
            path: ROUTERS.USER.PRODUCT,    
            component: <ProductDetailPage />
        },
        {
            path: ROUTERS.USER.SHOPPING_CART,    
            component: <ShoppingCartPage />
        },
        {
            path: ROUTERS.USER.CHECKOUT,    
            component: <CheckoutPage />
        },
        
    ]
    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}
const renderAdminRouter = () => {
    const adminRouters = [
        {
            path: ROUTERS.ADMIN.LOGIN,
            component: <LoginAdPage />
        },
        {
            path: ROUTERS.ADMIN.ORDERS,    
            component: <OrderPage />
        },
        
    ]
    return (
        <MasterAdLayout>
            <Routes>
                {
                    adminRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterAdLayout>
    )
}
const RouteCustom = () => {
    const location=useLocation();
    const isAdminRouters = location.pathname.startsWith(ADMIN_PATH);
    return isAdminRouters ? renderAdminRouter() : renderUserRouter();
}
export default RouteCustom;