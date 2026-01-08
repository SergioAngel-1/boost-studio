import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HOME_METHOD_STEPS } from '../../data/home'

const buildNodeLabel = (title = '', stepNumber = 1) => {
  const stepPrefix = String(stepNumber).padStart(2, '0')

  return `${stepPrefix}. ${title.toUpperCase()}`
}

const StepNode = ({ stepNumber, title, isActive = false, onClick, index, totalSteps }) => {
  const label = buildNodeLabel(title, stepNumber)

  return (
    <motion.button
      type="button"
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      aria-controls={`method-panel-${index}`}
      id={`method-tab-${index}`}
      tabIndex={isActive ? 0 : -1}
      aria-label={`Paso ${stepNumber}: ${title}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onKeyDown={(e) => {
        const handler = e.currentTarget.getAttribute('data-keyhandler')
        if (handler) eval(handler)(e)
      }}
      className={`relative flex items-center rounded-full border px-4 py-2 text-left backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 sm:px-5 sm:py-2.5 ${
        isActive
          ? 'border-[#FFD700]/70 bg-[#FFD700]/15'
          : 'border-white/12 bg-white/[0.05] hover:border-[#FFD700]/45 hover:bg-[#FFD700]/10'
      }`}
    >
      <span
        className={`text-[0.55rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.65rem] sm:tracking-[0.38em] ${
          isActive ? 'text-white' : 'text-white/70'
        }`}
      >
        {label}
      </span>
    </motion.button>
  )
}

const EnergyLine = () => (
  <motion.div
    key="energy-line"
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    exit={{ scaleX: 0, opacity: 0 }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    className="pointer-events-none hidden h-[3px] flex-1 origin-left rounded-full lg:block"
    style={{
      background: 'linear-gradient(90deg, rgba(255,215,0,0) 0%, rgba(255,215,0,0.85) 45%, rgba(255,215,0,0.2) 100%)',
      boxShadow: '0 0 28px rgba(255, 215, 0, 0.45)',
    }}
  />
)

const DesktopMethodDetail = ({ stepNumber, title, description, index }) => (
  <motion.div
    key={title}
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="hidden w-full max-w-[440px] flex-col gap-5 rounded-[2.6rem] border border-white/12 bg-white/[0.08] p-10 text-left text-white backdrop-blur-xl transition duration-300 hover:border-[#FFD700]/80 lg:flex"
    role="tabpanel"
    id={`method-panel-${index}`}
    aria-labelledby={`method-tab-${index}`}
  >
    <span className="text-xs font-semibold uppercase tracking-[0.38em] text-[#FFD700]">
      {String(stepNumber).padStart(2, '0')}
    </span>
    <h3 className="text-2xl font-semibold leading-tight text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-slate-200/90">{description}</p>
    <span className="pointer-events-none block h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFD700]/45 to-transparent" />
    <p className="text-xs uppercase tracking-[0.28em] text-slate-300/70">
      El núcleo energiza este módulo para generar resultados medibles en semanas.
    </p>
  </motion.div>
)

const MobileMethodDetail = ({ stepNumber, title, description, index }) => (
  <motion.div
    key={`${title}-mobile`}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    className="w-full rounded-2xl border border-white/12 bg-white/[0.06] p-5 text-left text-white backdrop-blur-xl md:rounded-3xl md:p-7 lg:hidden"
    role="tabpanel"
    id={`method-panel-mobile-${index}`}
    aria-labelledby={`method-tab-${index}`}
  >
    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#FFD700] md:text-[0.7rem] md:tracking-[0.32em]">
      {String(stepNumber).padStart(2, '0')}
    </span>
    <h3 className="mt-3 text-base font-semibold text-white md:text-lg">{title}</h3>
    <p className="mt-3 text-xs leading-relaxed text-slate-200/85 md:mt-4 md:text-sm">{description}</p>
  </motion.div>
)

export const MethodSection = () => {
  const [activeStep, setActiveStep] = useState(0)

  const selectedStep = HOME_METHOD_STEPS[activeStep] ?? HOME_METHOD_STEPS[0]
  const selectedStepNumber = (activeStep ?? 0) + 1

  const handleKeyDown = (e, index) => {
    const totalSteps = HOME_METHOD_STEPS.length
    let newIndex = index

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      newIndex = (index + 1) % totalSteps
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      newIndex = (index - 1 + totalSteps) % totalSteps
    } else if (e.key === 'Home') {
      e.preventDefault()
      newIndex = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      newIndex = totalSteps - 1
    }

    if (newIndex !== index) {
      setActiveStep(newIndex)
      document.getElementById(`method-tab-${newIndex}`)?.focus()
    }
  }

  return (
    <section aria-labelledby="method-heading" className="relative flex flex-col gap-8 px-4 py-12 md:gap-12 md:px-8 md:py-16 lg:px-12">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-[0.65rem] uppercase tracking-[0.35em] md:text-xs md:tracking-[0.45em]"
        style={{ color: '#cbd5e1' }}
      >
        Metodología Boost
      </motion.p>
      <motion.h2
        id="method-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl text-2xl font-semibold leading-tight !text-white md:text-4xl lg:text-5xl"
      >
        Nuestra metodología de consultoría growth para <span className="text-[#FFD700]">escalar</span> tu negocio digital
      </motion.h2>

      <div className="relative flex flex-col gap-8 md:gap-12">
        <motion.div
          layout
          className={`relative flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center ${
            selectedStep ? 'lg:justify-between' : 'lg:justify-center'
          }`}
        >
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24, delay: 0.2 }}
            className="relative flex h-[220px] w-[220px] items-center justify-center overflow-visible rounded-full border border-[#FFD700]/45 bg-black/65 shadow-[0_0_50px_rgba(255,215,0,0.18)] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px]"
          >
            <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.38),_rgba(2,1,1,0.88))] blur-[54px]" aria-hidden="true" />
            <img
              src="/Images/Boost_Metod.jpg"
              alt="Núcleo del Método Boost: Sistema central que energiza todos los módulos de crecimiento"
              loading="lazy"
              className="relative h-full w-full rounded-full object-cover"
            />
            <motion.div
              animate={{ rotate: [0, 2, -1, 0], scale: [1, 1.02, 1], opacity: [0.4, 0.68, 0.4] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute inset-4 rounded-full border border-[#FFD700]/25"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute -right-12 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.35),_transparent_70%)] blur-[28px] lg:block"
            />
          </motion.div>

          <AnimatePresence>
            {selectedStep ? <EnergyLine /> : null}
          </AnimatePresence>

          <AnimatePresence>
            {selectedStep ? (
              <DesktopMethodDetail
                stepNumber={selectedStepNumber}
                title={selectedStep.title}
                description={selectedStep.description}
                index={activeStep}
              />
            ) : null}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="flex w-full flex-wrap justify-center gap-2.5 sm:gap-3"
          role="tablist"
          aria-label="Pasos del método Boost"
        >
          {HOME_METHOD_STEPS.map(({ title }, index) => (
            <StepNode
              key={title}
              stepNumber={index + 1}
              title={title}
              isActive={activeStep === index}
              onClick={() => setActiveStep(index)}
              index={index}
              totalSteps={HOME_METHOD_STEPS.length}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedStep ? (
            <MobileMethodDetail
              stepNumber={selectedStepNumber}
              title={selectedStep.title}
              description={selectedStep.description}
              index={activeStep}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}
