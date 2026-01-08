import { motion } from 'framer-motion'

export const HeroBackground = () => (
  <>
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute -top-64 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.28),_rgba(5,4,5,0)_60%)] blur-[140px]"
      aria-hidden="true"
    />
    <motion.span
      animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.08, 1], rotate: [0, 2, -1, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      className="pointer-events-none absolute -bottom-36 left-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.22),_rgba(5,4,5,0)_70%)] blur-[120px]"
      aria-hidden="true"
    />
  </>
)
