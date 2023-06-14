import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [cred, setCred] = useState({});
    const [isInvalid, setIsInvalid] = useState(false);

    const navigate = useNavigate();

    const onChangeHandler = (e, k) => {
        setCred({
            ...cred,
            [k]: e.target.value,
        });
    };

    const onSubmitHandler = async () => {
        //console.log(cred);

        try {
            const result = await axios.post(
                'http://localhost:8080/api/auth/login',
                cred
            );
            setIsInvalid(false);
            console.log(result?.data?.userDetails);

            navigate('/dashboard');
        } catch (err) {
            setIsInvalid(true);
            console.log(err);
        }
    };

    return (
        <div className='login-wrapper'>
            <div className='auth-box'>
                <h1 className='heading'>
                    <span className='heading-primary'>Welcome back!</span>
                    <span className='heading-secondary'>
                        We're so excited to see you again!
                    </span>
                </h1>

                <div className='login-form-wrapper'>
                    <label
                        className={
                            isInvalid
                                ? 'text-input-label wrong-cred'
                                : 'text-input-label'
                        }>
                        EMAIL OR PHONE NUMBER
                        {isInvalid && (
                            <span className='wrong-cred warn-hidden'>
                                {' '}
                                - Login or password is invalid.
                            </span>
                        )}
                    </label>
                    <input
                        className='text-input-box'
                        type='text'
                        onChange={(e) => onChangeHandler(e, 'email')}
                    />
                    <label
                        className={
                            isInvalid
                                ? 'text-input-label wrong-cred'
                                : 'text-input-label'
                        }>
                        PASSWORD
                        {isInvalid && (
                            <span className='wrong-cred warn-hidden'>
                                {' '}
                                - Login or password is invalid.
                            </span>
                        )}
                    </label>
                    <input
                        className='text-input-box'
                        type='password'
                        onChange={(e) => onChangeHandler(e, 'password')}
                    />

                    <Link
                        to={'#'}
                        className='forgot-password router-link'>
                        Forgot your password?
                    </Link>

                    <button
                        className='login-button'
                        onClick={onSubmitHandler}>
                        Log In
                    </button>
                </div>
                <div className='registration-nav-button'>
                    <span className='registration-nav-button-pri'>
                        Need an account?
                    </span>
                    <Link
                        to={'/register'}
                        className='registration-nav-button-sec router-link'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
