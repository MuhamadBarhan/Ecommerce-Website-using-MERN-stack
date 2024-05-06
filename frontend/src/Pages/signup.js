import React, { useState } from "react"
import axios from "axios"
import {Link, useNavigate } from "react-router-dom"
import '../../src/form.css'
import Illustration from '../data/illustration.svg'
import {baseUrl} from '../url'


function Signup() {

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        username:"",
        password:"",
        email:"",
    });
    

    const changeHandler =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        
    }

    async function submit(e){
        e.preventDefault();
        console.log(formData);

        try{

            await axios.post(`${baseUrl}/signup`,formData)
            .then(res=>{
                if(res.data.success){
                    localStorage.setItem('auth-token',res.data.token);
                    navigate('/');
                }
            })
            .catch(error => {
                  // The server responded with a status other than 2xx
                  alert(error.response.data.errors);
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

                <form className="form">
                    <span className="formHeading">Signup</span>

                    <input id='ip3' type="text" name='username' value={formData.username} onChange={changeHandler} placeholder="Name" required/>
                    <input id='ip4' type="email" name='email' value={formData.email} onChange={changeHandler} placeholder="Email" required/>
                    <input id='ip5' type="password" name='password' value={formData.password} onChange={changeHandler} placeholder="Password" required/>
                    <button type="submit" className='formBtn' onClick={submit} >Signup</button>
                    <p className="formLink">Already have an account? <Link to="/login">Login</Link></p>
                    
                </form>
            </div>
        </section>

    )
}

export default Signup