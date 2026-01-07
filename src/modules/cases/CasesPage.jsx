import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountingValue } from '../../shared/hooks/useCountingValue'
import { PROJECTS_DATA } from '../../shared/data/projects'
import { ProjectCard } from '../../shared/atoms/cards/ProjectCard'
import { AccentButton } from '../../shared/atoms/buttons/AccentButton'
import { fluidSizing } from '../../shared/utils/fluidSizing'
import { ROUTES } from '../../core/routes'

const formatRevenue = (value) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M+`
  }

  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K+`
  }

  return `$${Math.round(value)}`
}

export const CasesPage = () => {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.6 })
  const revenue = useCountingValue({ target: 10000000, isActive: heroInView, duration: 3 })
  const displayRevenue = formatRevenue(revenue)

  return (
    <section aria-label="Página de casos de estudio" className="relative overflow-hidden bg-[#020102] text-white">
      <section
        ref={heroRef}
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:gap-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
      >
        <div className="flex max-w-2xl flex-col gap-4 text-left md:gap-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FFD700]/80 md:text-xs md:tracking-[0.45em]"
          >
            The Proof
          </motion.p>
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl"
          >
            La especulación termina donde empieza la data.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="text-sm leading-relaxed text-slate-300/85 md:text-base"
          >
            No mostramos logos. Mostramos curvas de crecimiento exponencial. Aquí hay 3 despliegues tácticos que rompieron el mercado.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative flex w-full flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 delay-75 hover:border-[#FFD700]/70 md:min-w-[260px] md:gap-4 md:rounded-3xl md:p-8"
          role="complementary"
          aria-label="Estadísticas de ingresos generados"
          aria-live="polite"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.35em] text-slate-400 md:text-xs md:tracking-[0.4em]">Revenue Activado</span>
          <span className="text-3xl font-semibold text-[#FFD700] md:text-4xl lg:text-5xl" aria-label={`${displayRevenue} generados`}>{displayRevenue}</span>
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400/80 md:text-xs md:tracking-[0.35em]">Generado para partners en los últimos 12 meses</p>
        </motion.div>
      </section>

      <section aria-labelledby="projects-heading" className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4 pb-12 md:gap-16 md:px-8 md:pb-16 lg:px-12 lg:pb-20">
        <h2 id="projects-heading" className="sr-only">Casos de estudio</h2>
        <div role="list" aria-label="Lista de proyectos">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              role="listitem"
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 px-4 pb-12 text-center md:gap-8 md:px-8 md:pb-16 lg:px-12 lg:pb-20">
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold leading-tight md:text-4xl lg:text-5xl"
        >
          ¿Quieres ser nuestro próximo caso de estudio?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <AccentButton
            href={ROUTES.contact}
            className="bg-[#FFD700] px-6 py-3 text-base-950 shadow-none hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] md:px-8 md:py-4"
            aria-label="Auditar mi Crecimiento - Ir a formulario de contacto"
          >
            Auditar mi Crecimiento
          </AccentButton>
        </motion.div>
      </section>
    </section>
  )
}
