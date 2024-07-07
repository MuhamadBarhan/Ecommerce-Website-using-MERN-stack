// ForgotPassword.js

import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add logic here to handle forgot password functionality
        // You may send an API request to your server to initiate the password reset process

        // For this example, we'll just display a success message
        setMessage('Password reset link sent to your email.');
    };

    return (
            <div className='formCard'>
            <div className='formContainer'>
        <div className='form'>
                <p className='formHeading'>Forgot Password</p>
                {message && <div>{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="email" id="ip6" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit" className='forgotsubmitBtn'>Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
