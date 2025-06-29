import {useState, useEffect} from 'react'
import {motion, useTransform, useScroll} from 'framer-motion'
import image from '../assets/my_image.png'

function About() {
  const {scrollYProgress} = useScroll() 
  const opacity = useTransform(scrollYProgress, [0.95, 1], [0,1]) 
  return (
    <motion.div className={` w-full h-[100vh] fixed flex flex-col  -z-10 items-center top-0 left-0 pt-5 px-5 bg-[#2b2b2b]`}>
        <h1 className='text-2xl font-extrabold mb-10 w-full '> 🤵🏻 About Me....</h1>
        <img className='w-80 rounded-full absolute top-1/2 left-1/2 opacity-30 z-0' style={{transform:'translate(-50%, -50%)'}} src={image}/>

         <div className='w-full  md:w-[600px] lg:w-[700px] border-1 p-5 rounded-2xl border-gray-600 shadow-lg shadow-gray-400  '>
            <h2 className='mb-1 text-[18px] font-bold'>Who am I ?</h2>
            <p>Hi! I'm Mohit Chaudhary, a passionate Full-Stack Developer based in Mathura, Uttar Pradesh with a strong foundation in React, React Native, Node.js, and PostgreSQL. I love crafting clean, efficient code and building scalable applications — whether it's a modern web dashboard or a smooth mobile experience.</p>

            <p>I'm currently focused on creating interactive, real-time apps that blend intuitive UI/UX with robust backend logic. With a solid grip on Data Structures and Algorithms, I ensure that performance and optimization are always part of the solution.</p>

            <p>Beyond code, I enjoy experimenting with new tools, contributing to open-source, and continuously learning to stay ahead in the ever-evolving tech landscape.</p>
            <br/>
            <h2  className='mb-1 text-[18px] font-bold'>🔧 Tech Stack Highlights:-</h2>
            <p>1. Frontend: React.js, Tailwind CSS, HTML5, CSS3</p>

            <p>2. Mobile: React Native</p>

            <p>3. Backend: Node.js, Express.js</p>

            <p>4. Database: PostgreSQL, Firebase</p>

            <p>5. Auth: Google OAuth, JWT</p>

            <p>6. Tools: Git, Railway, Vercel, Expo</p>
        </div>
    </motion.div>
  )
}

export default About