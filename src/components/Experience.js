import React from 'react'

import Heading from './Heading'

import './Experience.css'
import Timeline from './Timeline'
import { experiences } from './data' 
export default function Experience() {
    return (
        <div className='Experience-section' id = 'experience_'>
            <div className='experience_content'>
                <div className='unused'></div>
                <div className='experience_data'>

                    <div className='experience_title'>
                        <Heading count="02" title="work Experience " />
                    </div>
                    <div className='experience_grid'>
                    <div class="experience">
                    <div class="item">
                       <Timeline experienceList = {experiences}/>
                    </div>

                 
                </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
