import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import boostLogo from '/Images/Boost_Logo.jpg'

export const Logo = () => (
  <NavLink to="/" className="group relative flex items-center">
    <motion.img
      layoutId="boost-logo-icon"
      src={boostLogo}
      alt="Boost logo"
      className="h-12 w-auto object-contain"
      transition={{ type: 'spring', stiffness: 340, damping: 28 }}
    />
  </NavLink>
)
