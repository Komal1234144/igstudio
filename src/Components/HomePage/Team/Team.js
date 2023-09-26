import React from 'react'
import './Team.scss';
import team2 from '../../../assets/team2.png'
import team3 from '../../../assets/team3.png'
import team4 from '../../../assets/team4.png'
import team5 from '../../../assets/team5.png'
import client3 from '../../../assets/client1.png'
import client1 from '../../../assets/client3.png'

const Team = () => {

    const [selected, setSelected] = React.useState('Sanfole')

    const teammates = [
        {
            name: 'Daniel Def',
            cases: '301 Cases',
            image: client1
        },
        {
            name: 'Sanfole',
            cases: '850 Cases',
            image: team2
        },
        {
            name: 'Caseforila',
            cases: '470 Cases',
            image: team3
        },
        {
            name: 'Collen',
            cases: '180 Cases',
            image: team4
        },
        {
            name: 'Haldone',
            cases: '212 Cases',
            image: team5
        },
        {
            name: 'Nik Joe',
            cases: '350 Cases',
            image: client3
        }
    ]


    return (
        <div className='team'>

            <h4 className='team__title'>Our Team</h4>

            <div className='team__mates'>
                {
                    teammates?.map((teammate, index) => {
                        return <div key={index}
                            className={`team__mates__card ${selected === teammate?.name ? 'active' : ''}`}
                            onClick={() => {
                                setSelected(teammate?.name)
                            }}
                        >
                            <div className='image'>
                                <img src={teammate?.image} alt="" />
                            </div>
                            <div className='info'>
                                <h4>{teammate?.name}</h4>
                                <p>{teammate?.cases}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Team