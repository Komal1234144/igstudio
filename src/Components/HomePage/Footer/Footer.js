import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTwitterSquare, FaPinterest } from 'react-icons/fa'
import logo from '../../../assets/logo.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer__top'>
                <img src={logo} alt="logo" />

                <div className='footer__links'>
                    <span>Home</span>
                    <span>Attorneys</span>
                    <span>Practice Areas</span>
                    <span>About Us</span>
                </div>

                <div className='footer__socials'>
                    <FiInstagram className='icon' />
                    <AiFillFacebook className='icon' />
                    <FaTwitterSquare className='icon' />
                    <FaPinterest className='icon' />
                </div>
            </div>


            <div className='footer__bottom'>
                <span>&#169; 2020 Acme. All right reserved</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>

        </div>
    )
}

export default Footer