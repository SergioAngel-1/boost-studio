import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HOME_METHOD_STEPS } from '../../data/home'
import { fluidSizing } from '../../utils/fluidSizing'

const methodCardVariant = {
  hidden: { opacity: 0, y: 26 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 },
  }),
}

const alignmentMap = {
  left: 'lg:items-end lg:text-right',
  center: 'lg:items-center lg:text-center',
  right: 'lg:items-start lg:text-left',
}

const cardWrapperAlignments = ['justify-start lg:pl-6', 'justify-center', 'justify-end lg:pr-6']

const StepButton = ({ label, isActive = false, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={isActive}
    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#FFD700]/40 bg-white/[0.08] text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur-sm transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 ${
      isActive ? 'scale-110 bg-[#FFD700] text-base-950' : 'text-white/75 hover:text-white'
    }`}
  >
    {label}
  </button>
)

const MethodCard = ({ index, stepNumber, title, description, alignment = 'center', className = '', isActive = false }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={methodCardVariant}
    exit={{ opacity: 0, scale: 0.9, y: -24, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
    className={`group relative flex min-h-[240px] flex-col gap-4 rounded-[2.4rem] border border-white/10 bg-white/[0.03] p-8 text-left backdrop-blur-sm ${
      alignmentMap[alignment] ?? ''
    } ${className} ${
      isActive
        ? 'border-[#FFD700]/60 bg-white/[0.06]'
        : 'opacity-80 transition-opacity duration-500 hover:opacity-100'
    }`}
  >
    <span className="text-xs font-semibold uppercase tracking-[0.38em] text-[#FFD700]">0{stepNumber}</span>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <AnimatePresence mode="wait" initial={false}>
      {isActive ? (
        <motion.p
          key="active"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm leading-relaxed text-slate-300/90"
        >
          {description}
        </motion.p>
      ) : (
        <motion.p
          key="locked"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm leading-relaxed text-slate-400/60"
        >
          Activa este módulo desde el núcleo para revelar el plan.
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
)

export const MethodSection = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="relative flex flex-col" style={{ gap: fluidSizing.spacing['3xl'], padding: `${fluidSizing.spacing['3xl']} ${fluidSizing.spacing['3xl']}` }}>
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs uppercase tracking-[0.45em] text-slate-300"
      >
        El Método Boost
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-semibold leading-tight text-white" style={{ fontSize: fluidSizing.heading.h2, maxWidth: fluidSizing.container['5xl'] }}
      >
        Un sistema orquestado para encender la <span className="text-[#FFD700]">expansión</span> de tu producto
      </motion.h2>

      {/* Desktop Version */}
      <div className="relative hidden w-full flex-col items-center gap-14 lg:flex">
        <div className="relative grid w-full grid-cols-[auto_minmax(120px,1fr)_auto_minmax(120px,1fr)_auto_minmax(120px,1fr)_auto] items-center gap-6 py-12">
          <StepButton label="01" isActive={activeStep === 0} onClick={() => setActiveStep(0)} />
          <span className="pointer-events-none hidden h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFD700]/25 to-transparent lg:block" />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[360px] w-[360px] items-center justify-center overflow-visible rounded-full border border-[#FFD700]/45 bg-black/60"
          >
            <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.4),_rgba(2,1,1,0.85))] blur-[60px]" />
            <img src="/Images/Boost_Metod.jpg" alt="Núcleo del Método Boost" loading="lazy" className="relative h-full w-full rounded-full object-cover" />
          </motion.div>
          <span className="pointer-events-none hidden h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFD700]/25 to-transparent lg:block" />
          <StepButton label="02" isActive={activeStep === 1} onClick={() => setActiveStep(1)} />
          <span className="pointer-events-none hidden h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFD700]/25 to-transparent lg:block" />
          <StepButton label="03" isActive={activeStep === 2} onClick={() => setActiveStep(2)} />
        </div>

        <div className="relative flex w-full flex-col gap-6">
          <span className="pointer-events-none block h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />
          <AnimatePresence mode="wait">
            {HOME_METHOD_STEPS.map(({ title, description }, index) =>
              activeStep === index ? (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -26 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex w-full ${cardWrapperAlignments[index] ?? 'justify-center'}`}
                >
                  <MethodCard
                    index={index}
                    stepNumber={index + 1}
                    title={title}
                    description={description}
                    alignment={index === 0 ? 'left' : index === 1 ? 'right' : 'center'}
                    isActive
                    className="w-full max-w-[360px]"
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="grid gap-10 lg:hidden">
        <div className="relative mx-auto flex h-[220px] w-[220px] items-center justify-center rounded-full border border-[#FFD700]/30 bg-black/60">
          <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.35),_rgba(2,1,1,0.85))] blur-[40px]" />
          <img src="/Images/Boost_Metod.jpg" alt="Núcleo del Método Boost" className="relative h-full w-full rounded-full object-cover" />
        </div>
        {HOME_METHOD_STEPS.map(({ title, description }, index) => (
          <MethodCard
            key={title}
            index={index}
            stepNumber={index + 1}
            title={title}
            description={description}
            alignment="center"
            isActive
          />
        ))}
      </div>
    </div>
  )
}
