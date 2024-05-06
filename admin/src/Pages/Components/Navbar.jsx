import React from 'react'
import '../Styles/Navbar.css'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><span className='book'>Admin</span><span className='store'>Panel</span></div>
        <img src={navProfile} alt='' className='nav-profile'></img>

    </div>
  )
}

export default Navbar