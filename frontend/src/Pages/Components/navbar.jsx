import React, { useRef, useState } from 'react';
import '../Styles/navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cartIcon from '../../data/Images/cart.svg';
import heartIcon from '../../data/Images/heart.svg';
import profileIcon from '../../data/Images/user.svg';
import searchIcon from '../../data/Images/search.svg';
import arrowIcon from '../../data/Images/arrow.svg';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.list);
  let data = useSelector((state) => state.product.list);

  if (!Array.isArray(data)) {
    data = [data];
  }

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <nav className="navbar">
      <span className="logo">
        <span style={{ color: '#008ecc' }}>Z</span>Kart
      </span>
      <div className="desktopMenu">
        {/* Search bar for desktop view */}
        <div className="search-cont-wrapper">
          <div className="wrapper">
            <img src={searchIcon} alt="search-icon" width={22} height={22} />
            <input
              type="text"
              placeholder="Search..."
              className="search-container"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
          <div className="search-items">
            {searchText && (
              <div>
                {filteredData.map((item) => (
                  <p key={item._id}>{item.name}</p>
                ))}
              </div>
            )}
          </div>
        </div>



        {/* Search icon for mobile view */}
        <div className="search-icon-mob" onClick={toggleSearch}>
          <img src={searchIcon} alt="search-icon" width={24} height={24} />
        </div>

        {/* Mobile view search bar */}
        {isSearchOpen && (
          <>
            <div className="mobile-search">
              <img
                src={arrowIcon}
                alt="search-icon"
                width={20}
                height={20}
                onClick={toggleSearch}
                className="close-search"
              />
              <input
                type="text"
                placeholder="Search..."
                className="mobile-search-container"
                value={searchText}
                ref={searchInputRef}
                onChange={handleSearchChange}
              />
              <div className="search-items-mob">
              {searchText && (
                <div className="search-results-mob">
                  {filteredData.map((item) => (
                    <p key={item._id}>{item.name}</p>
                  ))}
                </div>
              )}
            </div>
            </div>
            
          </>
        )}


        <Link to="/cart" className="desktopMenuListItem">
          <div className="parent">
            <img src={cartIcon} alt="cart-icon" width={24} height={24} />
            <div className="child">
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </div>
          </div>
        </Link>

        <Link to="/wishlist" className="desktopMenuListItem wishlist">
          <img src={heartIcon} alt="wish-icon" width={24} height={24} />
        </Link>

        {localStorage.getItem('auth-token') ? (
          <Link to="/profile" className="desktopMenuListItem">
            <img src={profileIcon} alt="cart-icon" width={24} height={24} />
          </Link>
        ) : (
          <Link to="/login" className="desktopMenuListItem">
            <img src={profileIcon} alt="cart-icon" width={24} height={24} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
