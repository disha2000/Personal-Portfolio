import React, { useState } from 'react'
import './NavbarC.css'
import { MenuItems } from './data';
import bar from '../assets/navbar/bars.svg'
import close from '../assets/navbar/multiply.svg'
export default function NavbarC() {
    const [clicked, setClicked] = useState(false);
    const handleClick = function () {
        setClicked(!clicked)
    }
    return (
        <div className = "Nav-section">
            <header className='primary-header flex'>
                <div className='logo'>
                    <a  href = '#'>disha.</a>
                </div>
                <div className={clicked ? "mobile-nav-toggle open" : "mobile-nav-toggle "} aria-controls='primary-navigation' aria-expanded="false" onClick={handleClick}>
                    {clicked?<img src = {close} alt = 'close'/>:<img src = {bar} alt = 'bar'/> }

                </div>
                <nav>
                    <ul id="primary-navigation" className={clicked ? 'primary-navigation flex active' : 'primary-navigation flex'}>

                        {MenuItems.map(function (item, index) {
                            return (

                                <li className='active' key={index} data-aos="zoom-in">
                                    <a className={item.cName} href={item.url} onClick = {handleClick}><span aria-hidden="true">{item.title}</span></a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </div>


    )
}
