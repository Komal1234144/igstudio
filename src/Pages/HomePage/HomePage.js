import React from 'react'
import Header from '../../Components/HomePage/Header/Header'
import Hero from '../../Components/HomePage/Hero/Hero'
import Intro from '../../Components/HomePage/Intro/Intro'
import WhyChoose from '../../Components/HomePage/WhyChoose/WhyChoose'
import PracticeAreas from '../../Components/HomePage/PracticeAreas/PracticeAreas'
import HappyClients from '../../Components/HomePage/HappyClients/HappyClients'
import Team from '../../Components/HomePage/Team/Team'
import FAQ from '../../Components/HomePage/FAQ/FAQ'
import Subscribe from '../../Components/HomePage/Subscribe/Subscribe'
import Footer from '../../Components/HomePage/Footer/Footer'

const HomePage = () => {
    return (
        <div className='home'>

            <Header />

            <Hero />

            <Intro />

            <WhyChoose />

            <PracticeAreas />

            <HappyClients />

            <Team />

            <FAQ />

            <Subscribe />

            <Footer />

        </div>
    )
}

export default HomePage