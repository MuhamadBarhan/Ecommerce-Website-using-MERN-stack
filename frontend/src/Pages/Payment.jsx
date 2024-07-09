import React from 'react'; //, { useState }
import './Styles/PaymentPage.css';
// import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  // const [paymentMethod, setPaymentMethod] = useState('credit_card');
  // const [cardNumber, setCardNumber] = useState('');
  // const [expiry, setExpiry] = useState('');
  // const [cvv, setCvv] = useState('');
  // const [name, setName] = useState('');

  // const handlePayment = () => {
  //   // Handle payment logic here based on paymentMethod
  //   if (paymentMethod === 'credit_card') {
  //     console.log('Credit card payment processed!');
  //   } else if (paymentMethod === 'cash_on_delivery') {
  //     console.log('Cash on delivery payment processed!');
  //   }
  //   toast.success("Order placed successfully")
  // };
  const navigate = useNavigate();

  return (
    <>
      <h3>Coming soon!!</h3>
      <button className='formBtn' onClick={() => navigate('/')}>Return to home</button>
    </>
    // <div className="payment-container">
    //     <Toaster/>
    //   <h2>Payment Information</h2>
    //   <div className="payment-options">
    //     <label>
    //       <input 
    //         type="radio"
    //         className = 'payment-ip' 
    //         value="credit_card" 
    //         checked={paymentMethod === 'credit_card'} 
    //         onChange={() => setPaymentMethod('credit_card')} 
    //         required
    //       />
    //       Credit Card
    //     </label>
    //     <label>
    //       <input 
    //         type="radio"
    //         className = 'payment-ip' 
    //         value="cash_on_delivery" 
    //         checked={paymentMethod === 'cash_on_delivery'} 
    //         onChange={() => setPaymentMethod('cash_on_delivery')} 
    //         required
    //       />
    //       Cash on Delivery
    //     </label>
    //   </div>
    //   {paymentMethod === 'credit_card' && (
    //     <>
    //       <div className="form-group">
    //         <label htmlFor="cardNumber">Card Number:</label>
    //         <input 
    //           type="text"
    //           className = 'payment-ip' 
    //           id="cardNumber" 
    //           value={cardNumber} 
    //           onChange={(e) => setCardNumber(e.target.value)} 
    //           placeholder="Enter Card Number" 
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="expiry">Expiry:</label>
    //         <input 
    //           type="text"
    //           className = 'payment-ip' 
    //           id="expiry" 
    //           value={expiry} 
    //           onChange={(e) => setExpiry(e.target.value)} 
    //           placeholder="MM/YY" 
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="cvv">CVV:</label>
    //         <input 
    //           type="text"
    //           className = 'payment-ip' 
    //           id="cvv" 
    //           value={cvv} 
    //           onChange={(e) => setCvv(e.target.value)} 
    //           placeholder="CVV" 
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="name">Name on Card:</label>
    //         <input 
    //           type="text"
    //           className = 'payment-ip' 
    //           id="name" 
    //           value={name} 
    //           onChange={(e) => setName(e.target.value)} 
    //           placeholder="Name on Card" 
    //           required
    //         />
    //       </div>
    //     </>
    //   )}
    //   <button className='payment-btn' onClick={handlePayment}>Submit Payment</button>
    // </div>
  );
};

export default PaymentPage;
