import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const AnimatedBeam = ({ beamData }) => {
  if (!beamData) return null

  return (
    <svg
      style={{ 
        width: beamData.width,
        height: beamData.height,
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        overflow: 'visible'
      }}
    >
      <defs>
        <linearGradient 
          id="line-gradient" 
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="rgba(255,215,0,0)" />
          <stop offset="10%" stopColor="rgba(255,215,0,0.3)" />
          <stop offset="50%" stopColor="rgba(255,215,0,1)" />
          <stop offset="90%" stopColor="rgba(255,215,0,0.3)" />
          <stop offset="100%" stopColor="rgba(255,215,0,0)" />
        </linearGradient>
      </defs>
      
      {/* Línea completa de fondo */}
      <line
        x1={beamData.fullLine.x1}
        y1={beamData.fullLine.y}
        x2={beamData.fullLine.x2}
        y2={beamData.fullLine.y}
        stroke="rgba(255,215,0,0.15)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      
      {/* Línea activa con gradiente oblongo */}
      <motion.line
        x1={beamData.activeLine.x1}
        y1={beamData.activeLine.y}
        x2={beamData.activeLine.x2}
        y2={beamData.activeLine.y}
        stroke="url(#line-gradient)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={false}
        animate={{
          x1: beamData.activeLine.x1,
          x2: beamData.activeLine.x2
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.25, 1, 0.35, 1],
          type: 'spring',
          stiffness: 120,
          damping: 20
        }}
        style={{
          filter: 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.5))'
        }}
      />
    </svg>
  )
}

AnimatedBeam.propTypes = {
  beamData: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fullLine: PropTypes.shape({
      x1: PropTypes.number,
      x2: PropTypes.number,
      y: PropTypes.number,
    }),
    activeLine: PropTypes.shape({
      x1: PropTypes.number,
      x2: PropTypes.number,
      y: PropTypes.number,
    }),
  }),
}
