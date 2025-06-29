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
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <FontAwesomeIcon icon={faMessage} style={{ fontSize: 24, color: '#7d5fff' }} />
      <motion.p
        className='font-bold whitespace-nowrap text-sm'
        initial={{ opacity: 0 , clipPath:'inset(0% 0% 0% 0%)'}}
        animate={{ opacity: hovered ? 1 : 0, clipPath: hovered ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)'}}
        transition={{ duration: 0.2 }}
      >
        Mail Me
      </motion.p>
    </motion.a>
  )
}

export default Contact
