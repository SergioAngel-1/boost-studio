import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const TeamMemberCard = ({ name, role, image, delay = 0, className = '' }) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    className={`group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0b0b0f] ${className}`}
  >
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      {image ? (
        <img src={image} alt={name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_#1a1a1f,_#050507)] transition duration-300 group-hover:scale-105" />
      )}
      <div className="absolute inset-0 opacity-0 mix-blend-luminosity transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,215,0,0.35)_0%,_rgba(5,5,7,0.95)_70%)]" />
      </div>
    </div>
    <div className="flex flex-col gap-2 border-t border-white/5 p-8">
      <span className="text-lg font-semibold text-white transition duration-300 group-hover:text-[#FFD700]">{name}</span>
      <span className="text-sm uppercase tracking-[0.3em] text-slate-400 transition duration-300 group-hover:text-[#FFD700]">
        {role}
      </span>
    </div>
  </motion.article>
)

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
}
