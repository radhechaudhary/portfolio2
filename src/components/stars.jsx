import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";




function MovingStars(props) {
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
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y = -0.002 * position.x; // slow rotation
    ref.current.rotation.x = -0.002 * position.y;
    
  });
  return <Stars ref={ref} {...props} />;
}


export default function StarfieldBackground() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "#2b2b2b",
        padding:0,
        margin:0
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      {/* Drei's Stars component handles geometry + movement for us */}
      <MovingStars
        radius={50}       // how far stars go
        depth={100}        // z-depth
        count={10000}      // number of stars
        factor={3}        // size multiplier
        saturation={1}    // color saturation
        fade              // soft fade at edges
      />
    </Canvas>
  );
}
