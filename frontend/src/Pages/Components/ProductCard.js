import React, { useState } from 'react';
import { faHeart as before } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as after } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemWishList }from '../../redux/reducer/wishlist';

const ProductCard = ({product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [wishIcons, setWishIcons] = useState(before);

  const handleChange = () => {
    setWishIcons(prevIcons => prevIcons === before ? after : before);

    if (wishIcons === before) {
      dispatch(addItemWishList(product));
    }
  };

  return (
    <div className="productCard" key={product.id}>
      <div className="selectProduct">
        <FontAwesomeIcon
          icon={wishIcons}
          className={`wishIcon ${wishIcons === after ? 'active-wish-icon' : ''}`}
          onClick={handleChange}
        />
      </div>
      <div className="navigation" onClick={() => navigate(`/productdetails/${product.id}`)}>
        <div className="imageContainer">
          <img src={product.image} alt={product.name} className="productImage" />
        </div>
        <p style={{ paddingLeft: '0.5rem' ,color:'#373737'}} className='productName'>{product.name}</p>
        <span style={{ paddingLeft: '0.5rem',fontWeight:'700' }}>Rs.{product.new_price}</span>
        <span style={{ paddingLeft: '0.5rem',fontWeight:'500',color:'gray' }}><strike>Rs.{product.old_price}</strike></span>
      </div>
    </div>
  );
};

export default ProductCard;
