import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SERVICES_ROADMAP } from '../../shared/data/services'
import { useModal } from '../../shared/context/ModalContext'
import { ServiceModal } from '../../shared/molecules/ServiceModal'
import { AccentButton } from '../../shared/atoms/buttons/AccentButton'
import { ROUTES } from '../../core/routes'
import { fluidSizing } from '../../shared/utils/fluidSizing'

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -30 },
  hiddenRight: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export const ServicesPage = () => {
  const gradientId = useId()
  const containerRef = useRef(null)
  const circleRefs = useRef([])
  const [pathData, setPathData] = useState('')
  const [bounds, setBounds] = useState({ width: 0, height: 0 })
  const { openModal } = useModal()

  const updatePath = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const circles = circleRefs.current.filter(Boolean)
    if (!circles.length) return

    const containerRect = container.getBoundingClientRect()
    const centers = circles.map((circle) => {
      const rect = circle.getBoundingClientRect()
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      }
    })

    let d = `M${centers[0].x} ${centers[0].y}`

    for (let index = 1; index < centers.length; index += 1) {
      const prev = centers[index - 1]
      const current = centers[index]
      const deltaY = current.y - prev.y
      const prevAlignment = SERVICES_ROADMAP[index - 1].alignment
      const currentAlignment = SERVICES_ROADMAP[index].alignment
      const horizontalOffset = Math.min(Math.max(containerRect.width * 0.12, 110), 200)

      const control1X = prev.x + (prevAlignment === 'left' ? -horizontalOffset : horizontalOffset)
      const control2X = current.x + (currentAlignment === 'left' ? -horizontalOffset : horizontalOffset)
      const control1Y = prev.y + deltaY / 2
      const control2Y = current.y - deltaY / 2

      d += ` C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${current.x} ${current.y}`
    }

    setPathData(d)
    setBounds({ width: containerRect.width, height: containerRect.height })
  }, [])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return undefined

    let frame
    const triggerUpdate = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updatePath)
    }

    const resizeObserver = new ResizeObserver(triggerUpdate)
    resizeObserver.observe(node)
    triggerUpdate()

    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [updatePath])


  return (
    <section aria-labelledby="services-heading" className="relative w-full bg-[#020102] px-4 py-12 text-white md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 md:gap-12">
        <header className="space-y-4 md:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-300 md:text-xs md:tracking-[0.45em]"
          >
            Strategic Service Roadmap
          </motion.p>
          <motion.h1
            id="services-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            La línea estratégica que articula nuestras cuatro células de servicio.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="max-w-3xl text-sm leading-relaxed text-slate-300/85 md:text-base"
          >
            Cada módulo se integra mediante un flujo continuo de data, creatividad y revenue que asegura impacto compuesto en cada
            etapa del proyecto.
          </motion.p>
        </header>

        <div ref={containerRef} className="relative mt-6 flex flex-col gap-12 md:mt-8 md:gap-16 lg:gap-20">
          {pathData && bounds.width > 0 && bounds.height > 0 ? (
            <motion.svg
              key={pathData}
              viewBox={`0 0 ${bounds.width} ${bounds.height}`}
              width={bounds.width}
              height={bounds.height}
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              aria-hidden="true"
              role="presentation"
            >
              <defs>
                <linearGradient id={gradientId} x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,215,0,0)" />
                  <stop offset="20%" stopColor="rgba(255,215,0,0.4)" />
                  <stop offset="55%" stopColor="rgba(255,215,0,0.95)" />
                  <stop offset="85%" stopColor="rgba(255,215,0,0.45)" />
                  <stop offset="100%" stopColor="rgba(255,215,0,0)" />
                </linearGradient>
              </defs>
              <motion.path
                d={pathData}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth={3.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
                className="drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]"
              />
            </motion.svg>
          ) : null}

          <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
            {SERVICES_ROADMAP.map((service, index) => {
              const { id, title, description, alignment, Icon } = service
              const isLeft = alignment === 'left'

              const activateService = () => openModal(<ServiceModal service={service} />, title)
              const handleKeyDown = (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openModal(<ServiceModal service={service} />, title)
                }
              }

              return (
                <div
                  key={id}
                  className="relative grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_140px_minmax(0,1fr)] lg:items-center lg:gap-10"
                >
                  {isLeft ? (
                    <motion.article
                      initial="hiddenLeft"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={cardVariants}
                      onClick={activateService}
                      role="button"
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                      aria-label={`Ver detalles del servicio: ${title}`}
                      className="relative z-10 order-2 flex cursor-pointer flex-col gap-4 rounded-2xl border border-white/10 bg-[#050405]/92 p-5 text-left backdrop-blur-xl transition-all duration-300 delay-75 hover:-translate-y-1 hover:border-[#FFD700]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:gap-5 md:rounded-3xl md:p-6 lg:order-1 lg:col-start-1 lg:ml-auto lg:max-w-xl lg:p-8"
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFD700]/60 bg-[#050405] shadow-glow md:h-12 md:w-12" aria-label={`Icono de ${title}`}>
                          <Icon aria-hidden="true" />
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>
                      <p className="text-xs leading-relaxed text-slate-300/90 md:text-sm">{description}</p>
                      <span className="pointer-events-none absolute right-[-70px] top-1/2 hidden h-[3px] w-20 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,215,0,0.9),rgba(255,215,0,0))] shadow-[0_0_25px_rgba(255,215,0,0.45)] lg:block" aria-hidden="true" />
                    </motion.article>
                  ) : (
                    <div className="relative z-0 order-2 hidden lg:order-1 lg:col-start-1 lg:block" />
                  )}

                  <div className="order-1 lg:order-2 lg:col-start-2">
                    <div
                      className="relative mx-auto flex h-16 w-16 items-center justify-center md:h-20 md:w-20 lg:h-24 lg:w-24"
                      ref={(node) => {
                        circleRefs.current[index] = node
                        return node
                      }}
                      aria-label={`Servicio ${id}: ${title}`}
                    >
                      <span className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.65),_rgba(255,215,0,0))] blur-xl" aria-hidden="true" />
                      <span className="flex h-full w-full items-center justify-center rounded-full border border-[#FFD700]/50 bg-[#FFD700] text-sm font-extrabold uppercase tracking-[0.15em] text-base-950 shadow-glow-md md:text-base md:tracking-[0.2em]" aria-label={`Número ${id}`}>
                        {id}
                      </span>
                    </div>
                  </div>

                  {!isLeft ? (
                    <motion.article
                      initial="hiddenRight"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={cardVariants}
                      onClick={activateService}
                      role="button"
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                      aria-label={`Ver detalles del servicio: ${title}`}
                      className="relative z-10 order-2 flex cursor-pointer flex-col gap-4 rounded-2xl border border-white/10 bg-[#050405]/92 p-5 text-left backdrop-blur-xl transition-all duration-300 delay-75 hover:-translate-y-1 hover:border-[#FFD700]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:gap-5 md:rounded-3xl md:p-6 lg:order-3 lg:col-start-3 lg:mr-auto lg:max-w-xl lg:p-8"
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFD700]/60 bg-[#050405] shadow-glow md:h-12 md:w-12" aria-label={`Icono de ${title}`}>
                          <Icon aria-hidden="true" />
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>
                      <p className="text-xs leading-relaxed text-slate-300/90 md:text-sm">{description}</p>
                      <span className="pointer-events-none absolute left-[-70px] top-1/2 hidden h-[3px] w-20 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,215,0,0),rgba(255,215,0,0.9))] shadow-[0_0_25px_rgba(255,215,0,0.45)] lg:block" aria-hidden="true" />
                    </motion.article>
                  ) : (
                    <div className="relative z-0 order-3 hidden lg:col-start-3 lg:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section aria-labelledby="cta-heading" className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center md:gap-8 md:px-6 md:py-20 lg:py-24">
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
        >
          ¿Listo para impulsar tu crecimiento?
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
            aria-label="Hablar con Boost - Ir a formulario de contacto"
          >
            Hablar con Boost
          </AccentButton>
        </motion.div>
      </section>
    </section>
  )
}
