import React from 'react'
import {motion} from 'framer-motion'

function ProjectCard({image, title, desc, link, sr}) {
  return (
    <motion.div className='p-5 border-1 bg-[#1a1a1a] rounded-2xl border-gray-600 flex flex-col gap-1 w-80 md:w-100 z-10'
    initial={{opacity:0, y:50, filter:"drop-shadow(0px 0px 0px #99a1af)"}}
    whileInView={{opacity:1, y:0}}
    whileHover={{filter:"drop-shadow(0px 0px 150px #99a1af)", scale:1.03}}
    transition={{inset:10, duration:0.4, ease:'easeInOut'}}>
        <img className=' w-full rounded-2xl' src={image}/>
        <div className='w- h-[1px] bg-gray-600'></div>
        <div className='h-8 overflow-y-hidden'>
            <motion.div 
            initial={{y:0}}
            whileHover={{y:-32}}
            transition={{ duration: 0.2, ease: 'easeOut' }}>
                <h2 className='font-bold text-xl flex gap-2'>
                    <span className='text-gray-500'>{sr}.</span>
                    {title}
                </h2>
                <h2 className='font-bold text-xl flex gap-2'>
                    <span className='text-gray-500'>{sr}.</span>
                    {title}
                </h2>
            </motion.div>
        </div>
        <div>
            <p className='text-gray-300 text-[14px]'>{desc}</p>
             <a className='text-violet-600' href = {link} target="_blank" rel="noopener noreferrer">{'Visit Now>'}</a>
        </div>
    </motion.div>
  )
}

export default ProjectCard