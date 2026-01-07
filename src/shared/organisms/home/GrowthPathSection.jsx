import { motion } from 'framer-motion'
import { HiBolt } from 'react-icons/hi2'
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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 + index * 0.12 },
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
    <div className="px-4 pb-8 md:px-8 md:pb-12 lg:px-12">
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-300 md:text-xs md:tracking-[0.45em]"
      >
        The Electric Growth Path
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 max-w-4xl text-2xl font-semibold leading-tight text-white md:mt-6 md:text-4xl lg:text-5xl"
      >
        Un mapa energético que revela cómo Boost <span className="text-[#FFD700]">enciende</span> tu crecimiento
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300/85 md:text-base"
      >
        Visualizamos la progresión real de las capacidades de crecimiento que activamos en tus primeros 90 días. Cada nodo es una ganancia medible alimentada por el núcleo Boost.
      </motion.p>
    </div>

    {/* Desktop Version - Full bleed SVG */}
    <div className="relative hidden w-full lg:block" style={{ height: '360px' }}>
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
              <HiBolt className="h-[18px] w-[18px]" />
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
    <div className="relative mx-4 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:mx-8 md:gap-8 md:rounded-3xl md:p-8 lg:hidden">
      <motion.div
        className="absolute left-5 top-8 h-[calc(100%-4rem)] w-[2px] bg-gradient-to-b from-[#FFD700] via-[#FFD700]/25 to-transparent md:left-8"
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
          className="relative flex flex-col gap-2.5 pl-12 md:gap-3 md:pl-16"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFD700] text-base-950 text-sm font-semibold shadow-glow md:h-10 md:w-10">
            <HiBolt className="h-4 w-4 md:h-[18px] md:w-[18px]" />
          </span>
          <div>
            <p className="text-xl font-semibold text-[#FFD700] md:text-2xl">{value}</p>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white md:text-sm md:tracking-[0.18em]">{label}</p>
          </div>
          <p className="text-xs leading-relaxed text-slate-300/85 md:text-sm">{description}</p>
        </motion.div>
      ))}
    </div>
  </section>
)
