import React from 'react'
import './Timeline.css'
export default function Timeline(props) {
  return (
    <div id="content">
      <ul className="timeline">
        {props.experienceList.map(function (item, index) {
          return (

            <li className="event" key={index} data-date={item.position}>
              <h3>{item.companyName}</h3>
              <h5>{item.fromto}</h5>
              <h6>{item.location}</h6>
              <div className='timeline_content' data-aos="zoom-in">
                <ul>

                  {item.descriptions.map(function (point, index1) {
                    return (


                      <li key={index1}>{point.work}</li>
                    )
                  })}

                </ul>


              </div>

            </li>
          )
        })}


      </ul>
    </div>
  )
}
