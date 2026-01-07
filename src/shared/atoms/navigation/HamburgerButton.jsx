import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
    aria-expanded={isOpen}
    className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:border-[#FFD700]/60 hover:bg-[#FFD700]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 md:hidden"
  >
    <div className="flex h-5 w-5 flex-col items-center justify-center gap-1">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="h-0.5 w-full rounded-full bg-current"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="h-0.5 w-full rounded-full bg-current"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="h-0.5 w-full rounded-full bg-current"
      />
    </div>
  </button>
)

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
