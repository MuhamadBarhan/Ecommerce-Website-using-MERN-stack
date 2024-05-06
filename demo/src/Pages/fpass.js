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
        <div style={{ margin: '7rem auto' , display:'flex' , justifyContent:'center' , alignItems:'center' , boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' , backgroundColor:'#FAFAFA' , borderRadius:'1rem' , width:'25rem'}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '300px' }}>
                    <p style={{ textAlign: 'center' , margin:'1rem' , fontSize:'1.7rem',padding:'1rem'}}>Forgot Password</p>
                    {message && <div style={{ marginBottom: '1rem', color: '#155724', backgroundColor: '#d4edda', borderColor: '#c3e6cb', padding: '0.75rem 1.25rem', border: '1px solid transparent', borderRadius: '0.25rem' }}>{message}</div>}
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <input type="email" id="formEmail" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.5rem 0.75rem', fontSize: '0.7rem', lineHeight: '1.5', color: '#495057', backgroundColor: '#fff', backgroundClip: 'padding-box', border: '1px solid #ced4da', borderRadius: '0.25rem', boxSizing: 'border-box' }} required />
                        </div>
                        <button type="submit" style={{ width: '100%', padding: '0.6rem', fontSize: '1rem', lineHeight: '1.5', background: '#D268CC' , color: 'white', borderColor: '#007bff', border: '1px solid transparent', borderRadius: '0.5rem' ,marginBottom:'2rem',marginTop:'1rem' }}>Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
