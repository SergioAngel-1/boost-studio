import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'
import { AccentButton } from '../../atoms/buttons/AccentButton'
import { ROUTES } from '../../../core/routes'

const WHATSAPP_NUMBER = '521234567890'

export const ContactFormSection = () => (
  <section aria-labelledby="contact-heading" className="relative flex flex-col gap-8 px-4 py-12 md:gap-12 md:px-8 md:py-16 lg:px-12">
    <motion.span
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-300 md:text-xs md:tracking-[0.45em]"
    >
      Protocolo de Activación
    </motion.span>
    <motion.h2
      id="contact-heading"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-4xl text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
    >
      ¿Listo para encender tu <span className="text-[#FFD700]">crecimiento exponencial</span>?
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl md:rounded-3xl"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-[#FFD700]/20 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-[#FFD700]/15 blur-[80px]" aria-hidden="true" />

      <div className="relative grid gap-6 p-5 md:gap-8 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-12">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-2.5 md:gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD700] text-base-950 md:h-12 md:w-12" aria-label="Icono de conversación">
              <HiChatBubbleLeftRight className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-mono uppercase tracking-[0.28em] text-[#FFD700] md:text-xs md:tracking-[0.35em]">Status</span>
              <span className="text-xs font-semibold text-white md:text-sm">Disponible para nuevos proyectos</span>
            </div>
          </div>

          <p className="max-w-2xl leading-relaxed text-slate-300" style={{ fontSize: 'clamp(0.875rem, 0.875rem + 0.125vw, 1rem)' }}>
            Activa nuestra maquinaria de crecimiento. Completa el briefing estratégico y nuestro equipo core te contactará en menos de 48 horas con un plan de acción calibrado.
          </p>

          <ul className="flex flex-wrap gap-3 text-xs text-slate-400 md:gap-4 md:text-sm" role="list" aria-label="Beneficios del servicio">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD700]" aria-hidden="true" />
              <span>Respuesta t-48h</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD700]" aria-hidden="true" />
              <span>Sesión estratégica incluida</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD700]" aria-hidden="true" />
              <span>Sin compromiso inicial</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 lg:items-end">
          <AccentButton
            href={ROUTES.contact}
            icon={HiArrowRight}
            className="bg-[#FFD700] px-6 py-3 text-base-950 shadow-none hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] md:px-8 md:py-4"
            aria-label="Iniciar Protocolo de Crecimiento - Ir a formulario de contacto"
          >
            Iniciar Protocolo
          </AccentButton>

          <span className="text-[0.6rem] font-mono uppercase tracking-[0.25em] text-slate-500 md:text-xs md:tracking-[0.3em] lg:text-right">
            Ref-092 // Channel Active
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent" aria-hidden="true" />
    </motion.div>
  </section>
)

export { WHATSAPP_NUMBER }
