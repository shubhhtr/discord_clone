import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SelectDatepicker } from 'react-select-datepicker';

const Register = () => {
    const [dob, setdob] = useState();
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

    useEffect(() => {
        setCred({
            ...cred,
            dob,
        });
    }, [dob]);

    return (
        <div className='login-wrapper'>
            <div className='auth-box'>
                <h1 className='heading'>
                    <span className='heading-primary'>Create an account</span>
                </h1>

                <div className='login-form-wrapper'>
                    <label className='text-input-label wrong-cred'>
                        EMAIL
                        <span className='wrong-cred warn-hidden'>
                            {' '}
                            - Not a well formed email address.
                        </span>
                    </label>
                    <input
                        className='text-input-box'
                        type='text'
                        onChange={(e) => {
                            onChangeHandler(e, 'email');
                        }}
                    />
                    <label className='text-input-label wrong-cred'>
                        USERNAME
                        <span className='wrong-cred warn-hidden'>
                            {' '}
                            - Must be between 2 and 32 in length.
                        </span>
                    </label>
                    <input
                        className='text-input-box'
                        type='text'
                        onChange={(e) => {
                            onChangeHandler(e, 'username');
                        }}
                    />
                    <label className='text-input-label wrong-cred'>
                        PASSWORD
                        <span className='wrong-cred warn-hidden'>
                            {' '}
                            - Password is too weak or common to use.
                        </span>
                    </label>
                    <input
                        className='text-input-box'
                        type='password'
                        onChange={(e) => {
                            onChangeHandler(e, 'password');
                        }}
                    />
                    <label className='text-input-label'>DATE OF BIRTH</label>

                    <SelectDatepicker
                        selectedDate={dob}
                        onDateChange={(val) => {
                            setdob(val);
                        }}
                        hideLabels={true}
                        className='dob-picker'
                    />

                    <Link
                        to={'#'}
                        className='forgot-password router-link'>
                        Forgot your password?
                    </Link>

                    <button
                        className='login-button'
                        onClick={onSubmitHandler}>
                        Continue
                    </button>
                </div>
                <div className='registration-nav-button'>
                    <Link
                        to={'/login'}
                        className='registration-nav-button-sec router-link'>
                        Already have an account?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
