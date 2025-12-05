import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';

function I_do() {
  const scrollRef = useRef()
  const scrollRef2 = useRef()
  const {scrollYProgress:y} = useScroll({target: scrollRef,
    offset: ['start 50%', 'end 100%'],
  });
  const {scrollYProgress:y2} = useScroll({target: scrollRef2,
    offset: ['start 50%', 'end 100%'],
  });
  var opacity =useTransform(y, [0,1], [0,1])
  var scale = useTransform(y, [0,1],[0.9, 1])
  var opacity2 =useTransform(y2, [0,0.5], [0,1])


  return (
    <>
    <motion.div ref = {scrollRef} transition={{type:'spring'}} style={{opacity, scale}} className='hidden w-full md:flex flex-col relative items-center mb-10 px-5'>
      <h1 className='text-2xl font-extrabold mb-10 w-full '>💼 What I Do....</h1>
      <div className='w-full md:w-[600px] lg:w-[700px] border-1 p-5 rounded-2xl border-gray-600 shadow-lg shadow-gray-400'>

        <h2 className='mb-1 text-[18px] font-bold'>🎓 MCA Student & Developer</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          MCA student at <strong>GGSIPU (Main Campus)</strong>. I build fast, scalable applications and I'm learning
          <strong> Machine Learning</strong> and <strong>GenAI</strong>.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>🚀 Full-Stack Development</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I create responsive, optimized web apps using React, Node.js, Express, and PostgreSQL with a focus on clean structure and performance.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>📱 Mobile Apps</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I build smooth React Native apps with features like chat, audio/video calls, and offline support.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>🧠 DSA & Problem Solving</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I practice DSA regularly—arrays, trees, graphs, recursion, and DP—to improve problem-solving skills.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>🔐 Backend, APIs & Auth</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I design secure APIs, implement JWT/OAuth authentication, and work with WebRTC, Socket.io, and cloud integrations.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>🎨 UI/UX</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I build clean, intuitive UIs using React and Tailwind with attention to smooth interactions and responsive layouts.
        </p>

      </div>

    </motion.div>
    <motion.div ref = {scrollRef2} style={{opacity:opacity2}} className='flex md:hidden w-full  flex-col relative items-center mb-10 px-5'>
      <h1 className='text-2xl font-extrabold mb-10 w-full '>💼 What I Do....</h1>
      <div className='w-full md:w-[600px] lg:w-[700px] border-1 p-5 rounded-2xl border-gray-600 shadow-lg shadow-gray-400'>

        <h2 className='mb-1 text-[18px] font-bold'>🎓 MCA Student & Developer</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          MCA student at <strong>GGSIPU (Main Campus)</strong>. I build fast, scalable applications and I'm learning
          <strong> Machine Learning</strong> and <strong>GenAI</strong>.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>🚀 Full-Stack Development</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I create responsive, optimized web apps using React, Node.js, Express, and PostgreSQL with a focus on clean structure and performance.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>📱 Mobile Apps</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I build smooth React Native apps with features like chat, audio/video calls, and offline support.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>🧠 DSA & Problem Solving</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I practice DSA regularly—arrays, trees, graphs, recursion, and DP—to improve problem-solving skills.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>🔐 Backend, APIs & Auth</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I design secure APIs, implement JWT/OAuth authentication, and work with WebRTC, Socket.io, and cloud integrations.
        </p>

        <h2 className='mb-1 text-[18px] font-bold'>🎨 UI/UX</h2>
        <p className='mb-5 text-[14px] text-gray-200'>
          I build clean, intuitive UIs using React and Tailwind with attention to smooth interactions and responsive layouts.
        </p>

      </div>

    </motion.div>
    </>
  )
}

export default I_do