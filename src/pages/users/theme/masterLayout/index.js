import { memo } from "react";
import Header from "../header";
import Footer from "../../../common/footer";
const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};
export default memo(MasterLayout);