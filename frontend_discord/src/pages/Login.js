import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [cred, setCred] = useState({});

    const onChangeHandler = (e, k) => {
        setCred({
            ...cred,
            [k]: e.target.value,
        });
    };

    const onSubmitHandler = () => {
        console.log(cred);
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
                    <label className='text-input-label wrong-cred'>
                        EMAIL OR PHONE NUMBER
                        <span className='wrong-cred warn-hidden'>
                            {' '}
                            - Login or password is invalid.
                        </span>
                    </label>
                    <input
                        className='text-input-box'
                        type='text'
                        onChange={(e) => onChangeHandler(e, 'email')}
                    />
                    <label className='text-input-label wrong-cred'>
                        PASSWORD
                        <span className='wrong-cred warn-hidden'>
                            {' '}
                            - Login or password is invalid.
                        </span>
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
                        to={'/registor'}
                        className='registration-nav-button-sec router-link'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
