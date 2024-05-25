import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='nav' >
        <nav className='nav-container'>
            <div>
                <h1 style={{color:"whitesmoke"}}>TRAVROAM</h1>
            </div>
            <div className='nav-links'>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
            <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/tour'>Tour</Link></li> 
               
            </ul>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
          </div>
        </nav>
      
    </div>
  )
}

export default Navbar
