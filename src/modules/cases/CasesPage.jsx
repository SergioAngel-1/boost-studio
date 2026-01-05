import { memo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountingValue } from '../../shared/hooks/useCountingValue'
import { SHOWCASE_CASES } from '../../shared/data/cases'
import { fluidSizing } from '../../shared/utils/fluidSizing'

const fadeInUp = {
  initial: { opacity: 0, y: 56 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.45 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
}

const ShowcaseCard = memo(ShowcaseCardComponent)

const formatRevenue = (value) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M+`
  }

  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K+`
  }

  return `$${Math.round(value)}`
}

function ShowcaseCardComponent({ project }) {
  const { title, industry, category, challenge, solution, metric, secondary, image } = project
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.6 })
  const metricValue = useCountingValue({
    target: metric.target,
    decimals: metric.decimals ?? 0,
    duration: metric.duration ?? 1.8,
    isActive: isInView,
  })
  const formattedMetric = metric.format(metricValue)

  return (
    <motion.article
      ref={cardRef}
      {...fadeInUp}
      className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#070709] shadow-[0_0_100px_rgba(255,215,0,0.12)]"
    >
      <div className="relative flex flex-col gap-10 md:flex-row">
        <div className="relative h-[320px] flex-1 overflow-hidden md:h-auto">
          <img
            src={image}
            alt={`${title} showcase visual`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 ease-out grayscale group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/20" />
          <div className="pointer-events-none absolute inset-0 border border-white/5 opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>
        <div className="relative flex flex-1 flex-col gap-6 p-10">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-400">
            <span className="rounded-full border border-white/10 px-4 py-2 text-[0.7rem] text-slate-300/90">{industry}</span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-[0.7rem] text-slate-300/90">{category}</span>
          </div>

          <header className="space-y-3">
            <h3 className="font-semibold text-white" style={{ fontSize: fluidSizing.heading.h2 }}>{title}</h3>
            <p className="text-sm leading-relaxed text-slate-300/85">
              <span className="font-semibold text-[#FFD700]">El reto:</span> {challenge}
            </p>
            <p className="text-sm leading-relaxed text-slate-300/85">
              <span className="font-semibold text-[#FFD700]">La solución:</span> {solution}
            </p>
          </header>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[3rem] font-semibold leading-none text-[#FFD700] md:text-[3.6rem]">
                {formattedMetric}
              </span>
              <span className="text-sm uppercase tracking-[0.3em] text-slate-400">{secondary}</span>
            </div>
            <a
              href="#"
              className="pointer-events-none inline-flex items-center justify-center rounded-full border border-[#FFD700]/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FFD700] opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:-translate-y-1 group-hover:opacity-100"
            >
              Ver Estudio Completo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
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
          className="relative flex min-w-[260px] flex-col items-start gap-4 rounded-[2.8rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_80px_rgba(255,215,0,0.14)] backdrop-blur-xl"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Revenue Activado</span>
          <span className="font-semibold text-[#FFD700]" style={{ fontSize: fluidSizing.heading.h2 }}>{displayRevenue}</span>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400/80">Generado para partners en los últimos 12 meses</p>
        </motion.div>
      </section>

      <section className="mx-auto flex w-full max-w-[1200px] flex-col" style={{ gap: fluidSizing.spacing['4xl'], padding: `0 ${fluidSizing.spacing.lg} ${fluidSizing.section.py}` }}>
        {SHOWCASE_CASES.map((project) => (
          <ShowcaseCard key={project.id} project={project} />
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
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="inline-flex items-center justify-center rounded-full border border-[#FFD700] px-10 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#FFD700] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD700]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Auditar mi Crecimiento
        </motion.a>
      </section>
    </div>
  )
}
