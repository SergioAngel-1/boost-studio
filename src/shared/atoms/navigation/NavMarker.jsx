import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const NavMarker = ({ layoutId = 'nav-marker', className = '' }) => (
  <motion.span layoutId={layoutId} transition={{ type: 'spring', stiffness: 360, damping: 32 }} className={className} />
)

NavMarker.propTypes = {
  layoutId: PropTypes.string,
  className: PropTypes.string,
}
