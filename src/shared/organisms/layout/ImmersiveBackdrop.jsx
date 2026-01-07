import { memo } from 'react'
import { motion } from 'framer-motion'

const glows = [
  {
    className:
      'absolute -top-[26rem] left-0 h-[54rem] w-[54rem] rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.34)_0%,_rgba(14,14,14,0)_70%)] blur-[150px]',
    animate: {
      x: [-10, 8, -6],
      y: [-4, 12, -10],
      opacity: [0.35, 0.6, 0.35],
      scale: [0.9, 1.05, 0.93],
    },
    duration: 28,
  },
  {
    className:
      'absolute -top-[12rem] right-0 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.25)_0%,_rgba(10,10,10,0)_65%)] blur-[140px]',
    animate: {
      x: [12, -6, 10],
      y: [0, 16, -8],
      opacity: [0.28, 0.55, 0.3],
      scale: [0.85, 1, 0.9],
    },
    duration: 32,
  },
  {
    className:
      'absolute bottom-[-22rem] left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.28)_0%,_rgba(8,8,8,0)_70%)] blur-[180px]',
    animate: {
      x: [0, 14, -12],
      y: [6, -6, 8],
      opacity: [0.25, 0.45, 0.25],
      scale: [0.95, 1.08, 0.96],
    },
    duration: 36,
  },
]

const ImmersiveBackdropComponent = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,0,0.08),_transparent_55%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.06),_transparent_60%)]" />
    {glows.map((glow, index) => (
      <motion.span
        key={index}
        initial={{ opacity: glow.animate.opacity?.[0] ?? 0.35, scale: glow.animate.scale?.[0] ?? 1 }}
        animate={glow.animate}
        transition={{ duration: glow.duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        className={glow.className}
      />
    ))}
  </div>
)

export const ImmersiveBackdrop = memo(ImmersiveBackdropComponent)
