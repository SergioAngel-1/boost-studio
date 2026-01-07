import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const alignMap = {
  start: 'items-start text-left',
  center: 'items-center text-center',
  end: 'items-end text-right',
}

export const SectionIntro = ({ eyebrow, title, description, align = 'start', headingId }) => (
  <motion.header
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    className={`flex flex-col gap-6 ${alignMap[align] ?? alignMap.start}`}
  >
    {eyebrow ? (
      <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">{eyebrow}</span>
    ) : null}
    <h2 id={headingId} className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
    {description ? (
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">{description}</p>
    ) : null}
  </motion.header>
)

SectionIntro.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  headingId: PropTypes.string,
}
