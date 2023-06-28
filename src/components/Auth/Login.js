import './Login.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner10 } from "react-icons/im";


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleLogin = async () => {
        //validate

        // debugger
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email');
            return;
        }
        if (!password) {
            toast.error('Invalid password');
            return;
        }
        setIsLoading(true);
        //submit api
        let data = await postLogin(email, password);
        // console.log(">>> check res:", res)
        if (data && data.EC === 0) {
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
            setIsLoading(false);
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span> Bạn có tài khoản chưa ?</span>
                <button onClick={() => navigate('register')}>Signup</button>
            </div>
            <div className='title col-4 mx-auto'>
                Dân Công Nghệ &amp; Quan
            </div>
            <div className='welcome col-4 mx-auto'>
                Ai vậy ?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={"email"} className='form-control' value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={"password"} className='form-control' value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div><button className='btn-submit' onClick={() => handleLogin()} disabled={isLoading}>{isLoading === true && <ImSpinner10 className='loader-icon' />}  <span>Login</span></button></div>
                <div>
                    <div className='text-center'>
                        <span className="back" onClick={() => { navigate('/') }}> &#60;&#60; Go To Homepage</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;