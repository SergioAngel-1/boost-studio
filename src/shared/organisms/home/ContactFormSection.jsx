import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'
import { AccentButton } from '../../atoms/buttons/AccentButton'
import { fluidSizing } from '../../utils/fluidSizing'
import { ROUTES } from '../../../core/routes'

const WHATSAPP_NUMBER = '521234567890'

export const ContactFormSection = () => (
  <div className="relative flex flex-col" style={{ gap: fluidSizing.spacing['3xl'], padding: `${fluidSizing.spacing['3xl']} ${fluidSizing.spacing['3xl']}` }}>
    <motion.span
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="text-xs uppercase tracking-[0.45em] text-slate-300"
    >
      Protocolo de Activación
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="font-semibold leading-tight text-white"
      style={{ fontSize: fluidSizing.heading.h2, maxWidth: fluidSizing.container['5xl'] }}
    >
      ¿Listo para encender tu <span className="text-[#FFD700]">crecimiento exponencial</span>?
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[3rem] border border-[#FFD700]/30 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-[#FFD700]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-[#FFD700]/15 blur-[80px]" />

      <div className="relative grid gap-8 p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700] text-base-950">
              <HiChatBubbleLeftRight className="h-6 w-6" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#FFD700]">Status</span>
              <span className="text-sm font-semibold text-white">Disponible para nuevos proyectos</span>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            Activa nuestra maquinaria de crecimiento. Completa el briefing estratégico y nuestro equipo core te contactará en menos de 48 horas con un plan de acción calibrado.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD700]" />
              <span>Respuesta t-48h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD700]" />
              <span>Sesión estratégica incluida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD700]" />
              <span>Sin compromiso inicial</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <AccentButton
            href={ROUTES.contact}
            icon={HiArrowRight}
            className="bg-[#FFD700] px-10 py-5 text-base-950 shadow-none hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
          >
            Iniciar Protocolo
          </AccentButton>

          <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 lg:text-right">
            Ref-092 // Channel Active
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent" />
    </motion.div>
  </div>
)

export { WHATSAPP_NUMBER }
