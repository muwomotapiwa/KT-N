import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 6; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 50}%`,
          delay: Math.random() * 5,
          duration: 2 + Math.random() * 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={`static-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="shooting-star"
          style={{
            left: star.left,
            top: star.top,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue/20 blur-3xl"
        style={{ right: '10%', bottom: '20%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}
