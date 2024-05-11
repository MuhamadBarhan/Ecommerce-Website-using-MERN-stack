import React from 'react'
import '../Styles/navbar.css'
import Logo from '../../data/Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.list);

  return (
    <nav className="navbar">
      <img src={Logo} alt='Logo' className='logo' />
      <div className="desktopMenu">
        <div className="wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." className='search-container' />
        </div>
        <Link to='/searchpage' className="search-icon-mob">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link to='/cart' className="desktopMenuListItem">
          <div className="parent">
            <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
            <div className="child">
              {cartItems.length > 0 && (
                <span>{cartItems.length}</span>
              )}
            </div>
          </div>


        </Link>
        <Link to='/wishlist' className="desktopMenuListItem wishlist">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        {localStorage.getItem('auth-token') ?
          <button style={{backgroundColor:'grey', color:'white' , border:'none'}} onClick={() => {
            localStorage.removeItem('auth-token');
            window.location.replace("/");
          }}>Logout</button> :
          <Link to="/login" className="desktopMenuListItem">
            <FontAwesomeIcon icon={faUser} />  Login
          </Link>
        }
      </div>
    </nav>
  )
}

export default Navbar
