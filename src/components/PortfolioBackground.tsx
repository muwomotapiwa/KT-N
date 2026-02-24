import { motion } from 'framer-motion';

export function PortfolioBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(52,217,185,0.18) 12%, transparent 12%, transparent 50%, rgba(52,217,185,0.18) 50%, rgba(52,217,185,0.18) 62%, transparent 62%, transparent 100%)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating gradient chips */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-56 h-56 rounded-3xl bg-gradient-to-br from-primary/15 to-blue/15 blur-3xl"
          style={{
            top: `${10 + i * 25}%`,
            left: i % 2 === 0 ? '-10%' : '70%',
          }}
          animate={{
            x: [0, i % 2 === 0 ? 30 : -30, 0],
            y: [0, 20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Soft center glow */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-primary/12 blur-3xl"
        style={{ top: '35%', left: '40%' }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
