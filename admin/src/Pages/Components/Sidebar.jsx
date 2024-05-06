import React from 'react'
import '../Styles/Sidebar.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
// import add_product_icon from '../../assets/Product_Cart.svg'
// import list_product_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
            <div className="sidebar-item">
                {/* <img src={add_product_icon} alt="" /> */}
                <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon><p> Add Product</p>
            </div> 
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
            <div className="sidebar-item">
                {/* <img src={list_product_icon} alt="" /> */}
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon><p> Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar