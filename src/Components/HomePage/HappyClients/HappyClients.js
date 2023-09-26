import React, { useState } from 'react'
import client1 from '../../../assets/client1.png'
import client2 from '../../../assets/client2.png'
import client3 from '../../../assets/client3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ClientCard from '../ClientCard/ClientCard';
import './HappyClients.scss';
import arrow from '../../../assets/arrow.png'

const HappyClients = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    const params = {
        // Swiper parameters
        navigation: {
            nextEl: '.my-next-button',
            prevEl: '.my-prev-button',
        },
    };


    const clients = [
        {
            name: 'Jane Cooper',
            image: client1,
            designation: 'CEO of Hunt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo obcaecati distinctio veritatis reiciendis.'
        },
        {
            name: 'Devone Lane',
            image: client2,
            designation: 'CEO of Hunt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo obcaecati distinctio veritatis reiciendis.'
        },
        {
            name: 'Robert Fox',
            image: client3,
            designation: 'CEO of Hunt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo obcaecati distinctio veritatis reiciendis.'
        }
    ]


    return (
        <div className='happy-clients'>

            <div className='happy-clients__title'>

                <div className='happy-clients__title__heading'>
                    <p>What says our</p>
                    <p>happy Clients</p>
                </div>

                <div className='happy-clients__title__btns'>
                    <div className="my-prev-button">
                        <img src={arrow} alt="" />
                    </div>
                    <div className="my-next-button">
                        <img src={arrow} alt="" />
                    </div>
                </div>

            </div>

            <div className='happy-clients__carousel'>

                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={window.innerWidth >= 1000 ? 3 : window?.innerWidth >= 600 ? 2 : 1}
                    loop={true}
                    centeredSlides={false}
                    spaceBetween={10}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    {...params}
                >
                    {
                        clients?.map((client, index) => {
                            return <SwiperSlide key={index}>
                                <div className='grid__card'>
                                    <ClientCard name={client?.name} image={client?.image} designation={client?.designation} description={client?.description} />
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>


            </div>
        </div>
    )
}

export default HappyClients