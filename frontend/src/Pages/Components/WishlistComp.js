import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/WishlistComp.css'

const WishlistComp = (props) => {

    const navigate = useNavigate();

    return (
        <>
            <span className='wishlist-header'>Your Wish List</span>
            <div className="wishlist-card" key={props.id}>
                <div className="wishlist-nav" onClick={() => navigate(`/productdetails/${props.id}`)}>
                    <div className="wishlist-img-container">
                        <img src={props.image} alt={props.name} className="wishlist-prod-image" />
                    </div>
                    <div className="wishlist-desc">
                        <p style={{ paddingLeft: '0.5rem', color: '#373737' }} className='wishlist-desc-text name'>{props.name}</p>
                        <span style={{ paddingLeft: '0.5rem', fontWeight: '700' }} className='wishlist-desc-text n_price'>Rs.{props.new_price}</span>
                        <span style={{ paddingLeft: '0.5rem', fontWeight: '500', color: 'gray' }} className='wishlist-desc-text o_price'><strike>Rs.{props.old_price}</strike></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WishlistComp