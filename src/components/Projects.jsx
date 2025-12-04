import React, { useEffect } from 'react'
import ProjectCard from './projectCard'
import EBS from '../assets/EBS.png'
import Hotelier from '../assets/Hotelier.png'
import chat from '../assets/chatpage.png'
import Ai from '../assets/Ai.png'
import Keeper from '../assets/keeper-app.png'
import spam from '../assets/spam_detection.png'
import {motion} from 'framer-motion'
import Git_structure from '../assets/git_structure.png'
import { useState } from 'react'

    const all_projects=[
        {name:'Hotelier', tags:["react", "javascript", "node.js", "framer-motion", "stateless authenitication", "postgreSql"], photo:Hotelier, link:" https://github.com/radhechaudhary/Hotelier.git", description:"An ultimate System for managing hotels", desc:"A responsive web application built with React that streamlines hotel operations. It allows users to manage room bookings, guest information, and billing efficiently. The system features an intuitive interface for adding, updating, and tracking reservations, ensuring smooth check-ins and check-outs. With real-time data handling and a clean UI, it simplifies day-to-day hotel management tasks."},
        {name:'Spam Detection', tags:["skLearn", "python", "react", "javascript", "node.js"], photo:spam, link:"https://github.com/radhechaudhary/spam-detection", description:"A machine learning based project to detect categorize mails", desc:"A Machine learning project on scam detection system using the naive-bayes classification algorithm implemented using sklearn with the clean UI build using javascript"},
        {name:'Git-Structure', tags:["react", "javascript", "node.js", "Gemini", "framer-motion"], photo:Git_structure,  link:"https://git-structure.vercel.app/", description:"Web Application to destructure your github repo", desc:"A React-based web application that helps developers visualize and manage Git repository structure and branching workflows. It provides an intuitive interface to understand branches, commits, and merges, making Git concepts easier to follow. Ideal for learning, project planning, and tracking development progress in a clear, interactive way."},
        {name:'Ai Assistant', tags:["react", "javascript", "node.js", "Gemini"], photo:Ai, link:"https://ai-assistant-nine-bice.vercel.app/", description:"This a vocal Ai assistant using google gemini", desc:"A responsive web application built with React that functions as an intelligent assistant. It allows users to ask questions in voice, get suggestions, and receive automated voice over responses in real-time. Designed with a clean UI, it integrates AI capabilities of Gemini to provide a smart, interactive, and user-friendly experience."},
        {name:"Let's Chat", tags:["react", "javascript", "node.js", "JWT", "postgreSql"], photo:chat, link:"https://chat-app-frontend-two-gold.vercel.app/login", description:"Full fledge multi tier messaging web application", desc:"A real-time messaging application built with React that allows users to chat instantly, create rooms, and share messages seamlessly. With a responsive interface and smooth interactions, it provides a fast, intuitive, and engaging communication experience."},
        {name:'Electricity Billing System', tags:["react", "javascript", "node.js"], photo:EBS, link:"https://github.com/radhechaudhary/EBS", description:"Semi automated billing system for electricity company and  consumers", desc:"A web application built with React to manage electricity billing for customers. It allows users to generate bills, track usage, and maintain customer records efficiently through a clean and responsive interface, simplifying day-to-day billing operations."},
        {name:'Keeper', tags:["react", "javascript", "node.js"], photo:Keeper, link:"https://keeperappproject.vercel.app/", description:"A react application for saving Notes in it", desc:"A web Application to keep alll your notes in one place like sticking on the board. i has a clean UI for enhanced usability."}
        
    ]

function Projects() {
   const scrollRef = React.useRef(null)

   const [isHovered, setIsHovered] = useState(false);
   const [projects, setProjects] = useState(all_projects.slice(0,6))
   const [vh, setVh] = useState(window.innerHeight);
   const [currCard, setCurrCard] = useState(null)
   const [expanded, setExpanded] = useState(false)

  // Update vh on window resize
    useEffect(() => {
        const handleResize = () => setVh(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function showMore(){
        setProjects(all_projects)
        setExpanded(true)
    }
    function showLess(){
        setProjects(all_projects.slice(0,6))
        setExpanded(false)
    }
    return (
        <motion.div  ref = {scrollRef} className='my-works z-10 pb-10 relative px-5'>
            <motion.div className=' works-flex-box w-full md:flex  flex-col hidden items-center'>
                <h1 className='text-2xl font-extrabold mb-10 w-full mt-10 z-10'> 👩🏻‍💻 My Works....</h1>
                <motion.div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center'
                    transition={{ease:'easeIn'}}
                >
                    {projects.map((project, index)=>{
                        return <ProjectCard key={index} title={project.name} image={project.photo} desc={project.description} link={project.link} sr={index+1} setCurrCard = {setCurrCard}/>
                    })}
                </motion.div>
            </motion.div>
            <motion.div className=' works-flex-box w-full flex md:hidden flex-col items-center'>
                <div className=' bg-cover  w-full absolute h-full pb-10'/>
                <h1 className='text-2xl font-extrabold mb-10 w-full mt-10 z-10'> 👩🏻‍💻 My Works....</h1>
                <motion.div className='flex gap-10 flex-wrap justify-center '
                transition={{ease:'easeIn'}}
                >
                    {projects.map((project, index)=>{
                        return  <ProjectCard key={index} title={project.name} image={project.photo} desc={project.description} link={project.link} sr={index+1} setCurrCard = {setCurrCard} />
                    })}
                </motion.div>
            </motion.div>
            <div className=' w-full flex justify-center mt-5'>
                {expanded?<button className='bg-gray-600 active:scale-95 p-1 rounded-md cursor-pointer' onClick={showLess}>show less</button>:
                <button className='bg-gray-600 active:scale-95  p-1 rounded-md cursor-pointer' onClick={showMore}>show more</button>}
            </div>
            
            {currCard!==null?
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className='bg-black/50 flex justify-center fixed inset-0 items-center w-full h-screen z-20 backdrop-blur-sm p-5' onClick={()=>setCurrCard(null)}>
                <motion.div className="flex isolate"
                    layoutId={`project-card-${currCard+1}`}
                    transition={{ layout: { type: 'spring' } }}>
                    <motion.div
                        layoutId={`project-card-body-${currCard+1}`}
                        transition={{layout: { type: 'spring'}}}
                        className="p-3 bg-[#1a1a1a] rounded-2xl border border-gray-600 flex flex-col gap-1 w-full md:w-100 z-10 cursor-pointer">
                        {/* Image */}
                        <motion.img
                            src={projects[currCard].photo}
                            className="w-full rounded-2xl"
                            variants={{
                            hover: { scale: 1.1 }, 
                            }}
                            transition={{ duration: 0.4}}
                            style={{ z:30}}
                        />
                    
                        {/* Divider */}
                        <div className="h-[1px] bg-gray-600" />
                    
                        {/* Title with hover slide */}
                        <div className="h-8 overflow-y-hidden" style={{ transform: "translateZ(60px)" }}>
                            <motion.div>
                            <h2 className="font-bold text-xl flex gap-2">
                                {projects[currCard].name}
                            </h2>
                            </motion.div>
                        </div>

                        <div className='tags flex gap-2 w-full flex-wrap'>
                            {projects[currCard].tags.map((tag, index)=>{
                                return <div className='bg-gray-400 text-white text-xs p-[3px] rounded-sm'>
                                    {tag}
                                </div>
                            })}
                        </div>
                    
                        {/* Description */}
                        <motion.div layoutId={`project-card-desc-${currCard+1}`} style={{ transform: "translateZ(40px)" }} transition={{layout: { type: 'spring', stiffness:160, damping:18}}}>
                            <p className="text-gray-300 text-[14px]">{projects[currCard].desc}</p>
                            <a
                            className="text-violet-600"
                            href={projects[currCard].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            {"Visit Now >"}
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>:null}
        </motion.div>
    )
}

export default Projects