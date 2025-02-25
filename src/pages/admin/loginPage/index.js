import { memo, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { loginApi } from "services/UserService";
const LoginAdPage = () => {
    const handleLogin = async () => {
        let res = await loginApi(username, password);
        return;
    }
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [isShowPassword, setIsShowPassWord] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(ROUTERS.ADMIN.ORDERS);
    }
    return (
        <div className="login">
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
                    <button type="submit" className="login_button" onClick={() => handleLogin}>Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};
export default memo(LoginAdPage);