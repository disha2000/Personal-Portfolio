import React from 'react'
import './About.css'
import Tilt from 'react-tilt'
import cpp from '../assets/skills/cpp3-svgrepo-com.svg'
import bootstrap from '../assets/skills/bootstrapc.svg'
import html from '../assets/skills/htmlc.svg'
import css from '../assets/skills/cssc.svg'
import js from '../assets/skills/jsc.svg'
import git from '../assets/skills/github-svgrepo-com.svg'
import gitbash from '../assets/skills/gitbashc.svg'
import react from '../assets/skills/reactc.svg'
import java from '../assets/skills/javac.svg'
import mysql from '../assets/skills/mysql-icon.svg'
import python from '../assets/skills/python-5.svg'
import vscode from '../assets/skills/visual-studio-code-1.svg'
import dbt from '../assets/skills/dbtc.png'
import firebasec from '../assets/skills/firebasec.svg'
import mongodb from '../assets/skills/mongodb.svg'
import nodejs from '../assets/skills/nodejs.svg'
import Heading from './Heading'
export default function About() {
  return (
    <div className='About-section' id='about_'>
      <div className='about_content'>
        <div className="unused"></div>
        <div className='skill_section'>

          <Tilt id="tilt_effect" options={{ perspective: 470, max: 50, speed: 400 }}>
            <div className="about_skills" >

              <div className='column' data-aos="zoom-out-right">
                <div className='skill-icon'>
                  <img src={cpp} alt='cpp' />
                </div>
                <div className='skill-icon' data-aos="zoom-out-right">
                  <img src={bootstrap} alt='bootstrap' />
                </div>
              </div>
              <div className='column' data-aos="zoom-out-right">
                <div className='skill-icon'>
                  <img src={html} alt='html' />
                </div>
                <div className='skill-icon'>
                  <img src={css} alt='css' />
                </div><div className='skill-icon'>
                  <img src={js} alt='js' />
                </div>

              </div>
              <div className='column' >
                <div className='skill-icon'>
                  <img src={git} alt='git' />
                </div><div className='skill-icon'>
                  <img src={gitbash} alt='gitbash' />
                </div><div className='skill-icon'>
                  <img src={react} alt='react' />
                </div><div className='skill-icon'>
                  <img src={java} alt='java' />
                </div><div className='skill-icon'>
                  <img src={mysql} alt='mysql' />
                </div><div className='skill-icon'>
                  <img src={python} alt='python' />
                </div>
              </div>
              <div className='column' data-aos="zoom-in">
                <div className='skill-icon'>
                  <img src={vscode} alt='vscode' />
                </div><div className='skill-icon'>
                  <img src={dbt} alt='dbt' />
                </div><div className='skill-icon'>
                  <img src={firebasec} alt='firebase' />
                </div>

              </div>
              <div className='column' data-aos="zoom-in">
                <div className='skill-icon'>
                  <img src={mongodb} alt='mongodb' />
                </div>
                <div className='skill-icon'>
                  <img src={nodejs} alt='nodejs' />
                </div>
              </div>

            </div>
          </Tilt>
        </div>
        <div className='about_data'>
          <div className='about_title'>
            <Heading count="01" title="About Me" />
          </div>

          <div className='about_intro'>
            <p>
              Hello! My name is <span className="">Disha Doshi </span>, a 22-year-old web developer living in Pune, India. I have a Bachelors’s Degree in Computer Science from the Savitribai Phule Pune University. Currently, I work as a full-time software Engineer at a <span className="imp-effect">E-zest Solutions LTD.</span>
            </p>
            <p>I enjoy solving technical problems, researching and
              developing new technologies, designing software applications
              for different platforms.
              </p>
              <p> I have a strong background in various
              programming languages and frameworks such as
              Python, C++, C, and React Js.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
