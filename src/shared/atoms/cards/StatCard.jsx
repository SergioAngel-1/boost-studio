import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const StatCard = ({ value, label, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    className={`flex flex-col items-start gap-3 sm:items-center ${className}`}
  >
    <span className="text-[2.8rem] font-semibold text-[#FFD700] sm:text-[3.4rem]">{value}</span>
    <span className="text-xs uppercase tracking-[0.4em] text-slate-300/80">{label}</span>
  </motion.div>
)

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
}
