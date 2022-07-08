import React from 'react'
import './Heading.css'
export default function Heading(props) {
    return (
        <div>
            <div className='heading-pattern'>
                <span className='tracking_wide'>{props.count + "."}</span>
                <span className='tracking_line'></span>
                <h1 className='heading_title'>
                    {props.title}
                </h1>
            </div>
        </div>
    )
}
