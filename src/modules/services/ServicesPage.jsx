import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SERVICES_ROADMAP } from '../../shared/data/services'
import { useModal } from '../../shared/context/ModalContext'
import { ServiceModal } from '../../shared/molecules/ServiceModal'
import { fluidSizing } from '../../shared/utils/fluidSizing'

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
    <section className="relative w-full bg-[#020102] text-white" style={{ paddingTop: fluidSizing.section.py, paddingBottom: fluidSizing.section.py }}>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col" style={{ gap: fluidSizing.spacing['3xl'], paddingLeft: fluidSizing.spacing.lg, paddingRight: fluidSizing.spacing.lg }}>
        <header className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs uppercase tracking-[0.45em] text-slate-300"
          >
            Strategic Service Roadmap
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-semibold leading-tight text-white" style={{ fontSize: fluidSizing.heading.h2 }}>
            La línea estratégica que articula nuestras cuatro células de servicio.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="max-w-3xl text-sm leading-relaxed text-slate-300/85"
          >
            Cada módulo se integra mediante un flujo continuo de data, creatividad y revenue que asegura impacto compuesto en cada
            etapa del proyecto.
          </motion.p>
        </header>

        <div ref={containerRef} className="relative flex flex-col" style={{ marginTop: fluidSizing.spacing.lg, gap: fluidSizing.spacing['5xl'] }}>
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

          <div className="flex flex-col gap-20">
            {SERVICES_ROADMAP.map((service, index) => {
              const { id, title, description, alignment, Icon } = service
              const isLeft = alignment === 'left'

              const activateService = () => openModal(<ServiceModal service={service} />)
              const handleKeyDown = (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openModal(<ServiceModal service={service} />)
                }
              }

              return (
                <div
                  key={id}
                  className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_140px_minmax(0,1fr)] lg:items-center"
                >
                  {isLeft ? (
                    <motion.article
                      initial="hiddenLeft"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.45 }}
                      variants={cardVariants}
                      onClick={activateService}
                      role="button"
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                      className="relative z-10 order-2 flex cursor-pointer flex-col gap-5 rounded-[2.6rem] border border-white/10 bg-[#050405]/92 p-8 text-left backdrop-blur-xl transition-all duration-300 delay-75 hover:-translate-y-1 hover:border-[#FFD700]/70 lg:order-1 lg:col-start-1 lg:ml-auto lg:max-w-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#FFD700]/60 bg-[#050405] shadow-glow">
                          <Icon />
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-white">{title}</h2>
                      <p className="text-sm leading-relaxed text-slate-300/90">{description}</p>
                      <span className="pointer-events-none absolute right-[-70px] top-1/2 hidden h-[3px] w-20 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,215,0,0.9),rgba(255,215,0,0))] shadow-[0_0_25px_rgba(255,215,0,0.45)] lg:block" />
                    </motion.article>
                  ) : (
                    <div className="relative z-0 order-2 hidden lg:order-1 lg:col-start-1 lg:block" />
                  )}

                  <div className="order-1 lg:order-2 lg:col-start-2">
                    <div
                      className="relative mx-auto flex h-24 w-24 items-center justify-center"
                      ref={(node) => {
                        circleRefs.current[index] = node
                        return node
                      }}
                    >
                      <span className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.65),_rgba(255,215,0,0))] blur-xl" />
                      <span className="flex h-full w-full items-center justify-center rounded-full border border-[#FFD700]/50 bg-[#FFD700] text-base font-extrabold uppercase tracking-[0.2em] text-base-950 shadow-glow-md">
                        {id}
                      </span>
                    </div>
                  </div>

                  {!isLeft ? (
                    <motion.article
                      initial="hiddenRight"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.45 }}
                      variants={cardVariants}
                      onClick={activateService}
                      role="button"
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                      className="relative z-10 order-2 flex cursor-pointer flex-col gap-5 rounded-[2.6rem] border border-white/10 bg-[#050405]/92 p-8 text-left backdrop-blur-xl transition-all duration-300 delay-75 hover:-translate-y-1 hover:border-[#FFD700]/70 lg:order-3 lg:col-start-3 lg:mr-auto lg:max-w-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#FFD700]/60 bg-[#050405] shadow-glow">
                          <Icon />
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-white">{title}</h2>
                      <p className="text-sm leading-relaxed text-slate-300/90">{description}</p>
                      <span className="pointer-events-none absolute left-[-70px] top-1/2 hidden h-[3px] w-20 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,215,0,0),rgba(255,215,0,0.9))] shadow-[0_0_25px_rgba(255,215,0,0.45)] lg:block" />
                    </motion.article>
                  ) : (
                    <div className="relative z-0 order-3 hidden lg:col-start-3 lg:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative mt-10 flex flex-col gap-12 rounded-[2.8rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_120px_rgba(255,215,0,0.16)] backdrop-blur-xl lg:hidden">
          <motion.div
            className="absolute left-10 top-16 h-[calc(100%-6rem)] w-[2px] bg-gradient-to-b from-[#FFD700] via-[#FFD700]/25 to-transparent"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {SERVICES_ROADMAP.map(({ id, title, description, Icon }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                const service = SERVICES_ROADMAP.find((s) => s.id === id)
                openModal(<ServiceModal service={service} />)
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  const service = SERVICES_ROADMAP.find((s) => s.id === id)
                  openModal(<ServiceModal service={service} />)
                }
              }}
              className="relative flex cursor-pointer flex-col gap-4 pl-16 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="absolute left-6 top-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700] text-xs font-bold uppercase tracking-[0.2em] text-base-950 shadow-[0_0_35px_rgba(255,215,0,0.5)]">
                {id}
              </span>
              <div className="flex items-center gap-3 text-[#FFD700]">
                <Icon />
                <h2 className="text-lg font-semibold text-white">{title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-300/85">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
