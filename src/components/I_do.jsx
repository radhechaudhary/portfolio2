import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';

function I_do() {
   const scrollRef = useRef()
  const {scrollYProgress} = useScroll({target: scrollRef,
    offset: ['start 50%', 'end 100%'],
  });
  var opacity =useTransform(scrollYProgress, [0,1], [0,1])

  return (
    
    <motion.div ref = {scrollRef} style={{opacity}} className='w-full flex flex-col relative items-center mb-10 '>
      <h1 className='text-2xl font-extrabold mb-10 w-full '>💼 What I Do....</h1>
      <div className='w-full  md:w-[600px] lg:w-[700px] border-1 p-5 rounded-2xl border-gray-600 shadow-lg shadow-gray-400  '>
        <h2 className='mb-1 text-[18px] font-bold'>🚀 Full-Stack Web Development</h2>
        <p className='mb-5 text-[14px] text-gray-200'>I build scalable, responsive web applications using modern technologies like React, Node.js, Express, and PostgreSQL. From frontend UI to backend APIs, I deliver complete, functional systems.
          📱 Mobile App Development
          Using React Native, I create smooth and efficient mobile applications for Android. My focus is on clean UI, offline access, and real-time features like chat, video calls, and notifications.
        </p>
        <h2 className='mb-1 text-[18px] font-bold'>🧠 Problem Solving & DSA</h2>
        <p className='mb-5 text-[14px] text-gray-200'>I regularly practice Data Structures & Algorithms to improve performance and problem-solving skills. I’m comfortable with arrays, trees, graphs, recursion, and dynamic programming.</p>
        <h2 className='mb-1 text-[18px] font-bold'>☁️ API Integration & Backend Logic</h2>
        <p className='mb-5 text-[14px] text-gray-200'>I design secure, RESTful APIs, implement JWT-based authentication, and integrate third-party services like Google Sign-In, WebRTC, Socket.io, and cloud storage solutions like Google Drive.</p>

        <h2 className='mb-1 text-[18px] font-bold'>🔒 Secure & Optimized Systems</h2>
        <p className='mb-5 text-[14px] text-gray-200'>I focus on writing clean, modular code with attention to performance, data security, and user privacy — especially in applications handling sensitive data like customer records or payments.</p>

        <h2 className='mb-1 text-[18px] font-bold'>🎨 UI/UX Focus</h2>
        <p className='mb-5 text-[14px] text-gray-200'>I care deeply about intuitive design. I use Tailwind CSS and modern design systems to ensure a smooth, responsive, and visually appealing user experience.</p>

      </div>
    </motion.div>
  )
}

export default I_do