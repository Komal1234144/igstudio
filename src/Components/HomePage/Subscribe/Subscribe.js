import React from 'react'
import './Subscribe.scss'


const Subscribe = () => {
    return (
        <div className='subscribe'>

            <div className='subscribe__card'>

            <h1>Subscribe Our Newsletter</h1>

                <div className='form'>
                    <input type="text" placeholder='Name:' id='name' />
                    <input type="email" placeholder='Enter your email' id='email' />
                    <button className='btn'>SEND</button>
                </div>
            </div>

        </div>
    )
}

export default Subscribe