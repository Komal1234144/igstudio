import React from 'react'
import './ClientCard.scss';


const ClientCard = ({ name, image, designation, description }) => {
    return (
        <div className='client-card'>
            <div className='client-card__img'>
                <img src={image} alt="" />
            </div>

            <div className='client-card__name'>
                <h5>{name}</h5>
                <p>{designation}</p>
            </div>

            <div className='client-card__desc'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ClientCard