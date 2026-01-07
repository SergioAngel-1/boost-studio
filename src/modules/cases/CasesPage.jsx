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
    <div className="relative overflow-hidden bg-[#020102] text-white">
      <section
        ref={heroRef}
        className="mx-auto flex w-full max-w-[1200px] flex-col md:flex-row md:items-center md:justify-between"
        style={{ gap: fluidSizing.spacing['3xl'], padding: `${fluidSizing.section.py} ${fluidSizing.spacing.lg} ${fluidSizing.section.py}` }}
      >
        <div className="flex max-w-2xl flex-col gap-6 text-left">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs uppercase tracking-[0.45em] text-[#FFD700]/80"
          >
            The Proof
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-semibold leading-tight"
            style={{ fontSize: fluidSizing.heading.h1 }}
          >
            La especulación termina donde empieza la data.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="text-sm leading-relaxed text-slate-300/85 sm:text-base"
          >
            No mostramos logos. Mostramos curvas de crecimiento exponencial. Aquí hay 3 despliegues tácticos que rompieron el mercado.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative flex min-w-[260px] flex-col items-start gap-4 rounded-[2.8rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 delay-75 hover:border-[#FFD700]/70"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Revenue Activado</span>
          <span className="font-semibold text-[#FFD700]" style={{ fontSize: fluidSizing.heading.h2 }}>{displayRevenue}</span>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400/80">Generado para partners en los últimos 12 meses</p>
        </motion.div>
      </section>

      <section className="mx-auto flex w-full max-w-[1200px] flex-col" style={{ gap: fluidSizing.spacing['4xl'], padding: `0 ${fluidSizing.spacing.lg} ${fluidSizing.section.py}` }}>
        {PROJECTS_DATA.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
          />
        ))}
      </section>

      <section className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center" style={{ gap: fluidSizing.spacing.lg, padding: `0 ${fluidSizing.spacing.lg} ${fluidSizing.section.py}` }}>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-semibold leading-tight"
          style={{ fontSize: fluidSizing.heading.h2 }}
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
            className="border border-[#FFD700] bg-transparent px-10 py-4 text-[#FFD700] shadow-none hover:bg-[#FFD700]/10"
          >
            Auditar mi Crecimiento
          </AccentButton>
        </motion.div>
      </section>
    </div>
  )
}
