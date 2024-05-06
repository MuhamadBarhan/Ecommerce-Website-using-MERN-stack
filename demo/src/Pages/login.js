import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../../src/form.css'
import Illustration from '../data/illustration.svg'


function Login() {

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        password:"",
        email:"",
    });
    

    const changeHandler =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        
    }

    async function submit(e){
        e.preventDefault();
        try{

            await axios.post("http://localhost:4000/login",formData)
            .then(res=>{
                if(res.data.success){
                    localStorage.setItem('auth-token',res.data.token);
                    navigate('/');
                }
                else {
                    alert(res.data.errors);
                }
            })
            .catch(error => {
                console.log(error);
              });
        }
        catch(e){
            console.log(e);

        }

    }

    return (
        <section className="formCard">
            <div className="formContainer">
                <div className="illustration">
                    <img src={Illustration} alt="Login Illustration" style={{ width: '500px', height: '400px' }}/>
                </div>

                <form action="POST" className="form">
                    <span className="formHeading">Login</span>
                    <input id='ip1' type="email" name='email' value={formData.email} onChange={changeHandler} placeholder="Email" required/>
                    <input id='ip2' type="password" name='password' value={formData.password} onChange={changeHandler} placeholder="Password" required/>
                    <button type="submit" className='formBtn' onClick={submit} >Login</button>
                    <Link to="/forgotpass" className="fpass">Forgot Password?</Link>
                    
                    <p className="formLink">Don't have an account? <Link to="/signup">Create one!</Link></p>
                </form>
            </div>

        </section>

    )
}

export default Login