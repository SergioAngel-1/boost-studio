import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -30 },
  hiddenRight: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export const ServiceCard = ({ service, alignment = 'left', onActivate }) => {
  const { title, description, Icon } = service
  const isLeft = alignment === 'left'

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onActivate()
    }
  }

  const connectorClasses = isLeft
    ? 'right-[-70px] bg-[linear-gradient(90deg,rgba(255,215,0,0.9),rgba(255,215,0,0))]'
    : 'left-[-70px] bg-[linear-gradient(90deg,rgba(255,215,0,0),rgba(255,215,0,0.9))]'

  const cardClasses = isLeft
    ? 'lg:order-1 lg:col-start-1 lg:ml-auto'
    : 'lg:order-3 lg:col-start-3 lg:mr-auto'

  return (
    <motion.article
      initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      onClick={onActivate}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Ver detalles del servicio: ${title}`}
      className={`relative z-10 order-2 flex cursor-pointer flex-col gap-4 rounded-2xl border border-white/10 bg-[#050405]/92 p-5 text-left backdrop-blur-xl transition-all duration-300 delay-75 hover:-translate-y-1 hover:border-[#FFD700]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:gap-5 md:rounded-3xl md:p-6 lg:max-w-xl lg:p-8 ${cardClasses}`}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFD700]/60 bg-[#050405] shadow-glow md:h-12 md:w-12" aria-label={`Icono de ${title}`}>
          <Icon aria-hidden="true" />
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white md:text-xl">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-300/90 md:text-sm">{description}</p>
      <span className={`pointer-events-none absolute top-1/2 hidden h-[3px] w-20 -translate-y-1/2 rounded-full shadow-[0_0_25px_rgba(255,215,0,0.45)] lg:block ${connectorClasses}`} aria-hidden="true" />
    </motion.article>
  )
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
  }).isRequired,
  alignment: PropTypes.oneOf(['left', 'right']).isRequired,
  onActivate: PropTypes.func.isRequired,
}
