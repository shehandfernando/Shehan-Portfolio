import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Starfield() {
  const [stars, setStars] = useState([]);
  const [trail, setTrail] = useState([]);
  const lastSpawnTime = useRef(0);

  // 1. Generate ambient background data nodes
  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 1.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2
      }));
    };
    setStars(generateStars());
  }, []);

  // 2. Interactive Mouse Trail Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      
      // Throttle: Only spawn a new node every 40 milliseconds. 
      // This keeps the animation buttery smooth and prevents browser lag.
      if (now - lastSpawnTime.current < 40) return;
      lastSpawnTime.current = now;

      const newNode = {
        id: now + Math.random(), // Unique ID for React mapping
        x: e.clientX,
        y: e.clientY,
      };

      // Add the new node to the trail array
      setTrail((prev) => [...prev, newNode]);

      // Cleanup: Remove this specific node from the array after 1.5 seconds
      setTimeout(() => {
        setTrail((prev) => prev.filter((node) => node.id !== newNode.id));
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      
      {/* Ambient Background Nodes */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-[#f4f3ea]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1], 
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive Mouse Trail */}
      <AnimatePresence>
        {trail.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full bg-[#f4f3ea]"
            initial={{
              opacity: 0.8,
              scale: 1,
              left: node.x,
              top: node.y,
              width: 3,  // Starting size of the trail node
              height: 3,
              x: "-50%", // Centers the div exactly on the cursor tip
              y: "-50%"
            }}
            animate={{
              opacity: 0,    // Fades out completely
              scale: 0.2,    // Shrinks down to almost nothing
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5, // The "couple of seconds" fade time
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Subtle dark wash to keep text readable */}
      <div className="absolute inset-0 bg-background/40 pointer-events-none"></div>
    </div>
  );
}