import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import boostLogo from '/Images/Boost_Logo.jpg'

export const Logo = () => (
  <NavLink to="/" className="group relative flex items-center">
    <motion.img
      src={boostLogo}
      alt="Boost logo"
      className="h-12 w-auto object-contain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  </NavLink>
)
