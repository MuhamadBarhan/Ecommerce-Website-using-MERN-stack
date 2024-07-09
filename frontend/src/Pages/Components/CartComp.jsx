import React from 'react'
import '../Styles/CartComp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartComp = (props) => {
  return (
    <>
    <div className="ct-container">
      <div className="ct-product-card" key={props.id}>
        <div className="image-and-name">
        <div className="ct-image-container">
          <img src={props.image} alt={props.name} className="ct-product-image" />
        </div>
        <div className="ct-desc">
          <h4 style={{ paddingLeft: '0.5rem' }} className='ct-desc-text name'>{props.name}</h4>
          <span style={{ paddingLeft: '0.5rem' }} className='ct-desc-text'>Rs.{props.new_price}</span>
          <span style={{ paddingLeft: '0.5rem', color: 'gray' }} className='ct-desc-text'><strike>Rs.{props.old_price}</strike></span>
        </div>
        </div>
          <div className="quantity">
            <button onClick={props.decrementItem} style={{border:'none', cursor:'pointer'}}>-</button>
            <span className="qty"> Quantity: {props.count} </span>
            <button onClick={props.incrementItem} style={{border:'none', cursor:'pointer'}}>+</button>
            <button className='ct-btn remove' onClick={props.removeItem}>Remove</button> 
          </div>
      </div>
    </div>
    </>
  )
}

export default CartComp;