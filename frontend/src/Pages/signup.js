import React, { useState } from "react"
import axios from "axios"
import {Link, useNavigate } from "react-router-dom"
import '../../src/form.css'
import Illustration from '../data/illustration.svg'
import {baseUrl} from '../url'
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Signup() {

    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData , setFormData] = useState({
        username:"",
        password:"",
        email:"",
    });
    

    const changeHandler =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        
    }

    async function submit(e) {
        e.preventDefault();
        try {
            // Display "Logging in..." message while waiting for the response
            const promise = toast.promise(
                axios.post(`${baseUrl}/signup`, formData),
                {
                    loading: 'Signing in...',
                    success: 'Signup Successful',
                    error: (error) => {
                        if ( error.response.data.errors ) {
                            return error.response.data.errors;
                        } else {
                            return 'Failed to Signup';
                        }
                    },
                }
            );
    
            const res = await promise; // Wait for the promise to resolve
    
            // Once the promise resolves, check the response
            if (res.data.success) {
                localStorage.setItem('auth-token', res.data.token);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                alert(res.data.errors);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    


    return (
        <section className="formCard">
            <Toaster/>
            <div className="formContainer">
                <div className="illustration">
                    <img src={Illustration} alt="Login Illustration" style={{ width: '500px', height: '400px' }}/>
                </div>

                <form className="form">
                    <span className="formHeading">Signup</span>

                    <input id='ip3' type="text" name='username' value={formData.username} onChange={changeHandler} placeholder="Name" required/>
                    <input id='ip4' type="email" name='email' value={formData.email} onChange={changeHandler} placeholder="Email" required/>
                    <div className="password-container">
                        <input id='ip5' type={passwordVisible ? "text" : "password"} name="password" value={formData.password} onChange={changeHandler} placeholder="Password" required />
                        <button onClick={togglePasswordVisibility} className="toggle-password" type="button" >
                            <FontAwesomeIcon className="pass-icon" icon={passwordVisible ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    <button type="submit" className='formBtn' onClick={submit} >Signup</button>
                    <p className="formLink">Already have an account? <Link to="/login">Login</Link></p>
                    
                </form>
            </div>
        </section>

    )
}

export default Signup