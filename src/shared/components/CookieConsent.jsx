import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiShieldCheck } from 'react-icons/hi2'
import { ROUTES } from '../../core/routes'
import { useModal } from '../context/ModalContext'
import { saveConsent, hasDecision } from '../../utils/analytics'

/**
 * Modal invasivo de consentimiento de cookies
 * Usa ModalContext para bloqueo de scroll y overlay
 * Cumple con GDPR, ePrivacy Directive y Ley 1581/2012 de Colombia
 */
export const CookieConsent = () => {
  const { openModal, closeModal } = useModal()

  useEffect(() => {
    if (!hasDecision()) {
      const timer = setTimeout(() => {
        openModal(
          <CookieConsentContent onClose={closeModal} />,
          null,
          { disableOutsideClick: true }
        )
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [openModal, closeModal])

  return null
}

const CookieConsentContent = ({ onClose }) => {
  const handleAccept = () => {
    saveConsent(true)
    onClose()
  }

  const handleReject = () => {
    saveConsent(false)
    onClose()
  }

  return (
    <div className="relative overflow-hidden">
      {/* Glow effects - contenidos dentro del overflow */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-48 w-48 rounded-full bg-[#FFD700]/20 blur-[80px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 h-40 w-40 rounded-full bg-[#FFD700]/15 blur-[60px]" aria-hidden="true" />

      {/* Contenido */}
      <div className="relative space-y-6">
        {/* Header con icono */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FFD700]/60 bg-[#FFD700]/10 md:h-20 md:w-20">
            <HiShieldCheck className="h-8 w-8 text-[#FFD700] md:h-10 md:w-10" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-semibold leading-tight !text-white md:text-2xl lg:text-3xl">
            Respetamos tu Privacidad
          </h2>
        </div>

        {/* Descripción */}
        <div className="space-y-4 text-center">
          <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
            Utilizamos <strong className="!text-white">Google Analytics</strong> para medir eventos específicos y mejorar tu experiencia en nuestro sitio. No recopilamos datos de ubicación ni información personal identificable más allá de lo necesario para el análisis de uso.
          </p>
          <p className="text-xs leading-relaxed !text-slate-400 md:text-sm">
            Puedes rechazar las cookies analíticas y seguir navegando normalmente. Solo se almacenarán cookies esenciales para el funcionamiento del sitio.
          </p>
        </div>

        {/* Lista de cookies */}
        <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 md:p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] !text-[#FFD700] md:text-base">
            ¿Qué cookies usamos?
          </h3>
          <ul className="space-y-2 text-xs !text-slate-300/85 md:text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD700]" aria-hidden="true" />
              <span><strong className="!text-white">Esenciales:</strong> Necesarias para el funcionamiento básico (siempre activas)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD700]" aria-hidden="true" />
              <span><strong className="!text-white">Analíticas:</strong> Google Analytics para medir eventos y mejorar el sitio (requiere tu consentimiento)</span>
            </li>
          </ul>
        </div>

        {/* Botones de acción */}
        <div 
          className="flex flex-col gap-3 md:flex-row md:gap-4"
          style={{
            paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
          }}
        >
          <button
            onClick={handleReject}
            className="flex-1 rounded-full border-2 border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] !text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:text-base"
            aria-label="Rechazar cookies analíticas - Solo cookies esenciales"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
            }}
          >
            Solo Esenciales
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 rounded-full bg-[#FFD700] px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] !text-black transition-all duration-300 hover:bg-[#FFD700]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:text-base"
            aria-label="Aceptar todas las cookies"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
            }}
          >
            Aceptar Cookies
          </button>
        </div>

        {/* Link a política de privacidad */}
        <p 
          className="text-center text-xs !text-slate-400 md:text-sm"
          style={{
            paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))',
          }}
        >
          Para más información, consulta nuestra{' '}
          <Link 
            to={ROUTES.privacy} 
            className="!text-[#FFD700] underline transition-colors hover:!text-[#FFD700]/80"
            onClick={onClose}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            Política de Privacidad
          </Link>
        </p>
      </div>
    </div>
  )
}
