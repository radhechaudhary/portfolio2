import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function ProjectCard({ image, title, desc, link, sr, setIsHovered, setDesc }) {
  const ref = useRef(null);

  // motion values for cursor position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // rotate values derived from cursor
  const rotateXRaw = useTransform(y, [0, 1], [30, -30]);
  const rotateYRaw = useTransform(x, [0, 1], [-30, 30]);

  // add spring for smooth transition
  const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;
    x.set(posX);
    y.set(posY);
  };
  return (
    <motion.div className="flex"
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
    <motion.div
      ref={ref}
      className="p-3 bg-[#1a1a1a] rounded-2xl border border-gray-600 flex flex-col gap-1 w-full md:w-100 z-10 cursor-pointer"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={()=>{
        setIsHovered(true)
        setDesc(sr);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0.5);
        y.set(0.5);
        setIsHovered(false)
      }}
      initial={{ opacity: 0, y: 0 }}
      variants={{
        hover: { scale: 1.1 }, 
      }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover='hover'
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      
      {/* Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full rounded-2xl"
        variants={{
          hover: { scale: 1.1 }, 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ z:30}}
      />

      {/* Divider */}
      <div className="h-[1px] bg-gray-600" />

      {/* Title with hover slide */}
      <div className="h-8 overflow-y-hidden" style={{ transform: "translateZ(60px)" }}>
        <motion.div
          
        >
          <h2 className="font-bold text-xl flex gap-2">
            <span className="text-gray-500">{sr}.</span>
            {title}
          </h2>
         
        </motion.div>
      </div>

      {/* Description */}
      <div style={{ transform: "translateZ(40px)" }}>
        <p className="text-gray-300 text-[14px]">{desc}</p>
        <a
          className="text-violet-600"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Visit Now >"}
        </a>
      </div>
    </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
