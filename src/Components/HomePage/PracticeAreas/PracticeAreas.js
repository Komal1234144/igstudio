import React from 'react'
import corporate from '../../../assets/corporate.png'
import partnership from '../../../assets/partnership.png'
import realEstate from '../../../assets/realEstate.png'
import business from '../../../assets/business.png'
import landlordDisputes from '../../../assets/landlordDisputes.png'
import elderAbsue from '../../../assets/elderAbuse.png'
import './PracticeAreas.scss'

const PracticeAreas = () => {
    return (
        <div className='areas'>

            <h1>Area Of Practices</h1>

            <div className='areas-container'>

                <div id='corporate'>
                    <img src={corporate} alt="corporate law" />
                    <span>CORPORATE LAW</span>
                </div>

                <div id='partnership'>
                    <img src={partnership} alt="partnership law" />
                    <span>PARTNERSHIP LAW</span>
                </div>

                <div id='realEstate'>
                    <img src={realEstate} alt="Real Estate law" />
                    <span>REAL ESTATE LAW</span>
                </div>

                <div id='business'>
                    <img src={business} alt="business law" />
                    <span>BUSINESS LAW</span>
                </div>

                <div id='landlordDispute'>
                    <img src={landlordDisputes} alt="landlord disputes" />
                    <span>LANDLORD DISPUTES</span>
                </div>

                <div id='elderAbuse'>
                    <img src={elderAbsue} alt="elder abuse" />
                    <span>ELDER ABUSE</span>
                </div>

            </div>
        </div>
    )
}

export default PracticeAreas