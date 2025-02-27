import { memo, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { apiRegister } from "services/UserService";
const RegisterPage = () => {
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isShowPassword, setIsShowPassWord] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassWord] = useState(false);
    const [error, setError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp!");
            return;
        }
        try {
            let res = await apiRegister(username, password);
            if (res && res.data) {
                alert("Đăng ký thành công!");
                navigate(ROUTERS.ADMIN.LOGIN);
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setErrorMessage("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
            } else {
                setErrorMessage("Đã xảy ra lỗi. Vui lòng thử lại sau.");
            }
        }
        return;
    }
    return (
        <div className="register">
            <div className="register_background"></div>
            <div className="register_container">
                <h2 className="register_title">Đăng ký</h2>
                <form className="register_form" onSubmit={handleSubmit}>
                    <div className="register_form-group">
                        <label htmlFor="username" className="register_label">
                            username
                        </label>
                        <input type="text" id="username" name="username" value={username} onChange={(event) => setUserName(event.target.value)} required></input>
                    </div>
                    <div className="register_form-group">
                        <label htmlFor="password" className="register_label">
                            Mật khẩu
                        </label>
                        <div className="register_form-group2">
                            <input type={isShowPassword ? "text" : "password"} id="password" name="password" value={password} onChange={(event) => setPassWord(event.target.value)} required></input>
                            <span onClick={() => setIsShowPassWord(!isShowPassword)} className="eye-icon">
                                {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <div className="register_form-group">
                        <label htmlFor="confirm_password" className="register_label">
                            Xác nhận mật khẩu
                        </label>
                        <div className="register_form-group2">
                            <input type={isShowConfirmPassword ? "text" : "password"} id="confirm_password" name="confirm_password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
                            <span onClick={() => setIsShowConfirmPassWord(!isShowConfirmPassword)} className="eye-icon">
                                {isShowConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="register_button" >Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};
export default memo(RegisterPage);