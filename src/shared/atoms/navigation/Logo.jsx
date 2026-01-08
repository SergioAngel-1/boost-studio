import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
const LOGO_DEFAULT = '/Images/Boost_Logo-200.webp'
const LOGO_SRCSET = '/Images/Boost_Logo-120.webp 120w, /Images/Boost_Logo-200.webp 200w, /Images/Boost_Logo-320.webp 320w'

export const Logo = () => (
  <NavLink to="/" className="group relative flex items-center" aria-label="Boost Studio - Ir a página de inicio">
    <motion.img
      src={LOGO_DEFAULT}
      srcSet={LOGO_SRCSET}
      sizes="(max-width: 768px) 120px, 180px"
      alt="Boost Studio - Agencia de Growth Marketing Digital"
      className="h-12 w-auto object-contain"
      width="180"
      height="72"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  </NavLink>
)
