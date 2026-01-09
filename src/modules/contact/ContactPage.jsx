import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiArrowRight } from 'react-icons/hi'
import { SEO } from '../../shared/components/SEO'
import { SEO_CONFIG } from '../../config/seo'
import { AccentButton } from '../../shared/atoms/buttons/AccentButton'
import { ContactFormSection } from '../../shared/organisms/contact/ContactFormSection'
import { ContactInfoSection } from '../../shared/organisms/contact/ContactInfoSection'
import { useGTM } from '../../shared/hooks/useGTM'
import { emailConfig, validateEmailConfig, getEmailErrorMessage } from '../../config/emailjs'
import { validateContactForm, sanitizeFormData } from '../../shared/utils/formValidations'

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    website: '',
    budget: '',
    message: '',
  })
  const [urlProtocol, setUrlProtocol] = useState('https://')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const { trackEvent } = useGTM()
  
  const recaptchaRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'website') {
      const cleanValue = value.replace(/^(https?:\/\/)/, '')
      setFormData(prev => ({ ...prev, [name]: cleanValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleProtocolChange = (e) => {
    setUrlProtocol(e.target.value)
  }

  const handleRecaptchaSuccess = () => {
    setError(null)
  }

  const handleRecaptchaExpired = () => {
    setError('El captcha ha expirado. Por favor, complétalo nuevamente.')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const sanitizedData = sanitizeFormData(formData)
    const validation = validateContactForm(sanitizedData)
    
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0]
      setError(firstError)
      return
    }

    if (!validateEmailConfig()) {
      setError('Servicio de email no configurado. Contacta al administrador.')
      return
    }

    setStatus('loading')

    try {
      // Ejecutar reCAPTCHA invisible y obtener token
      const recaptchaToken = await recaptchaRef.current?.execute()
      
      if (!recaptchaToken) {
        throw new Error('No se pudo obtener el token de reCAPTCHA')
      }

      const { serviceId, templateIdConfirmation, templateIdNotification, publicKey } = emailConfig
      const fullWebsite = sanitizedData.website ? `${urlProtocol}${sanitizedData.website}` : 'No proporcionado'
      
      const baseTemplateParams = {
        user_name: sanitizedData.name,
        user_lastname: sanitizedData.lastName,
        user_email: sanitizedData.email,
        user_website: fullWebsite,
        user_budget: sanitizedData.budget,
        user_message: sanitizedData.message,
        reply_to: sanitizedData.email,
      }

      // Email 1: Confirmación al usuario (con reCAPTCHA)
      await emailjs.send(serviceId, templateIdConfirmation, {
        ...baseTemplateParams,
        'g-recaptcha-response': recaptchaToken,
      }, publicKey)

      // Email 2: Notificación a Boost (sin reCAPTCHA - ya validado en email 1)
      await emailjs.send(serviceId, templateIdNotification, baseTemplateParams, publicKey)

      setStatus('success')
      
      trackEvent('form_submission', {
        form_name: 'contact_form',
        form_location: '/contacto',
        user_budget: sanitizedData.budget,
        has_website: !!sanitizedData.website,
        message_length: sanitizedData.message.length,
      })
      
      recaptchaRef.current?.reset()
      
      setTimeout(() => {
        setFormData({
          name: '',
          lastName: '',
          email: '',
          website: '',
          budget: '',
          message: '',
        })
        setStatus('idle')
      }, 3000)

    } catch (err) {
      console.error('Error al enviar emails:', err)
      const errorMessage = getEmailErrorMessage(err)
      setError(errorMessage)
      setStatus('idle')
      
      recaptchaRef.current?.reset()
      
      trackEvent('form_error', {
        form_name: 'contact_form',
        form_location: '/contacto',
        error_type: 'email_service',
        error_message: errorMessage,
        user_budget: sanitizedData.budget,
      })
    }
  }

  return (
    <>
      <SEO {...SEO_CONFIG.pages.contact} url="/contacto" />
      <section aria-labelledby="contact-heading" className="relative min-h-screen overflow-hidden bg-[#020101]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
        >
          <form 
            onSubmit={handleSubmit} 
            aria-label="Formulario de contacto para iniciar protocolo de crecimiento" 
            className="overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_0_60px_rgba(255,215,0,0.08)] md:rounded-3xl lg:grid lg:grid-cols-2 lg:rounded-[4rem]"
          >
            <ContactFormSection
              formData={formData}
              urlProtocol={urlProtocol}
              status={status}
              error={error}
              onInputChange={handleInputChange}
              onProtocolChange={handleProtocolChange}
              onSubmit={handleSubmit}
              onRecaptchaSuccess={handleRecaptchaSuccess}
              onRecaptchaExpired={handleRecaptchaExpired}
              recaptchaRef={recaptchaRef}
            />

            <ContactInfoSection />

            {/* Desktop Submit Button */}
            <div className="hidden lg:col-span-2 lg:block">
              <AccentButton
                as="button"
                type="submit"
                disabled={status === 'loading'}
                icon={HiArrowRight}
                className={`w-full justify-center gap-3 rounded-none border-t border-white/5 py-6 text-sm tracking-[0.3em] ${
                  status === 'loading' ? 'opacity-70 pointer-events-none' : ''
                }`}
                aria-label={status === 'loading' ? 'Procesando formulario' : 'Enviar briefing'}
              >
                {status === 'loading' ? 'Procesando...' : 'Enviar Briefing'}
              </AccentButton>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  )
}
