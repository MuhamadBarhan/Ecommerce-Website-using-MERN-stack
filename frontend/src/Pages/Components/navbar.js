import React from 'react'
import '../Styles/navbar.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import cartIcon from '../../data/Images/cart.svg'
import heartIcon from '../../data/Images/heart.svg'
import profileIcon from '../../data/Images/user.svg'
import searchIcon from '../../data/Images/search.svg'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.list);
  

  return (
    <nav className="navbar">
      <span className='logo'><span style={{color:'#008ecc'}}>Z</span>Kart</span>
      <div className="desktopMenu">
        <div className="wrapper">
          <img src={searchIcon} alt="search-icon" width={22} height={22}/>
          <input type="text" placeholder="Search..." className='search-container' />
        </div>
        <Link to='/searchpage' className="search-icon-mob">
        <img src={searchIcon} alt="search-icon" width={24} height={24}/>
        </Link>
        <Link to='/cart' className="desktopMenuListItem">
          <div className="parent">
            <img src={cartIcon} alt="cart-icon" width={24} height={24}/>
            <div className="child">
              {cartItems.length > 0 && (
                <span>{cartItems.length}</span>
              )}
            </div>
          </div>
        </Link>
        <Link to='/wishlist' className="desktopMenuListItem wishlist">
        <img src={heartIcon} alt="wish-icon" width={24} height={24}/>
        </Link>
        {localStorage.getItem('auth-token') ?
           <Link to="/profile" className="desktopMenuListItem">
           <img src={profileIcon} alt="cart-icon" width={24} height={24}/>
         </Link>:
          <Link to="/login" className="desktopMenuListItem">
            <img src={profileIcon} alt="cart-icon" width={24} height={24}/>
          </Link>
        }
      </div>
    </nav>
  )
}

export default Navbar
