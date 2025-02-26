import { memo } from "react";
import Footer from "../../../common/footer";
import { useLocation } from "react-router-dom";
import { ROUTERS } from "utils/router";
import HeaderAd from "../header/index";
const MasterAdLayout = ({ children, ...props }) => {
    const location=useLocation();
    const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);
    const isRegisterPage = location.pathname.startsWith(ROUTERS.ADMIN.REGISTER);
    return (
        <div {...props}>    
            {!isLoginPage && <HeaderAd/> && !isRegisterPage}
            {children}
            {!isLoginPage && <Footer /> && !isRegisterPage}
        </div>
    );
};
export default memo(MasterAdLayout);