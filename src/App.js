
import React, { useEffect } from 'react'
import './App.css'
import NavbarC from './components/NavbarC';
import Home from './components/Home';
import About from './components/About';

import Experience from './components/Experience';
import AOS from "aos";
import "aos/dist/aos.css";
import Project from './components/Project';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    AOS.init({
      debounceDelay: 50, 
      mirror:false,
      anchorPlacement: 'top-bottom',
      once:true
    });
    AOS.refresh();
    
  }, []);

  return (
    <div className="container">
      <div className='bg-flex'>
        <div className='bg_lines'>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>

        </div>
      </div>

      <NavbarC />
      <div className='content'>
        <Home />
        <About />
        <Experience />
        <Project/>
        <Contact/>
      </div>
    </div>

  );
}
