import { motion } from 'framer-motion'
import { fluidSizing } from '../../../utils/fluidSizing'

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
}

export const HeroContent = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
    }}
    className="flex flex-col gap-6 md:gap-8"
  >
    {children}
  </motion.div>
)

export const HeroLabel = ({ children }) => (
  <motion.span
    variants={fadeInUp}
    className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-300 md:text-xs md:tracking-[0.45em]"
  >
    {children}
  </motion.span>
)

export const HeroTitle = ({ children }) => (
  <motion.h1
    id="hero-heading"
    variants={fadeInUp}
    className="font-semibold tracking-tight"
    style={{ fontSize: fluidSizing.heading.h1, lineHeight: '1.1' }}
  >
    {children}
  </motion.h1>
)

export const HeroDescription = ({ children }) => (
  <motion.p
    variants={fadeInUp}
    className="leading-relaxed text-slate-300 lg:pr-8"
    style={{ fontSize: 'clamp(0.75rem, 0.75rem + 0.125vw, 0.9rem)', lineHeight: '1.5' }}
  >
    {children}
  </motion.p>
)
