import React, { useState } from 'react'
import './NavbarC.css'
import { MenuItems } from './data';
export default function NavbarC() {
    const [clicked, setClicked] = useState(false);
    const handleClick = function () {
        setClicked(!clicked)
    }
    return (
        <div className = "Nav-section">
            <header className='primary-header flex'>
                <div className='logo'>
                    disha.
                </div>
                <div className={clicked ? "mobile-nav-toggle open" : "mobile-nav-toggle "} aria-controls='primary-navigation' aria-expanded="false" onClick={handleClick}>
                    {clicked?<i class="uil uil-multiply"></i>: <i class="uil  uil-bars"></i> }

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
