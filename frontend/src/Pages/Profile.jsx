import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Profile = () => {
    return (
        <>
            <div>Profile</div>
            <button style={{ backgroundColor: '#008ecc', color: 'white', border: 'none',padding:'0.3rem 0.6rem',borderRadius:'20px' }} onClick={() => {
                localStorage.removeItem('auth-token');
                window.location.replace("/");
            }}><FontAwesomeIcon icon={faArrowRightFromBracket}/> Logout</button>
        </>
    )
}

export default Profile