import './Login.scss'
import { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {

    }
    return (
        <div className="login-container">
            <div className='header'>
                Bạn có tài khoản chưa ?
            </div>
            <div className='title col-4 mx-auto'>
                Dân Công Nghệ
            </div>
            <div className='welcome col-4 mx-auto'>
                Ai vậy ?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={"email"} className='form-control' value={email} onChange={(event) => setEmail(event.target.email)} />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={"password"} className='form-control' value={password} onChange={(event) => setPassword(event.target.email)} />
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div><button className='btn-submit' onClick={() => handleLogin()}>Login</button></div>

            </div>
        </div>
    )
}

export default Login;