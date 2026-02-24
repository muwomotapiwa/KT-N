import { motion } from 'framer-motion';

export function AboutBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft aurora bands */}
      <motion.div
        className="absolute w-[140%] h-40 -left-20 top-20 bg-gradient-to-r from-primary/18 via-blue/10 to-primary-dark/14 blur-3xl"
        animate={{ x: ['0%', '-4%', '0%'], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[120%] h-36 -right-10 top-40 bg-gradient-to-r from-blue/18 via-primary/12 to-blue-light/14 blur-3xl"
        animate={{ x: ['0%', '3%', '0%'], opacity: [0.16, 0.26, 0.16] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.18,
          }}
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
        />
      ))}
    </div>
  );
}
