import React, {useState, useEffect} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import Typewriter from './typwriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react'

function Landing() {
    const scrollRef = useRef(null)
    const vh = document.sc
    const {scrollYProgress} = useScroll();
    var opacity =useTransform(scrollYProgress, [0,0.1], [1,0])

    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const oneVH = window.innerHeight;

        const unsubscribe = scrollY.on('change', (latest) => {
        setIsVisible(latest < oneVH); // unmount if scrolled past 1vh
        });

        return () => unsubscribe(); // clean up listener
    }, [scrollY]);
    
  return (
    <>
    {isVisible?<motion.div ref = {scrollRef} style={{opacity}} className='h-[100vh] w-full flex justify-center items-center z-10  fixed top-0 left-0'>
        <motion.div  className='flex flex-col items-center'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:2}} className=''>
                <h2 className='text-[20px] text-center text-gray-400 font-normal m-0'>I am Mohit Chaudhary</h2>
                <Typewriter/>
            </motion.div>
            <motion.div initial={{x:-2000}} animate={{x:0}} transition={{delay:1}} className='mt-5 flex justify-center gap-3'>
                <a href="https://www.instagram.com/radhe_chaudhary_2k4/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ fontSize: 24, color:'gray' }} icon={faInstagram}/></a>
                <a href="https://github.com/radhechaudhary" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ fontSize: 24, color:"GrayText" }}/></a>
                <a href="https://www.linkedin.com/in/mohit-chaudhary-5a0002272/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 24, color:'GrayText' }}/></a>
            </motion.div>
        </motion.div>
        <div className='bg-[url("./bg_landing.png")] bg-center w-full absolute h-full -z-10 opacity-[0.07]'/>
    </motion.div>:null}
    </>
  )
}

export default Landing