import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fluidSizing } from '../../utils/fluidSizing'

const linkBase = 'relative px-6 py-1 font-semibold uppercase tracking-[0.38em] transition-colors duration-300'

export const NavItem = ({ to, label, isActive, isMarker, onMouseEnter, onMouseLeave, onClick, forwardRef }) => (
  <div ref={forwardRef} className="relative">
    <NavLink
      to={to}
      end={to === '/'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`${linkBase} ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
      style={{ fontSize: fluidSizing.text.xs }}
    >
      {isMarker ? (
        <>
          <motion.span
            layoutId="nav-marker-glow"
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="absolute inset-x-[-6px] -inset-y-1 rounded-full bg-[#FFD700]/10 blur-[6px]"
          />
          <motion.span
            layoutId="nav-marker-core"
            transition={{ type: 'spring', stiffness: 360, damping: 34 }}
            className="absolute inset-x-[-4px] top-1/2 h-4 -translate-y-1/2 rounded-full bg-[#FFD700]/6"
          />
        </>
      ) : null}
      <span className="relative z-30">{label}</span>
    </NavLink>
  </div>
)

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isMarker: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  forwardRef: PropTypes.func,
}
