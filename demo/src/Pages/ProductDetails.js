import React , {useState}  from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { products } from '../data/Products';
import './Styles/ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';


const ProductDetails = () => {

  const params = useParams();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [alert,setAlert]=useState(false);
  const products = useSelector((state)=> state.product.list);
  const item = products.find((element) => element.id === parseInt(params.id));
  const list=useSelector((state)=> state.cart.list);
  const element=list.find((value)=>value.id===item.id);

  const addToCart = () => {
    setAlert(true);
    setTimeout(()=>setAlert(false),3000)
    dispatch(addItem(item));
  };

  return (
    <div>
       {alert && <div className="alertBox">
       <span className="alertSuccess">Item added to Cart <FontAwesomeIcon icon={faCircleCheck}/></span>
       </div>}
    <div className="product-detail" key={item.id} >
     
      <div className="pd-image-container">
        <img src={item.image} alt={item.name} className="pd-image" />
      </div>
      <div className="pd-desc">
        <h3 style={{ paddingLeft: '0.5rem' ,color:'#7A7A7A'}} >{item.name}</h3>
        <span style={{ paddingLeft: '0.5rem' ,fontWeight:'700',fontSize:'30px'}}>Rs.{item.new_price}</span>
        <span style={{ paddingLeft: '0.5rem' ,color:'gray',fontWeight:'500'}}><strike>Rs.{item.old_price}</strike></span>
        <div className="buyProduct">
          {element?.count>0 ? <button className='pd-btn goto' onClick={()=>navigate('/cart')}><FontAwesomeIcon icon={faCircleCheck}/> Go to Cart</button>:
            <button className='pd-btn cart' onClick={addToCart}><FontAwesomeIcon icon={faCartShopping}/> Add to Cart</button>}
          <button className='pd-btn buy' onClick={()=>navigate(`/buynow/${item.id}`)}><FontAwesomeIcon icon={faBoltLightning}/> Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails