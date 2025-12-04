import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

function Contact() {
  const [hovered, setHovered] = useState(false)
  const [width, setWidth] = useState('48')


  return (
    <motion.a
      href='mailto:radhechaudhary6398@gmail.com'
      layout
      className='fixed bottom-5 right-5 z-50 flex items-center rounded-full px-5 py-2 gap-2 cursor-pointer overflow-hidden'
      onHoverStart={() => {setHovered(true);setWidth("auto")}}
      onHoverEnd={() => {setHovered(false);setWidth('48')}}
      animate={{
        width: width,
        backgroundColor: hovered ? 'oklch(59.2% 0.249 0.584)' : 'transparent',
      }}
      transition={{ duration: 0.1, ease: 'easeInOut', stiffness:200 }}>
      <FontAwesomeIcon icon={faMessage} style={{ fontSize: 24, color: '#7d5fff', marginLeft:'0' }} />
      {hovered?<p
        className='font-bold whitespace-nowrap text-sm m-0'>
        Mail Me
      </p>:null}
    </motion.a>
  )
}

export default Contact
