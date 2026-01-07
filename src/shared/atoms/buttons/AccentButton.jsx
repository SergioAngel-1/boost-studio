import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fluidSizing } from '../../utils/fluidSizing'

const MotionLink = motion(Link)

export const AccentButton = ({ children, href = '#', className = '', icon: Icon }) => {
  const isInternalLink = href.startsWith('/')
  
  const sharedProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: `inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(247,214,76,0.25)] transition-colors duration-300 ${className}`,
    style: { fontSize: fluidSizing.text.xs }
  }

  if (isInternalLink) {
    return (
      <MotionLink to={href} {...sharedProps}>
        {children}
        {Icon ? <Icon className="h-3 w-3" /> : null}
      </MotionLink>
    )
  }

  return (
    <motion.a href={href} {...sharedProps}>
      {children}
      {Icon ? <Icon className="h-3 w-3" /> : null}
    </motion.a>
  )
}

AccentButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.elementType,
}
