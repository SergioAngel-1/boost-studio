import { motion } from 'framer-motion'
import { HOME_GROWTH_POINTS } from '../../data/home'
import { fluidSizing } from '../../utils/fluidSizing'
import { GrowthPointIcon } from '../../atoms/icons/GrowthPointIcon'

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
  <section aria-labelledby="growth-path-heading" className="relative w-full">
    <div className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-[0.65rem] uppercase tracking-[0.35em] md:text-xs md:tracking-[0.45em]"
        style={{ color: '#cbd5e1' }}
      >
        Capacidades de Crecimiento
      </motion.h2>
      <motion.h3
        id="growth-path-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 max-w-4xl text-2xl font-semibold leading-tight !text-white md:mt-6 md:text-4xl lg:text-5xl"
      >
        Cómo nuestra agencia de growth marketing <span className="text-[#FFD700]">impulsa</span> tu negocio digital
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base"
        style={{ color: '#cbd5e1' }}
      >
        Cinco pilares estratégicos que activamos para escalar tu producto digital. Cada capacidad se integra con las demás para generar crecimiento sostenible y resultados medibles.
      </motion.p>
    </div>

    {/* Desktop Version - Full bleed SVG */}
    <div className="relative hidden w-full overflow-visible lg:block" style={{ height: '360px' }}>
      <svg viewBox="-20 80 1640 280" preserveAspectRatio="xMidYMid meet" className="h-full w-full overflow-visible" aria-hidden="true" role="presentation">
        <defs>
          <filter id="glow-line" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d={pathD}
          stroke="#FFD700"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          variants={growthLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          filter="url(#glow-line)"
        />
      </svg>

      {/* Cards Container - Distributed along the line */}
      <div className="absolute inset-0 mx-auto flex w-full max-w-[1400px] items-center" style={{ gap: fluidSizing.spacing.lg, padding: `0 ${fluidSizing.spacing['2xl']}` }} role="list" aria-label="Puntos de crecimiento">
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
            role="listitem"
          >
            <GrowthPointIcon />
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
    <div className="relative mx-4 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:mx-8 md:gap-8 md:rounded-3xl md:p-8 lg:hidden" role="list" aria-label="Puntos de crecimiento">
      <motion.div
        className="absolute left-5 top-8 h-[calc(100%-4rem)] w-[2px] bg-gradient-to-b from-[#FFD700] via-[#FFD700]/25 to-transparent md:left-8"
        variants={mobileLineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        aria-hidden="true"
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
          role="listitem"
        >
          <GrowthPointIcon />
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
