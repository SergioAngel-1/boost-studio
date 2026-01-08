import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

// Animation variants - extracted for better performance and reusability
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: 'spring', 
      stiffness: 180, 
      damping: 24, 
      delay: 0.2 
    }
  }
}

const pulsingRingVariants = {
  animate: {
    opacity: [0.4, 0.68, 0.4],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

const sideGlowVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1.1, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
}

// Visual constants
const COLORS = {
  gold: '#FFD700',
  goldOpacity: {
    border: 'rgba(255, 215, 0, 0.45)',
    ring: 'rgba(255, 215, 0, 0.25)',
    shadow: 'rgba(255, 215, 0, 0.08)',
    glow: 'rgba(255, 215, 0, 0.38)',
    sideGlow: 'rgba(255, 215, 0, 0.35)'
  }
}

/**
 * MethodCore - Circular core component that displays the Boost Method logo
 * 
 * Features:
 * - Responsive sizing (220px → 280px → 360px)
 * - Animated entrance with spring physics
 * - Pulsing ring effect (12s infinite loop)
 * - Background glow with radial gradient
 * - Side glow effect (desktop only)
 * - Optimized for performance with extracted variants
 * 
 * @param {string} className - Optional additional CSS classes
 */
export const MethodCore = ({ className = '' }) => (
  <motion.div
    layout
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    className={`relative flex h-[220px] w-[220px] items-center justify-center overflow-visible rounded-full border border-[#FFD700]/45 bg-black/65 shadow-[0_0_50px_rgba(255,215,0,0.08)] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px] ${className}`}
    role="img"
    aria-label="Núcleo del Método Boost"
  >
    {/* Background glow effect - Creates depth with radial gradient */}
    <div 
      className="absolute inset-10 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.38),_rgba(2,1,1,0.88))] blur-[54px]" 
      aria-hidden="true" 
    />
    
    {/* Method logo image - Main visual element */}
    <img
      src="/Images/Boost_Method.png"
      alt="Logo del Método Boost con anillo dorado"
      loading="lazy"
      decoding="async"
      className="relative h-full w-full rounded-full object-cover p-4"
    />
    
    {/* Animated pulsing ring - Subtle breathing effect */}
    <motion.div
      variants={pulsingRingVariants}
      animate="animate"
      className="pointer-events-none absolute inset-4 rounded-full border border-[#FFD700]/25"
      aria-hidden="true"
    />
    
    {/* Side glow effect - Desktop only, adds directional light */}
    <motion.span
      variants={sideGlowVariants}
      initial="hidden"
      animate="visible"
      className="pointer-events-none absolute -right-12 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.35),_transparent_70%)] blur-[28px] lg:block"
      aria-hidden="true"
    />
  </motion.div>
)

MethodCore.propTypes = {
  className: PropTypes.string,
}

MethodCore.displayName = 'MethodCore'
