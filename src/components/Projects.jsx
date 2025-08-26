import React from 'react'
import ProjectCard from './projectCard'
import EBS from '../assets/EBS.png'
import Hotelier from '../assets/Hotelier.png'
import chat from '../assets/chatpage.png'
import Ai from '../assets/Ai.png'
import Keeper from '../assets/keeper-app.png'
import {motion, useScroll, useTransform} from 'framer-motion'
import bg from '../../public/projects_bg.png'

 const projects=[
        {name:'Hotelier', photo:Hotelier, link:" https://github.com/radhechaudhary/Hotelier.git", description:"An ultimate System for managing hotels"},
        {name:'Ai Assistant', photo:Ai, link:"https://ai-assistant-nine-bice.vercel.app/", description:"This a vocal Ai assistant using google gemini"},
        {name:"Let's Chat", photo:chat, link:"https://chat-app-frontend-two-gold.vercel.app/login", description:"Full fledge multi tier messaging web application"},
        {name:'Electricity Billing System', photo:EBS, link:"", description:"Semi automated billing system for electricity company and  consumers"},
        {name:'Keeper', photo:Keeper, link:"https://keeperappproject.vercel.app/", description:"A react application for saving Notes in it"}
    ]

function Projects() {
   const scrollRef = React.useRef(null)
   const {scrollYProgress} = useScroll({
    target:scrollRef,
    offset:['start 50%', '50% 50%']
   })
   const opacity = useTransform(scrollYProgress, [0,0.5], [0.1,1]);
   const scale = useTransform(scrollYProgress, [0,0.5], [1.5, 1])
   const rotate = useTransform(scrollYProgress, [0,0.5], [20,0])
   const y = useTransform(scrollYProgress, [0,0.5], [300, 0])
    return (
        <div ref = {scrollRef} className='overflow-hidden z-10 pb-10'>
            <motion.div className='w-full md:flex  flex-col hidden items-center'>
                <div className=' w-full absolute h-full opacity-[0.6] pb-10' style={{backgroundImage:`url(${bg})`, backgroundSize:'cover'}}/>
                <h1 className='text-2xl font-extrabold mb-10 w-full mt-10 z-10'> 👩🏻‍💻 My Works....</h1>
                <motion.div className='flex gap-20 flex-wrap justify-center opacity-10'
                transition={{ease:'easeIn'}}
                style={{opacity: opacity, scale:scale, rotateX:rotate, rotateY:rotate, rotateZ:rotate}}>
                    {projects.map((project, index)=>{
                        return  <ProjectCard key={index} title={project.name} image={project.photo} desc={project.description} link={project.link} sr={index+1} />
                    })}
                </motion.div>
            </motion.div>
            <motion.div className='w-full flex md:hidden flex-col items-center'>
                <div className=' bg-cover  w-full absolute h-full opacity-[0.6] pb-10'/>
                <h1 className='text-2xl font-extrabold mb-10 w-full mt-10 z-10'> 👩🏻‍💻 My Works....</h1>
                <motion.div className='flex gap-20 flex-wrap justify-center '
                transition={{ease:'easeIn'}}
                >
                    {projects.map((project, index)=>{
                        return  <ProjectCard key={index} title={project.name} image={project.photo} desc={project.description} link={project.link} sr={index+1} />
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects