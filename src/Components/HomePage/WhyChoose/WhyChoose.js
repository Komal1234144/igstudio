import React, { useState } from 'react'
import './WhyChoose.scss';
import whychoose from '../../../assets/whychoose.png'

const WhyChoose = () => {

    const [selected, setSelected] = useState(2);

    return (
        <div className='why-choose'>

            <h4 className='why-choose__title'>Why Choose Us?</h4>

            <div className='why-choose__cards'>
                <div className={`${selected === 1 ? 'why-choose__card--selected' : 'why-choose__card'}`}
                    onClick={() => setSelected(1)}
                >
                    <div className='why-choose__card__img'>
                        <img src={whychoose} alt='whychoose' />
                    </div>

                    <div className='why-choose__card__info'>
                        <b>98% Success Rate</b>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officiis quia vero blanditiis, aliquam nesciunt!</p>
                    </div>

                    <div className='why-choose__card__btn'>
                        <button>Read More</button>
                    </div>
                </div>

                <div className={`${selected === 2 ? 'why-choose__card--selected' : 'why-choose__card'}`}
                    onClick={() => setSelected(2)}
                >
                    <div className='why-choose__card__img'>
                        <img src={whychoose} alt='whychoose' />
                    </div>

                    <div className='why-choose__card__info'>
                        <b>100% Success Rate</b>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officiis quia vero blanditiis, aliquam nesciunt!</p>
                    </div>

                    <div className='why-choose__card__btn'>
                        <button>Read More</button>
                    </div>
                </div>

                <div className={`${selected === 3 ? 'why-choose__card--selected' : 'why-choose__card'}`}
                    onClick={() => setSelected(3)}
                >
                    <div className='why-choose__card__img'>
                        <img src={whychoose} alt='whychoose' />
                    </div>

                    <div className='why-choose__card__info'>
                        <b>100% Success Rate</b>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officiis quia vero blanditiis, aliquam nesciunt!</p>
                    </div>

                    <div className='why-choose__card__btn'>
                        <button>Read More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChoose