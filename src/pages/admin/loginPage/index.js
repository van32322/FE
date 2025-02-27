import { memo, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { apiLogin } from "services/UserService";
const LoginAdPage = () => {
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [isShowPassword, setIsShowPassWord] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await apiLogin(username, password);
            if (res && res.token) {
                localStorage.setItem("token", res.token);
                if (res.role && res.role === "admin") {
                    navigate(ROUTERS.ADMIN.ORDERS);
                } else {
                    navigate(ROUTERS.USER.HOME);
                }
            }
        }
        catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
        return;
    }
    return (
        <div className="login">
            <div className="login_background"></div>
            <div className="login_container">
                <h2 className="login_title">Đăng nhập</h2>
                <form className="login_form" onSubmit={handleSubmit}>
                    <div className="login_form-group">
                        <label htmlFor="username" className="login_label">
                            Tên đăng nhập
                        </label>
                        <input type="text" id="username" name="username" value={username} onChange={(event) => setUserName(event.target.value)} required></input>
                    </div>
                    <div className="login_form-group">
                        <label htmlFor="password" className="login_label">
                            Mật khẩu
                        </label>
                        <div className="login_form-group2">
                            <input type={isShowPassword ? "text" : "password"} id="password" name="password" value={password} onChange={(event) => setPassWord(event.target.value)} required></input>
                            <span onClick={() => setIsShowPassWord(!isShowPassword)} className="eye-icon">
                                {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    
                    <button type="submit" className="login_button" >Đăng nhập</button>
                </form>
                <Link to={ROUTERS.ADMIN.REGISTER}>Chuyển sang đăng kí</Link>
            </div>
        </div>
    );
};
export default memo(LoginAdPage);