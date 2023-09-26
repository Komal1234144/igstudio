import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './FAQ.scss';


const FAQ = () => {
    return (
        <div className='faq'>

            <div className='faq__left'>
                <h1>FAQ</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti perspiciatis hic nam</p>
            </div>

            <div className='faq__right'>

                <Accordion className='accordion'>
                    <AccordionSummary
                        expandIcon={<AiFillPlusCircle className='icon'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <p>Do I need a personal injury report?</p>
                    </AccordionSummary>
                    <AccordionDetails className='details'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ducimus enim voluptatem quisquam officiis sequi assumenda tempore labore itaque quasi quas, alias accusamus saepe voluptatum!
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='accordion'>
                    <AccordionSummary
                        expandIcon={<AiFillPlusCircle className='icon'/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <p>How much is my case worth?</p>
                    </AccordionSummary>
                    <AccordionDetails className='details'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione vitae perferendis quas excepturi a nisi voluptatem fugit! Non ea cum illum beatae ipsum nostrum ab.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='accordion'>
                    <AccordionSummary
                        expandIcon={<AiFillPlusCircle className='icon'/>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <p>What should I do right after car accidect?</p>
                    </AccordionSummary>
                    <AccordionDetails className='details'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione vitae perferendis quas excepturi a nisi voluptatem fugit! Non ea cum illum beatae ipsum nostrum ab.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='accordion'>
                    <AccordionSummary
                        expandIcon={<AiFillPlusCircle className='icon'/>}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <p>How much is my case worth?</p>
                    </AccordionSummary>
                    <AccordionDetails className='details'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione vitae perferendis quas excepturi a nisi voluptatem fugit! Non ea cum illum beatae ipsum nostrum ab.
                        </p>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    )
}

export default FAQ