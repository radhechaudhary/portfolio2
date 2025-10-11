import React, { useEffect } from 'react'
import ProjectCard from './projectCard'
import EBS from '../assets/EBS.png'
import Hotelier from '../assets/Hotelier.png'
import chat from '../assets/chatpage.png'
import Ai from '../assets/Ai.png'
import Keeper from '../assets/keeper-app.png'
import {AnimatePresence, motion, useScroll, useTransform} from 'framer-motion'
import bg from '../../public/projects_bg.png'
import Git_structure from '../assets/git_structure.png'
import { useState } from 'react'

    const projects=[
        {name:'Hotelier', photo:Hotelier, link:" https://github.com/radhechaudhary/Hotelier.git", description:"An ultimate System for managing hotels"},
        {name:'Git-Structure', photo:Git_structure,  link:"https://git-structure.vercel.app/", description:"Web Application to destructure your github repo"},
        {name:'Ai Assistant', photo:Ai, link:"https://ai-assistant-nine-bice.vercel.app/", description:"This a vocal Ai assistant using google gemini"},
        {name:"Let's Chat", photo:chat, link:"https://chat-app-frontend-two-gold.vercel.app/login", description:"Full fledge multi tier messaging web application"},
        {name:'Electricity Billing System', photo:EBS, link:"", description:"Semi automated billing system for electricity company and  consumers"},
        {name:'Keeper', photo:Keeper, link:"https://keeperappproject.vercel.app/", description:"A react application for saving Notes in it"}
    ]

const descriptions =[
    {heading:'Hotelier', desc:"A responsive web application built with React that streamlines hotel operations. It allows users to manage room bookings, guest information, and billing efficiently. The system features an intuitive interface for adding, updating, and tracking reservations, ensuring smooth check-ins and check-outs. With real-time data handling and a clean UI, it simplifies day-to-day hotel management tasks."},
    {heading:'Git-Structure', desc:"A React-based web application that helps developers visualize and manage Git repository structure and branching workflows. It provides an intuitive interface to understand branches, commits, and merges, making Git concepts easier to follow. Ideal for learning, project planning, and tracking development progress in a clear, interactive way."},
    {heading:'Ai Assistant', desc:"A responsive web application built with React that functions as an intelligent assistant. It allows users to ask questions in voice, get suggestions, and receive automated voice over responses in real-time. Designed with a clean UI, it integrates AI capabilities of Gemini to provide a smart, interactive, and user-friendly experience."},
    {heading:"Let's Chat", desc:"A real-time messaging application built with React that allows users to chat instantly, create rooms, and share messages seamlessly. With a responsive interface and smooth interactions, it provides a fast, intuitive, and engaging communication experience."},
    {heading:"Electricity Billing System", desc:"A web application built with React to manage electricity billing for customers. It allows users to generate bills, track usage, and maintain customer records efficiently through a clean and responsive interface, simplifying day-to-day billing operations."},
    {Heading:"keeper", desc:"A web Application to keep alll your notes in one place like sticking on the board. i has a clean UI for enhanced usability."}
]

function Projects() {
   const scrollRef = React.useRef(null)

   const [isHovered, setIsHovered] = useState(false);
   const [vh, setVh] = useState(window.innerHeight);
   const [desc, setDesc] = useState(0)

  // Update vh on window resize
    useEffect(() => {
        const handleResize = () => setVh(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div ref = {scrollRef} className='overflow-hidden z-10 pb-10 relative px-5'>
            <motion.div className='w-full md:flex  flex-col hidden items-center'>
                <div className=' w-full absolute h-full pb-10'/>
                <h1 className='text-2xl font-extrabold mb-10 w-full mt-10 z-10'> 👩🏻‍💻 My Works....</h1>
                <motion.div className='flex gap-10 flex-wrap justify-around'
                transition={{ease:'easeIn'}}>
                    {projects.map((project, index)=>{
                        return  <ProjectCard key={index} title={project.name} image={project.photo} desc={project.description} link={project.link} sr={index+1} setIsHovered={setIsHovered} setDesc={setDesc}/>
                    })}
                </motion.div>
            </motion.div>
            <motion.div className='w-full flex md:hidden flex-col items-center'>
                <div className=' bg-cover  w-full absolute h-full pb-10'/>
                <h1 className='text-2xl font-extrabold mb-10 w-full mt-10 z-10'> 👩🏻‍💻 My Works....</h1>
                <motion.div className='flex gap-10 flex-wrap justify-center '
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