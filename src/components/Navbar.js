import React from 'react'
import { Link } from 'react-router-dom'
import Main from './Main'
import Contact from './Contact'
import Resume from './Resume'
import Portfolio from './Portfolio'

import '../css/NavBar.css'



// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header >
    <nav>
      <ul className="App-navbar">
        <li className='App-navbar-logo'><Link to='/'>Scott Foster Development</Link></li>
        <li className='App-navbar-home'><Link to='/'>Home</Link></li>
        <li className='App-navbar-resume'><Link to='/Resume'>Resume</Link></li>
        <li className='App-navbar-contact'><Link to='/Contact'>Contact</Link></li>
        <li className='App-navbar-portfolio'><Link to='/Portfolio'>Portfolio</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
