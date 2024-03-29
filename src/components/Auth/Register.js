import { useState } from "react";
import './Register.scss';
import { useNavigate } from "react-router-dom";
import { postRegister } from '../../services/apiService';
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Language from "../Header/Language";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleRegister = async () => {
        // Validate email
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email format');
            return;
        }

        // Validate password
        if (!password) {
            toast.error('Password is required');
            return;
        }

        // Your registration logic here
        // ...


        //submit apis
        let data = await postRegister(email, password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span> Bạn có tài khoản chưa ?</span>
                <button onClick={() => navigate('/login')}>Login</button>
                <Language />
            </div>
            <div className='title col-4 mx-auto'>
                Dân Công Nghệ &amp; Quan
            </div>
            <div className='welcome col-4 mx-auto'>
                Here We Go
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email (*)</label>
                    <input type={"email"} className='form-control' value={email} onChange={(event) => setEmail(event.target.email)} />
                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
                    <input type={isShowPassword ? "text" : "password"} className='form-control' value={password} onChange={(event) => setPassword(event.target.email)} />
                    {isShowPassword ?
                        <span className="icons-eye" onClick={() => setIsShowPassword(false)}><VscEye /></span> : <span className="icons-eye" onClick={() => setIsShowPassword(true)}><VscEyeClosed /></span>}
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type={"text"}
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >Tạo tài khoản</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate('/') }}>
                        &#60;&#60; Trở về Trang chủ </span>
                </div>

            </div>
        </div >
    )
}

export default Register;