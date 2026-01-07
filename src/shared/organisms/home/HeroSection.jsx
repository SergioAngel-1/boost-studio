import { motion } from 'framer-motion'
import { AccentButton } from '../../atoms/buttons/AccentButton'
import { fluidSizing } from '../../utils/fluidSizing'
import { ROUTES } from '../../../core/routes'

const heroVisual = '/Images/Boost_home.jpg'

export const HeroSection = () => (
  <section aria-labelledby="hero-heading" className="relative flex w-full flex-col text-white px-4 py-12 md:px-8 lg:px-12" style={{ gap: fluidSizing.spacing['4xl'] }}>
    <motion.div className="relative overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-6 md:p-10 lg:p-16" style={{ borderRadius: fluidSizing.radius['3xl'] }}>
      <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -top-64 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.28),_rgba(5,4,5,0)_60%)] blur-[140px]"
        aria-hidden="true"
      />
      <motion.span
        animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.08, 1], rotate: [0, 2, -1, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-36 left-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.22),_rgba(5,4,5,0)_70%)] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
          }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-300 md:text-xs md:tracking-[0.45em]"
          >
            Consultoría High-Ticket
          </motion.span>
          <motion.h1
            id="hero-heading"
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            De la estrategia a productos digitales que <span className="text-[#FFD700]">no dejan espacio</span> al azar.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="max-w-2xl leading-relaxed text-slate-300"
            style={{ fontSize: 'clamp(0.875rem, 0.875rem + 0.125vw, 1rem)', lineHeight: '1.6' }}
          >
            Aceleramos tu crecimiento con un war-room de especialistas senior. Construimos, medimos y escalamos sobre un lienzo digital iluminado por data, no por supuestos.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
          >
            <AccentButton 
              className="bg-[#FFD700] text-base-950 shadow-none hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]" 
              href={ROUTES.contact}
              aria-label="Hablar con Boost - Agenda una sesión estratégica"
            >
              Hablar con Boost
            </AccentButton>
            <span className="text-xs text-slate-400 md:text-sm" aria-label="Información adicional">Agenda una sesión estratégica de 30 minutos.</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 72, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full items-center justify-center"
        >
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 md:rounded-3xl">
            <div className="pointer-events-none absolute -top-32 right-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.35),_transparent_70%)] blur-[100px]" aria-hidden="true" />
            <img src={heroVisual} alt="Visualización del impacto de Boost Studio: Dashboard mostrando métricas de crecimiento y análisis de datos" className="h-full w-full object-contain" loading="eager" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/25" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-left md:gap-3 md:p-8" role="complementary" aria-label="Métricas de crecimiento">
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#FFD700] md:text-xs md:tracking-[0.45em]">Growth Insights</span>
              <p className="text-xl font-semibold text-white md:text-3xl lg:text-4xl">+214% <span className="text-[#FFD700]">nuevos ingresos</span></p>
              <p className="text-xs leading-relaxed text-slate-200/80 md:text-sm">Cuando cada sprint prioriza métricas accionables, el crecimiento deja de ser un accidente.</p>
              <div className="mt-2 space-y-2 text-[0.6rem] uppercase tracking-[0.25em] text-slate-200/70 md:space-y-3 md:text-[0.7rem] md:tracking-[0.35em]">
                <div className="flex items-center justify-between">
                  <span id="acquisition-label">Acquisition</span>
                  <span id="retention-label">Retention</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-labelledby="acquisition-label" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  <div className="h-full w-4/5 rounded-full bg-[#FFD700]" />
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-labelledby="retention-label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                  <div className="h-full w-3/4 rounded-full bg-[#FFD700]/80" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
)
