import Landing from './components/landing'
import I_do from './components/I_do'
import Projects from './components/Projects'
import Empty from './components/empty'
import About from './components/About'
import HowICanHelp from './components/help_you'
import Footer from './components/footer'
import Contact from './components/contactButton'
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'


function App(){

  const [position, setPosition] = useState({x:0, y:0});
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
   <div className=' text-white overflow-x-hidden scroll-smooth font-permananet'>
    <motion.div
        className="w-1 h-1 rounded-full bg-[#99a1af] opacity-50 pointer-events-none fixed z-15"
        animate={{
        x: position.x - 0.5, // center the circle
        y: position.y - 0.5,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
      }}
      style={{
        boxShadow: "0 0 70px 70px #99a1af",
      }}
      ></motion.div>
      <div className='bg-[#2b2b2b] pt-[50vh]'>
          <Contact/>
          <Landing/>
          <I_do/>
          <Projects/>
          <HowICanHelp/>
      </div>
      <Empty/>
      <About/>
      <div className='bg-[#2b2b2b]'>
        <Footer/>
      </div>
      
   </div>
  )
}

export default App