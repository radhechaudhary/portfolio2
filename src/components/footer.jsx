import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='w-full h-[100vh] bg-[#1a1a1a] flex flex-col  justify-center items-center z-20'>
        <p className='text-gray-400'>Mohit Chaudhary</p>
        <p>Contact📩:- <a href="mailto:radhechaudhary6398@gmail.com" className='font-light text-purple-600 ' >radhechaudhary6398@gmail.com</a></p>
        <a href="https://www.instagram.com/radhe_chaudhary_2k4/" target="_blank" rel="noopener noreferrer" className='font-light text-purple-600 '>Follow me on Instagram <FontAwesomeIcon style={{ fontSize: 14, color:'gray' }} icon={faLinkedin}/> </a>
        <a href="https://www.linkedin.com/in/mohit-chaudhary-5a0002272/" className='font-light text-purple-600 '>Follow me on linkedIn  <FontAwesomeIcon style={{ fontSize: 14, color:'gray' }} icon={faInstagram}/> </a>
    </div>
  )
}

export default Footer