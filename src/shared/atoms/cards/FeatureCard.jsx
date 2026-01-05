import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const FeatureCard = ({ title, description, delay = 0, className = '' }) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    className={`group relative flex flex-col gap-6 rounded-[2.6rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-300 hover:border-[#FFD700]/80 ${className}`}
  >
    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]/75">{title}</span>
    <p className="text-sm leading-relaxed text-slate-300/85">{description}</p>
    <span className="pointer-events-none absolute inset-x-8 bottom-8 h-[2px] scale-x-0 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
  </motion.article>
)

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
}
