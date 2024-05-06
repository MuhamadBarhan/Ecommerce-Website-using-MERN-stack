import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListItem from './Components/productlistitem'
import { modifyItem, removeItem } from '../redux/reducer/cart';
import './Styles/productlistitem.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const list = useSelector((state) => state.cart.list);
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }))
  }

  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item))

    }
    else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }))
    }
  };

  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  }

  return (
    <>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListItem {...item} key={item.id} incrementItem={() => incrementItem(item)} decrementItem={() => decrementItem(item)} removeItem={() => removeItemFromCart(item)} />
          ))}
          <div className="ct-button-cont">
            <button className='ct-button' onClick={()=>navigate('/buynow')}>Place Order</button>
          </div>
        </>
      ) : (<h3>No Items in the Cart</h3>)}
    </>
  )
}

export default Cart