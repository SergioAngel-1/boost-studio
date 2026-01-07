import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountingValue } from '../../hooks/useCountingValue'
import { useModal } from '../../context/ModalContext'
import { ProjectModal } from '../../molecules/ProjectModal'
import { fluidSizing } from '../../utils/fluidSizing'

const fadeInUp = {
  initial: { opacity: 0, y: 56 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.45 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
}

export const ProjectCard = ({ project }) => {
  const { title, industry, category, challenge, solution, metric, secondary, image, modalContent } = project
  const { openModal } = useModal()
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.6 })
  
  const metricValue = useCountingValue({
    target: metric.target,
    decimals: metric.decimals ?? 0,
    duration: metric.duration ?? 1.8,
    isActive: isInView,
  })
  
  const formattedMetric = metric.format(metricValue)

  const handleOpenModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    openModal(<ProjectModal project={project} />, modalContent?.title || title)
  }

  return (
    <motion.article
      ref={cardRef}
      {...fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#070709] shadow-[0_0_60px_rgba(255,215,0,0.08)] transition-all duration-300 delay-75 hover:border-[#FFD700]/70 md:rounded-3xl"
    >
      <div className="relative flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-10">
        <div className="relative h-[240px] flex-1 overflow-hidden md:h-[320px] lg:h-auto">
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
        
        <div className="relative flex flex-1 flex-col gap-4 p-5 md:gap-5 md:p-8 lg:gap-6 lg:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-400 md:gap-3">
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.6rem] text-slate-300/90 md:px-4 md:py-2 md:text-[0.7rem]">{industry}</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.6rem] text-slate-300/90 md:px-4 md:py-2 md:text-[0.7rem]">{category}</span>
          </div>

          <header className="space-y-2 md:space-y-3">
            <h3 className="text-xl font-semibold text-white md:text-3xl lg:text-4xl">{title}</h3>
            <p className="text-xs leading-relaxed text-slate-300/85 md:text-sm">
              <span className="font-semibold text-[#FFD700]">El reto:</span> {challenge}
            </p>
            <p className="text-xs leading-relaxed text-slate-300/85 md:text-sm">
              <span className="font-semibold text-[#FFD700]">La solución:</span> {solution}
            </p>
          </header>

          <div className="flex flex-wrap items-end justify-between gap-4 md:gap-6">
            <div className="flex flex-col gap-1.5 md:gap-2">
              <span className="text-[2.5rem] font-semibold leading-none text-[#FFD700] md:text-[3rem] lg:text-[3.6rem]">
                {formattedMetric}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400 md:text-sm md:tracking-[0.3em]">{secondary}</span>
            </div>
            <button
              onClick={handleOpenModal}
              className="inline-flex items-center justify-center rounded-full border border-[#FFD700]/70 bg-transparent px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[#FFD700] shadow-none transition-all duration-300 hover:bg-[#FFD700]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:px-5 md:py-2.5 md:text-xs md:tracking-[0.3em] md:opacity-0 md:group-hover:opacity-100"
            >
              Ver Estudio Completo
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
