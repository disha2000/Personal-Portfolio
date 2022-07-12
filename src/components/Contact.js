import React from 'react'
import './Contact.css'
import video from '../assets/video1.mp4'
import Footer from './Footer';
import { emailId } from './data';
export default function Contact() {
  return (
    <div className='contact-section' id='contact_'>
      <div className='contact_content'>
        <div className='unused'></div>
        <div className='contact_flex'>
          <div className='contact_data'>
            <div className='contact_heading'>
              <h3>04.  Want to connect? </h3>

            </div>
            <div className='contact_description'>
              <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
              <a href={"mailto:" + emailId}> <button className="custom-btn btn-4 contact-btn">Contact Me </button></a>
             
              <div
              
          dangerouslySetInnerHTML={{
            __html: `<video class = 'videoanim' autoplay loop muted playsinline>
      <source src=${video} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />
            
            </div>
            <Footer/>
          </div>
        </div>

      </div>
    </div>
  )
}