import React from 'react'
import '../Styles/productlist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const BuynowComp = (props) => {
  const navigate=useNavigate();

  return (
    <div className="ct-container">
      <div className="ct-product-card" key={props.id}>
        <div className="ct-grid ct-image-container">
          <img src={props.image} alt={props.name} className="ct-product-image" />
        </div>
        <div className="ct-grid ct-desc">
          <h3 style={{ paddingLeft: '0.5rem' }}>{props.name}</h3>
          <span style={{ paddingLeft: '0.5rem' }}>Rs.{props.newprice}</span>
          <span style={{ paddingLeft: '0.5rem', color: 'gray' }}><strike>Rs.{props.oldprice}</strike></span>
          <div className="quantity">
            <button onClick={props.decrementItem} style={{border:'none', cursor:'pointer'}}>-</button>
            <span className="qty"> Quantity: {props.count} </span>
            <button onClick={props.incrementItem} style={{border:'none', cursor:'pointer'}}>+</button>
            <button className='ct-btn remove' onClick={props.removeItem}><FontAwesomeIcon icon={faTrash}/> Remove</button> 
            <button className='ct-btn buy' onClick={()=>navigate('/success')} ><FontAwesomeIcon icon={faBoltLightning}/> Place Order</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuynowComp