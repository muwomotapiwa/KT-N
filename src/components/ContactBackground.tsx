import { motion } from 'framer-motion';

export function ContactBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Signal rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-primary/20 rounded-full"
          style={{
            width: 180 + i * 90,
            height: 180 + i * 90,
            left: '50%',
            top: '25%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}

      {/* Floating pulses */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/40"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 1.5 }}
        />
      ))}
    </div>
  );
}
