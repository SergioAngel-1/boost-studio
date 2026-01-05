import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { HOME_GROWTH_POINTS } from '../../data/home'
import { fluidSizing } from '../../utils/fluidSizing'

const growthLineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
}

const growthNodeVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (index = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1 + index * 0.25 },
  }),
}

const mobileLineVariants = {
  hidden: { scaleY: 0, opacity: 0, transformOrigin: 'top' },
  visible: {
    scaleY: 1,
    opacity: 1,
    transformOrigin: 'top',
    transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
}

const pathD = 'M0 240 C 200 120, 360 120, 533 240 C 706 360, 893 360, 1066 240 C 1240 120, 1400 120, 1600 240'

export const GrowthPathSection = () => (
  <section className="relative w-full overflow-hidden">
    <div style={{ padding: `0 ${fluidSizing.spacing['3xl']}`, marginBottom: fluidSizing.spacing['3xl'] }}>
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs uppercase tracking-[0.45em] text-slate-300"
      >
        The Electric Growth Path
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-semibold leading-tight text-white" style={{ fontSize: fluidSizing.heading.h2, marginTop: fluidSizing.spacing.lg, maxWidth: fluidSizing.container['5xl'] }}>
        Un mapa energético que revela cómo Boost <span className="text-[#FFD700]">enciende</span> tu crecimiento
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="text-sm leading-relaxed text-slate-300/85"
        style={{ marginTop: fluidSizing.spacing.lg, maxWidth: fluidSizing.container['5xl'] }}
      >
        Visualizamos la progresión real de las capacidades de crecimiento que activamos en tus primeros 90 días. Cada nodo es una ganancia medible alimentada por el núcleo Boost.
      </motion.p>
    </div>

    {/* Desktop Version - Full bleed SVG */}
    <div className="relative hidden w-screen lg:block" style={{ height: '360px', marginLeft: 'calc(-50vw + 50%)' }}>
      <svg viewBox="0 0 1600 360" preserveAspectRatio="none" className="h-full w-full">
        <motion.path
          d={pathD}
          stroke="#FFD700"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          variants={growthLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          style={{
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))'
          }}
        />
      </svg>

      {/* Cards Container - Distributed along the line */}
      <div className="absolute inset-0 mx-auto flex w-full max-w-[1400px] items-center" style={{ gap: fluidSizing.spacing.lg, padding: `0 ${fluidSizing.spacing['2xl']}` }}>
        {HOME_GROWTH_POINTS.map(({ value, label, description, alignment }, index) => (
          <motion.div
            key={value}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={growthNodeVariants}
            className="flex flex-1 flex-col border border-white/10 bg-[#050405]/92 text-left backdrop-blur-xl"
            style={{ 
              alignSelf: alignment === 'top' ? 'flex-start' : 'flex-end',
              minHeight: '280px',
              gap: fluidSizing.spacing.md,
              padding: `${fluidSizing.spacing.lg} ${fluidSizing.spacing.lg}`,
              borderRadius: fluidSizing.radius['2xl']
            }}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700] text-base-950 text-sm font-semibold shadow-glow">
              <Zap size={18} strokeWidth={2.1} />
            </span>
            <div>
              <p className="text-2xl font-semibold text-[#FFD700]">{value}</p>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white">{label}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-300/85">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Mobile Version */}
    <div className="relative flex flex-col rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl lg:hidden" style={{ gap: fluidSizing.spacing.xl, padding: fluidSizing.spacing.xl }}>
      <motion.div
        className="absolute left-8 top-12 h-[calc(100%-6rem)] w-[2px] bg-gradient-to-b from-[#FFD700] via-[#FFD700]/25 to-transparent"
        variants={mobileLineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      />

      {HOME_GROWTH_POINTS.map(({ value, label, description }, index) => (
        <motion.div
          key={value}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={growthNodeVariants}
          className="relative flex flex-col gap-3 pl-16"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700] text-base-950 text-sm font-semibold shadow-glow">
            <Zap size={18} strokeWidth={2.1} />
          </span>
          <div>
            <p className="text-2xl font-semibold text-[#FFD700]">{value}</p>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white">{label}</p>
          </div>
          <p className="text-sm leading-relaxed text-slate-300/85">{description}</p>
        </motion.div>
      ))}
    </div>
  </section>
)
