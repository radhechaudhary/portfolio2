import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

function Contact() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href='mailto:radhechaudhary6398@gmail.com'
      className='fixed bottom-5 right-5 z-50 flex items-center bg-pink-600 rounded-full px-5 py-2 gap-2 cursor-pointer overflow-hidden'
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        width: hovered ? 'auto' : 48,
        backgroundColor: hovered ? 'oklch(59.2% 0.249 0.584)' : 'transparent',
      }}
      transition={{ duration: 0.1, ease: 'easeInOut', stiffness:200 }}
    >
      <FontAwesomeIcon icon={faMessage} style={{ fontSize: 24, color: '#7d5fff', marginLeft:'0' }} />
      {hovered?<motion.p
        className='font-bold whitespace-nowrap text-sm m-0'
        
      >
        Mail Me
      </motion.p>:null}
    </motion.a>
  )
}

export default Contact
