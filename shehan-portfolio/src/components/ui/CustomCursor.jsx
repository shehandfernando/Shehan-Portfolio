import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Track mouse coordinates
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Detect if mouse is over a clickable element
    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if the target or its parent is a link or button
      if (target.closest('a') || target.closest('button') || target.closest('input')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* 1. The Core Dot (Tracks Instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 4, // Offset by half the width to center it
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1, // Fades out when hovering a link
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />

      {/* 2. The Outer Ring (Smooth Spring Physics) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/40 rounded-full pointer-events-none z-[100] flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 16, // Offset by half the width
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1, // Expands when hovering over a link
          backgroundColor: isHovering ? 'rgba(244,243,234, 0.1)' : 'rgba(244,243,234, 0)',
          borderColor: isHovering ? 'rgba(244,243,234, 0.8)' : 'rgba(244,243,234, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}