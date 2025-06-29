import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'


function Empty() {
    const ref = React.useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start center', 'end end']
    })
    const opacity = useTransform(scrollYProgress, [0, 1], [1,0])
  return (
    <motion.div ref={ref}  className=' w-full h-[100vh] bg-transparent flex justify-center items-center'>
       
    </motion.div>
  )
}

export default Empty