import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SelectDatepicker } from 'react-select-datepicker';
import axios from 'axios';

import validateForm from '../utils/validateRegistration';

const Register = () => {
    const [dob, setdob] = useState();
    const [cred, setCred] = useState({});
    const [isInvalid, setIsInvalid] = useState({
        email: false,
        username: false,
        password: false,
    });

    const onChangeHandler = (e, k) => {
        setCred({
            ...cred,
            [k]: e.target.value,
        });
    };

    const registerNewUser = async () => {
        try {
            const result = await axios.post(
                'http://localhost:8080/api/auth/signup',
                cred
            );
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };

    const onSubmitHandler = () => {
        validateForm(cred, setIsInvalid);
        registerNewUser();
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
                    <label
                        className={
                            isInvalid.email
                                ? 'text-input-label wrong-cred'
                                : 'text-input-label'
                        }>
                        EMAIL
                        {isInvalid.email && (
                            <span className='wrong-cred warn-hidden'>
                                {' '}
                                - Not a well formed email address.
                            </span>
                        )}
                    </label>
                    <input
                        className='text-input-box'
                        type='text'
                        onChange={(e) => {
                            onChangeHandler(e, 'email');
                        }}
                    />
                    <label
                        className={
                            isInvalid.username
                                ? 'text-input-label wrong-cred'
                                : 'text-input-label'
                        }>
                        USERNAME
                        {isInvalid.username && (
                            <span className='wrong-cred warn-hidden'>
                                {' '}
                                - Must be between 2 and 32 in length.
                            </span>
                        )}
                    </label>
                    <input
                        className='text-input-box'
                        type='text'
                        onChange={(e) => {
                            onChangeHandler(e, 'username');
                        }}
                    />
                    <label
                        className={
                            isInvalid.password
                                ? 'text-input-label wrong-cred'
                                : 'text-input-label'
                        }>
                        PASSWORD
                        {isInvalid.password && (
                            <span className='wrong-cred warn-hidden'>
                                {' '}
                                - Password is too weak or common to use.
                            </span>
                        )}
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

                <div className='tandc'>
                    By registering, you agree to Discord's{' '}
                    <span className='router-link'>Terms and Service</span> and
                    <span className='router-link'> Privacy Policy</span>.
                </div>
            </div>
        </div>
    );
};

export default Register;
