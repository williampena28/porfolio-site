import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Nav = () => {
  return (
    <div className='nav-bar'>
      <Link to='/'><h3 className='name'>William Peña</h3></Link>
        <nav className='nav-items'>
            <Link to='/about_me'><p>About me</p></Link>
            <Link to='/contact'><p>Contact</p></Link>
            <Link to='/projects'><p>Projects</p></Link>
            <Link to='/education'><p>Education</p></Link>
        </nav>
    </div>
  )
}

export default Nav