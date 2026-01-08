import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import boostLogo from '/Images/Boost_Logo.png'

export const Logo = () => (
  <NavLink to="/" className="group relative flex items-center" aria-label="Boost Studio - Ir a página de inicio">
    <motion.img
      src={boostLogo}
      alt="Boost Studio - Agencia de Growth Marketing Digital"
      className="h-12 w-auto object-contain"
      width="120"
      height="48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  </NavLink>
)
