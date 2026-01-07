import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiHome, HiArrowLeft } from 'react-icons/hi'
import { HiExclamationTriangle } from 'react-icons/hi2'
import { ROUTES } from '../../core/routes'
import { fluidSizing } from '../../shared/utils/fluidSizing'

export const NotFoundPage = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020101]">
    <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#FFD700]/20 blur-[120px]" />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#FFD700]/40 bg-[#FFD700]/10 backdrop-blur-xl"
          >
            <HiExclamationTriangle className="h-12 w-12 text-[#FFD700]" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0 rounded-full bg-[#FFD700]/20 blur-xl"
          />
        </div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#FFD700]">Error</span>
            <span className="h-1 w-1 rounded-full bg-[#FFD700]" />
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-slate-500">404</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="font-semibold leading-tight text-white"
            style={{ fontSize: fluidSizing.heading.h1 }}
          >
            Ruta no encontrada
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300"
          >
            Esta coordenada no existe en nuestro sistema. El protocolo de navegación ha detectado una ruta inválida.
            Redirige tu trayectoria hacia el núcleo principal.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            to={ROUTES.home}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FFD700] px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-base-950 shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <HiHome className="h-5 w-5" />
            Volver al Inicio
          </Link>

          <Link
            to={-1}
            onClick={(e) => {
              e.preventDefault()
              window.history.back()
            }}
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.05] px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-xl transition-all duration-300 hover:border-[#FFD700]/40 hover:bg-white/[0.08] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <HiArrowLeft className="h-5 w-5" />
            Regresar
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
        >
          <Link to={ROUTES.services} className="transition-colors duration-300 hover:text-[#FFD700]">
            Servicios
          </Link>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <Link to={ROUTES.about} className="transition-colors duration-300 hover:text-[#FFD700]">
            Nosotros
          </Link>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <Link to={ROUTES.cases} className="transition-colors duration-300 hover:text-[#FFD700]">
            Casos
          </Link>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <Link to={ROUTES.contact} className="transition-colors duration-300 hover:text-[#FFD700]">
            Contacto
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
)
