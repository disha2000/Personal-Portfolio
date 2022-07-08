import React from 'react'
import Card from './Card'
import Heading from './Heading'
import './Project.css'
import { projects } from './data'

export default function Project() {
  return (
    <div className='Project-section' id = 'projects_'>
        <div className='project_content'>
            <div className='unused'></div>
            <div className='project_data'>
                <div className='project_heading'>
                    <Heading count = "03" title ="Projects I've Built" />
                </div>
                <div className='project_card_list'>
                    <Card projectList = {projects}/>
                </div>
            </div>

        </div>
    </div>
  )
}
