import React, { useState } from 'react'
import './NavbarC.css'
import { MenuItems } from './data';
import bar from '../assets/navbar/bars.svg'
import close from '../assets/navbar/multiply.svg'
import { Link, animateScroll as scroll } from "react-scroll";
export default function NavbarC() {
    const [clicked, setClicked] = useState(false);
    const handleClick = function () {
        setClicked(!clicked)
    }
    return (
        <div className="Nav-section">
            <header className='primary-header flex'>
                <div className='logo'>
                    <Link

                        activeClass="active"
                        to='_home'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleClick}
                    >disha.</Link>
                </div>
                <div className={clicked ? "mobile-nav-toggle open" : "mobile-nav-toggle "} aria-controls='primary-navigation' aria-expanded="false" onClick={handleClick}>
                    {clicked ? <img src={close} alt='close' /> : <img src={bar} alt='bar' />}

                </div>
                <nav>
                    <ul id="primary-navigation" className={clicked ? 'primary-navigation flex active' : 'primary-navigation flex'}>

                        {MenuItems.map(function (item, index) {
                            return (

                                <li className='active' key={index} data-aos="zoom-in">
                                    <Link
                                        className={item.cName}
                                        activeClass="active"
                                        to={item.url}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={handleClick}
                                    >{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </div>


    )
}
