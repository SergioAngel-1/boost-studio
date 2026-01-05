import { motion } from 'framer-motion'
import { AccentButton } from '../../atoms/buttons/AccentButton'
import { fluidSizing } from '../../utils/fluidSizing'

const heroVisual = '/Images/Boost_home.jpg'

export const HeroSection = () => (
  <section className="relative flex w-full flex-col text-white" style={{ gap: fluidSizing.spacing['4xl'], padding: `${fluidSizing.spacing['3xl']} ${fluidSizing.spacing['3xl']}` }}>
    <motion.div className="relative overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-2xl" style={{ borderRadius: fluidSizing.radius['3xl'], padding: `${fluidSizing.spacing['4xl']} ${fluidSizing.spacing['2xl']}` }}>
      <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -top-64 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.28),_rgba(5,4,5,0)_60%)] blur-[140px]"
      />
      <motion.span
        animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.08, 1], rotate: [0, 2, -1, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-36 left-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.22),_rgba(5,4,5,0)_70%)] blur-[120px]"
      />

      <div className="relative grid items-center lg:grid-cols-2" style={{ gap: fluidSizing.spacing['3xl'] }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
          }}
          className="flex flex-col" style={{ gap: fluidSizing.spacing['2xl'] }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="uppercase tracking-[0.45em] text-slate-300" style={{ fontSize: fluidSizing.text.xs }}
          >
            Consultoría High-Ticket
          </motion.span>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="font-semibold tracking-tight" style={{ fontSize: fluidSizing.heading.h1, lineHeight: '1.1' }}
          >
            De la estrategia a productos digitales que <span className="text-[#FFD700]">no dejan espacio</span> al azar.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="max-w-2xl text-slate-300" style={{ fontSize: fluidSizing.text.base, lineHeight: '1.6' }}
          >
            Aceleramos tu crecimiento con un war-room de especialistas senior. Construimos, medimos y escalamos sobre un lienzo digital iluminado por data, no por supuestos.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
          >
            <AccentButton className="bg-[#FFD700] text-base-950 hover:bg-[#FFC655]" href="https://cal.com">
              Hablar con Boost
            </AccentButton>
            <span className="text-slate-400" style={{ fontSize: fluidSizing.text.sm }}>Agenda una sesión estratégica de 30 minutos.</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 72, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full items-center justify-center"
        >
          <div className="relative w-full overflow-hidden border border-white/10 bg-black/40" style={{ borderRadius: fluidSizing.radius['3xl'] }}>
            <div className="pointer-events-none absolute -top-32 right-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.35),_transparent_70%)] blur-[100px]" />
            <img src={heroVisual} alt="Visual principal Boost Studio" className="h-full w-full object-contain" loading="eager" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/25" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-black/80 via-black/40 to-transparent text-left" style={{ gap: fluidSizing.spacing.sm, padding: `${fluidSizing.spacing['3xl']} ${fluidSizing.spacing.xl} ${fluidSizing.spacing.xl}` }}>
              <span className="text-xs uppercase tracking-[0.45em] text-[#FFE587]">Growth Insights</span>
              <p className="font-semibold text-white" style={{ fontSize: fluidSizing.heading.h3 }}>+214% <span className="text-[#FFE587]">nuevos ingresos</span></p>
              <p className="text-sm text-slate-200/80">Cuando cada sprint prioriza métricas accionables, el crecimiento deja de ser un accidente.</p>
              <div className="mt-2 space-y-3 text-[0.7rem] uppercase tracking-[0.35em] text-slate-200/70">
                <div className="flex items-center justify-between">
                  <span>Acquisition</span>
                  <span>Retention</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-[#FFE587]" />
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-[#FFE587]/80" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
)
