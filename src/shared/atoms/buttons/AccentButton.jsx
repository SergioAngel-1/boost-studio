import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { fluidSizing } from '../../utils/fluidSizing'

export const AccentButton = ({ children, href = '#', className = '', icon: Icon }) => (
  <motion.a
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    href={href}
    className={`inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(247,214,76,0.25)] transition-colors duration-300 ${className}`}
    style={{ fontSize: fluidSizing.text.xs }}
  >
    {children}
    {Icon ? <Icon className="h-3 w-3" /> : null}
  </motion.a>
)

AccentButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.elementType,
}
