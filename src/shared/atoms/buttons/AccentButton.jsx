import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useGTM } from '../../hooks/useGTM'
import { fluidSizing } from '../../utils/fluidSizing'

const MotionLink = motion.create(Link)

export const AccentButton = ({ children, href = '#', className = '', icon: Icon }) => {
  const isInternalLink = href.startsWith('/')
  const location = useLocation()
  const { trackEvent } = useGTM()

  const handleClick = () => {
    trackEvent('cta_click', {
      cta_text: typeof children === 'string' ? children : 'CTA Button',
      cta_url: href,
      cta_location: location.pathname,
    })
  }
  
  const sharedProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    onClick: handleClick,
    className: `inline-flex items-center rounded-full bg-[#FFD700] font-semibold uppercase text-black shadow-[0_0_40px_rgba(247,214,76,0.25)] transition-colors duration-300 ${className}`,
    style: { 
      fontSize: fluidSizing.text.sm,
      paddingLeft: fluidSizing.spacing.lg,
      paddingRight: fluidSizing.spacing.lg,
      paddingTop: fluidSizing.spacing.sm,
      paddingBottom: fluidSizing.spacing.sm,
      gap: fluidSizing.spacing.xs,
      letterSpacing: fluidSizing.tracking.button,
    },
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
