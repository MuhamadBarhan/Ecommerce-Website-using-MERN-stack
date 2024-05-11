import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import './Styles/Checkout.css'
import {baseUrl} from '../url'

const Checkout = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    pinCode: '',
    district: '',
    state: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post(`${baseUrl}/saveinfo`, formData, {
      headers: {
        'auth-token': `${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      }
    })
    .then(res=>{
      alert(res.data);
      navigate('/ordersummary');
    })

    setFormData({
      street: '',
      city: '',
      pinCode: '',
      district: '',
      state: '',
      contactNumber: ''
    });
  };

  return (
    <div className="order-form-container">
      <h2>Enter your details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className='order-form-input'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className='order-form-input'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pinCode">Pin Code:</label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className='order-form-input'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className='order-form-input'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className='order-form-input'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className='order-form-input'
            required
          />
        </div>
        <button className='order-form-btn' type="submit">Continue</button>
      </form>
    </div>
  )
}

export default Checkout