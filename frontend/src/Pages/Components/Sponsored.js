import React from 'react'
import '../Styles/Sponsored.css'

const Sponsored = ({ product }) => {
    return (
        <>
        <div className='sponsored-container'>
        <span>Sponsored</span>
        <div className="sponsored-card-cont">
            {product.map((product) => (
                <div className="sponsored-card" key={product.id}>
                    <div className="sponsored-img-cont">
                        <img src={product.image} alt={product.name} className="sponsored-img" />
                    </div>
                        <p className='sponsored-name'>{product.name}</p>
                    <span style={{color:'green'}}>Min. 50% Off</span>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Sponsored