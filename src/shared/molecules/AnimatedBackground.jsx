import { motion } from 'framer-motion'

export const AnimatedBackground = () => (
  <motion.div
    className="pointer-events-none absolute inset-0 -z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    aria-hidden="true"
  >
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(circle at center, rgba(255,215,0,0.18) 0%, rgba(2,2,2,0) 55%), linear-gradient(90deg, rgba(255,215,0,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(255,215,0,0.08) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 180px 180px, 180px 180px',
        backgroundPosition: 'center, 0px 0px, 0px 0px',
      }}
      animate={{ backgroundPosition: ['center, 0px 0px, 0px 0px', 'center, 120px 80px, 120px 80px'] }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
    />
  </motion.div>
)
