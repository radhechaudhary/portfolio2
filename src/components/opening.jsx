import React from 'react'
import {motion} from 'framer-motion'

function Opening() {
  return (
    <motion.div initial={{height:0}} animate={{height:"100vh"}} exit={{height:0}} transition={{delay:0.3, duration:0.5}}
    className='w-full h-[100vh] bg-[#2b2b2b] flex justify-center items-center z-[10] overflow-hidden'>
      <h1 className='text-2xl text-violet-600'>Welcome</h1>
    </motion.div>
  )
}

export default Opening
