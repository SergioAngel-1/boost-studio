import { useRef } from 'react'
import PropTypes from 'prop-types'
import { HiArrowRight } from 'react-icons/hi'
import { ContactFormFields } from '../../molecules/contact/ContactFormFields'
import { RecaptchaWidget } from '../../atoms/recaptcha/RecaptchaWidget'
import { AccentButton } from '../../atoms/buttons/AccentButton'

export const ContactFormSection = ({ 
  formData,
  urlProtocol,
  status,
  error,
  onInputChange,
  onProtocolChange,
  onSubmit,
  onRecaptchaSuccess,
  onRecaptchaExpired,
  recaptchaRef
}) => {
  return (
    <div className="relative overflow-hidden bg-zinc-950 p-5 md:p-8 lg:p-16">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -top-36 -left-28 h-72 w-72 rounded-full bg-[#FFD700]/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-60px] h-80 w-80 rounded-full bg-[#FFD700]/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-10 top-10 hidden h-12 w-12 border-l border-t border-[#FFD700]/35 md:block" />
        <div className="absolute right-10 top-10 hidden h-12 w-12 border-r border-t border-[#FFD700]/35 md:block" />
        <div className="absolute bottom-10 left-10 hidden h-12 w-12 border-b border-l border-[#FFD700]/35 md:block" />
        <div className="absolute bottom-10 right-10 hidden h-12 w-12 border-b border-r border-[#FFD700]/35 md:block" />
      </div>

      <div className="relative space-y-8 md:space-y-12">
        {/* Header */}
        <div className="space-y-3 md:space-y-5">
          <div className="flex flex-wrap items-center justify-between text-[0.6rem] font-mono uppercase tracking-[0.3em] text-slate-500 md:text-[11px] md:tracking-[0.35em]">
            <span>
              Status <span className="text-[#FFD700]">Online</span>
            </span>
            <span>Ref-092</span>
          </div>
          <h1 id="contact-heading" className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            Solicita tu consultoría de marketing digital
          </h1>
          <p className="max-w-xl text-sm text-white md:text-base !text-white">
            Completa el formulario y nuestro equipo de especialistas en growth marketing te contactará en menos de 48 horas con una propuesta personalizada.
          </p>
        </div>

        {/* Form Fields */}
        <ContactFormFields
          formData={formData}
          urlProtocol={urlProtocol}
          onInputChange={onInputChange}
          onProtocolChange={onProtocolChange}
        />

        {/* reCAPTCHA Widget (invisible) */}
        <RecaptchaWidget
          ref={recaptchaRef}
          onSuccess={onRecaptchaSuccess}
          onExpired={onRecaptchaExpired}
        />

        {/* Status Messages + reCAPTCHA Disclaimer */}
        <div className="space-y-3">
          <div aria-live="polite" className="space-y-2 text-sm">
            {error ? <p className="text-[#ff6b6b]">{error}</p> : null}
            {status === 'success' ? (
              <p className="text-[#7bf59b]">¡Mensaje enviado! Te contactaremos en menos de 48 horas.</p>
            ) : null}
          </div>

          <p className="text-[10px] leading-relaxed text-slate-500 md:text-xs">
          Este formulario está protegido por reCAPTCHA. Se aplican la{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 underline-offset-2 hover:text-[#FFD700] hover:underline"
          >
            Política de Privacidad
          </a>
          {' '}y los{' '}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 underline-offset-2 hover:text-[#FFD700] hover:underline"
          >
            Términos de Servicio
          </a>
          {' '}de Google.
          </p>
        </div>

        {/* Mobile Submit Button */}
        <AccentButton
          as="button"
          type="submit"
          disabled={status === 'loading'}
          icon={HiArrowRight}
          className={`w-full justify-center px-5 py-3.5 text-[0.65rem] tracking-[0.2em] lg:hidden ${
            status === 'loading' ? 'opacity-70 pointer-events-none' : ''
          }`}
          aria-label={status === 'loading' ? 'Procesando formulario' : 'Enviar briefing'}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
        </AccentButton>
      </div>
    </div>
  )
}

ContactFormSection.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  urlProtocol: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['idle', 'loading', 'success', 'error']).isRequired,
  error: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onProtocolChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRecaptchaSuccess: PropTypes.func,
  onRecaptchaExpired: PropTypes.func,
  recaptchaRef: PropTypes.object.isRequired,
}
