import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact-wrap'>
      <div className='contact-items'>
        <h3>Email: williampena2022@gmail.com</h3>
        <h3>Phone:(929)-368-1917</h3>
        <Link to='https://www.linkedin.com/in/william-pe%C3%B1a-32623115a/'><h3>Linkedin Page</h3></Link>
      </div>
    </div>
  )
}

export default Contact