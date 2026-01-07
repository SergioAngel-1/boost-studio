import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'
import PropTypes from 'prop-types'
import { NAV_ITEMS } from '../../../core/navigation'
import { EXTERNAL_LINKS } from '../../../core/routes'

const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
}

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + index * 0.05,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      const originalPaddingRight = document.body.style.paddingRight
      
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`

      return () => {
        document.body.style.overflow = originalOverflow
        document.body.style.paddingRight = originalPaddingRight
      }
    }

    return undefined
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
            className="fixed inset-y-0 right-0 z-[70] flex w-[280px] flex-col border-l border-white/10 bg-[#020101]/95 backdrop-blur-2xl"
          >
            {/* Header fijo */}
            <div className="shrink-0 border-b border-white/10 px-4 py-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#FFD700]">Menú</span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar menú"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:border-[#FFD700]/60 hover:bg-[#FFD700]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70"
                >
                  <HiXMark className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Contenido scrolleable */}
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
              <nav aria-label="Navegación móvil">
                <ul className="space-y-2.5">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.li
                      key={item.to}
                      custom={index}
                      initial="closed"
                      animate="open"
                      variants={itemVariants}
                    >
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `group flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                            isActive
                              ? 'border-[#FFD700]/70 bg-[#FFD700]/15 text-white'
                              : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-[#FFD700]/40 hover:bg-[#FFD700]/10 hover:text-white'
                          }`
                        }
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD700] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                        <span className="truncate">{item.label}</span>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Footer fijo */}
            <div className="shrink-0 border-t border-white/10 px-4 py-4">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                href={EXTERNAL_LINKS.talkToBoost}
                target="_blank"
                rel="noreferrer"
                aria-label="Hablar con Boost - Abre en nueva pestaña"
                className="flex items-center justify-center gap-2 rounded-full bg-[#FFD700] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-950 shadow-glow transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Hablar con Boost
              </motion.a>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
