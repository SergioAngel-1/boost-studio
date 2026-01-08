import { motion } from 'framer-motion'
import { AccentButton } from '../../../atoms/buttons/AccentButton'
import { ROUTES } from '../../../../core/routes'

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
}

export const HeroCTA = () => (
  <motion.div
    variants={fadeInUp}
    className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
  >
    <AccentButton 
      className="border border-[#FFD700]/40 px-7 py-3 shadow-glow !text-sm whitespace-nowrap" 
      href={ROUTES.contact}
      aria-label="Hablar con Boost - Agenda una sesión estratégica"
    >
      Hablar con Boost
    </AccentButton>
    <span className="text-xs text-slate-400 md:text-sm flex-1">
      Agenda una sesión estratégica de 30 minutos.
    </span>
  </motion.div>
)
