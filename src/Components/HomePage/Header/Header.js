import React from 'react'
import logo from '../../../assets/logo.png';
import './Header.scss';


const Header = () => {
    return (
        <div className='header'>

            <div className='header__logo'>
            <img src={logo} alt="logo" />
            </div>

            <div className='header__links'>
                <span>Home</span>
                <span>Attorneys</span>
                <span>Practice Areas</span>
                <span>About Us</span>
            </div>

            <div className='header__button'>
                <button>Contact Now</button>
            </div>

        </div>
    )
}

export default Header