import React from 'react'
import './Timeline.css'
export default function Timeline(props) {
  return (
    <div id="content">
      <ul className="timeline">
        {props.experienceList.map(function (item, index) {
          return (

            <li className="event" key ={index} data-date={item.position}>
              <h3>{item.companyName}</h3>
              <h5>{item.fromto}</h5>
              <h6>{item.location}</h6>
              <div className='timeline_content' data-aos="zoom-in">
                {item.descriptions.map(function (point, index1) {
                  return (

                    <p key ={index1}><span className='dash'>- </span>{point.work}</p>
                  )
                })}

              </div>

            </li>
          )
        })}


      </ul>
    </div>
  )
}
