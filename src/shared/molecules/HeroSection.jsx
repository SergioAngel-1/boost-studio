import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

export const HeroSection = ({ eyebrow, title, description, className = '', headingId }) => (
  <div className={`mx-auto flex w-full max-w-5xl flex-col items-center text-center ${className}`}>
    {eyebrow ? (
      <motion.p
        {...fadeUp(0)}
        className="text-xs uppercase tracking-[0.5em] text-[#FFD700]/80"
      >
        {eyebrow}
      </motion.p>
    ) : null}
    <motion.h1
      id={headingId}
      {...fadeUp(0.15)}
      className="mt-6 text-[2.8rem] font-semibold leading-[1.05] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[5.4rem]"
    >
      {title}
    </motion.h1>
    {description ? (
      <motion.p
        {...fadeUp(0.3)}
        className="mt-10 max-w-3xl text-base leading-relaxed text-slate-300/85 sm:text-lg"
      >
        {description}
      </motion.p>
    ) : null}
  </div>
)

HeroSection.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  headingId: PropTypes.string,
}
