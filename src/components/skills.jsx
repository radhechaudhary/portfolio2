import {useRef, useEffect} from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'
import css from '../assets/css.png'
import js from '../assets/js.png'
import html from '../assets/html.png'
import mysql from '../assets/mysql.png'
import node from '../assets/node-js.png'
import react from '../assets/react.png'


function Skills(props) {
   const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.9,margin: "0px 0px", once:true});
    const controls = useAnimation();
    const skills=[
      {name:'javascript', level:0.85, experience: 2, icon:js}, 
      {name:'react', level:0.7, experience: 1, icon:react}, 
      {name:"html", level:1, experience: 3, icon:html}, 
      {name:'css', level:1, experience: 3, icon:css}, 
      {name:'node', level:0.8, experience: 1.5, icon:node}, 
      {name:"SQL", level:0.9, experience: 1.5, icon:mysql}
    ]
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
      else{
        controls.start('hidden')
      }
    }, [inView, controls]);
  return (
    <section className='w-full h-[100vh] px-5 pt-5 bg-[#3d3d3d]' id="skills">
     <h1 className='text-2xl font-extrabold mb-10 w-full '>💼 My Skills....</h1>
      <motion.div ref={ref} className='flex gap-10 flex-wrap mt-40' >
          {skills.map((skill)=>{
            return (
              <div className="flex gap-2 w-[350px] md:w-[450px]">
                <div className='flex flex-col items-center'>
                  <img style={{width:'30px'}} src={skill.icon}/>
                 
                </div>
                <div className='flex-1 h-[40px] p-2 border-1 border-gray-400 rounded-md'>
                  <motion.div 
                  variants={{hidden:{width:0, transition:{delay:0.5}}, visible:{width:`${skill.level*100}%`, transition:{ease:'easeOut', duration:0.8}}}}
                  initial='hidden'
                  animate={controls}
                  className='bg-gray-100 text-gray-800 pl-2'>
                    {`${skill.level*100}%`}
                  </motion.div>
                </div>
              </div>)
          })}
            
        
      </motion.div>
    </section>
  )
}

export default Skills
