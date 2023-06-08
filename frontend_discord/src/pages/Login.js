import React from "react";

const Login = () => {
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
					<label className='text-input-label'>
						EMAIL OR PHONE NUMBER
					</label>
					<input
						className='text-input-box'
						type='text'
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
