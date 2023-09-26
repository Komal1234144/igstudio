import React from 'react'
import { TbMailFilled } from 'react-icons/tb';
import hero from '../../../assets/hero.png';
import './Hero.scss';


const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__left'>
                <h1 id='title'>You don't have to</h1>
                <h1 id='title-focus'>Fight them Alone.</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste architecto natus accusantium numquam doloribus!</p>

                <div className='hero__left__cta'>
                    <div className='hero__left__cta__email'>
                        <TbMailFilled className='icon' />
                        Enter your email address
                    </div>

                    <button>
                        Let's Talk
                    </button>
                </div>
            </div>

            <div className='hero__right'>
                <img src={hero} alt="hero-image" />
            </div>
        </div>
    )
}

export default Hero