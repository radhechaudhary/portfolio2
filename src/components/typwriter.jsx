import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Typewriter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text=["Coder","Web Developer","Backend Developer", "DSA Enthusiat", "Human"]

  useEffect(() => {
    let index = 0;
    let i=0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => text[i].slice(0, index + 1));
      index++;
      if (index === text[i].length){
        setTimeout(()=>{
            i++;
            index=0
            if(i==text.length){
                i=0;
                index=0;
            }
        }, 1000)
      }
      
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-6xl font-bold text-center"
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </motion.h1>
  );
};

export default Typewriter;
