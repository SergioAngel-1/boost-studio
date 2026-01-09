import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiLocationMarker, HiMail, HiChatAlt2 } from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { SEO } from '../../shared/components/SEO'
import { SEO_CONFIG } from '../../config/seo'
import { FormField } from '../../shared/atoms/forms/FormField'
import { ContactInfoItem } from '../../shared/atoms/contact/ContactInfoItem'
import { SocialLink } from '../../shared/atoms/contact/SocialLink'
import { AccentButton } from '../../shared/atoms/buttons/AccentButton'
import { useGTM } from '../../shared/hooks/useGTM'
import { EXTERNAL_LINKS } from '../../core/routes'
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    // Si es el campo website, limpiar http/https si el usuario lo escribe
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // Sanitizar datos del formulario
    const sanitizedData = sanitizeFormData(formData)

    // Validar formulario completo
    const validation = validateContactForm(sanitizedData)
    
    if (!validation.isValid) {
      // Mostrar el primer error encontrado
      const firstError = Object.values(validation.errors)[0]
      setError(firstError)
      return
    }

    // Validar configuración de EmailJS
    if (!validateEmailConfig()) {
      setError('Servicio de email no configurado. Contacta al administrador.')
      return
    }

    setStatus('loading')

    try {
      const { serviceId, templateIdConfirmation, templateIdNotification, publicKey } = emailConfig

      // Preparar datos del template (sin to_email, se configura en EmailJS Dashboard)
      const fullWebsite = sanitizedData.website ? `${urlProtocol}${sanitizedData.website}` : 'No proporcionado'
      
      const templateParams = {
        user_name: sanitizedData.name,
        user_lastname: sanitizedData.lastName,
        user_email: sanitizedData.email,
        user_website: fullWebsite,
        user_budget: sanitizedData.budget,
        user_message: sanitizedData.message,
        reply_to: sanitizedData.email,
      }

      // Envío 1: Email de confirmación al usuario
      await emailjs.send(
        serviceId,
        templateIdConfirmation,
        templateParams,
        publicKey
      )

      // Envío 2: Notificación interna con datos del lead
      await emailjs.send(
        serviceId,
        templateIdNotification,
        templateParams,
        publicKey
      )

      // Éxito: ambos emails enviados
      setStatus('success')
      
      // Track successful form submission
      trackEvent('form_submission', {
        form_name: 'contact_form',
        form_location: '/contacto',
        user_budget: sanitizedData.budget,
        has_website: !!sanitizedData.website,
        message_length: sanitizedData.message.length,
      })
      
      // Limpiar formulario después de 3 segundos
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
      
      // Track form submission error
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
        className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <form onSubmit={handleSubmit} aria-label="Formulario de contacto para iniciar protocolo de crecimiento" className="overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_0_60px_rgba(255,215,0,0.08)] md:rounded-3xl lg:grid lg:grid-cols-2 lg:rounded-[4rem]">
          <div className="relative overflow-hidden bg-zinc-950 p-5 md:p-8 lg:p-16">
            <div className="pointer-events-none absolute -top-36 -left-28 h-72 w-72 rounded-full bg-[#FFD700]/5 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-[-120px] right-[-60px] h-80 w-80 rounded-full bg-[#FFD700]/5 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute left-10 top-10 hidden h-12 w-12 border-l border-t border-[#FFD700]/35 md:block" />
              <div className="absolute right-10 top-10 hidden h-12 w-12 border-r border-t border-[#FFD700]/35 md:block" />
              <div className="absolute bottom-10 left-10 hidden h-12 w-12 border-b border-l border-[#FFD700]/35 md:block" />
              <div className="absolute bottom-10 right-10 hidden h-12 w-12 border-b border-r border-[#FFD700]/35 md:block" />
            </div>

            <div className="relative space-y-8 md:space-y-12">
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

              <div className="space-y-6 md:space-y-10">
                <div className="grid gap-5 md:gap-8 lg:grid-cols-2">
                  <FormField
                    label="Nombre"
                    fieldId="F-01"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ej. Laura"
                    required
                  />
                  <FormField
                    label="Apellido"
                    fieldId="F-02"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Ej. Ochoa"
                    required
                  />
                </div>

                <FormField
                  label="Email"
                  fieldId="F-03"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  required
                />

                <FormField
                  label="Sitio Web (Opcional)"
                  fieldId="F-04"
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="tuempresa.com"
                  prefix={urlProtocol}
                  onPrefixChange={handleProtocolChange}
                />

                <FormField
                  label="Rango de Presupuesto"
                  fieldId="F-05"
                  type="select"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  icon={HiArrowRight}
                  required
                  options={[
                    { value: '', label: 'Asignar rango' },
                    { value: '< $5k', label: '< $5k' },
                    { value: '$5k - $15k', label: '$5k - $15k' },
                    { value: '$15k - $50k', label: '$15k - $50k' },
                    { value: 'Enterprise (> $50k)', label: 'Enterprise (> $50k)' },
                  ]}
                />

                <FormField
                  label="Cuéntanos sobre tu proyecto"
                  fieldId="F-06"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="¿Qué objetivos de crecimiento tienes para tu negocio?"
                  rows={4}
                  required
                />

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

                {/* Botón de envío para mobile - solo visible en mobile */}
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
          </div>

          <div className="relative overflow-hidden bg-[#FFD700] p-5 text-black md:p-8 lg:p-16">
            <div className="pointer-events-none absolute right-4 top-4 text-[0.6rem] font-mono uppercase tracking-[0.3em] text-slate-400 md:right-10 md:top-10 md:text-[11px] md:tracking-[0.35em]" aria-hidden="true">
              Channel ID // CL-204
            </div>

            <div className="relative flex h-full flex-col justify-between space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-10">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-[0.65rem] font-mono uppercase tracking-[0.35em] text-slate-500 md:text-xs md:tracking-[0.45em]">Contacto Directo</p>
                  <h2 id="direct-line-heading" className="text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
                    Información de Contacto
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    Contáctanos directamente por cualquiera de nuestros canales. Estamos listos para ayudarte a hacer crecer tu negocio.
                  </p>
                </div>

                <div className="space-y-4 rounded-xl border border-black/20 bg-black/10 p-4 backdrop-blur-md md:space-y-6 md:rounded-2xl md:p-6" role="list" aria-label="Información de contacto">
                  <ContactInfoItem
                    icon={HiLocationMarker}
                    iconHidden={true}
                    title="Colombia"
                    description="Atención a clientes en toda Latinoamérica"
                    role="listitem"
                  />
                  <div className="h-px bg-black/20" aria-hidden="true" />
                  <ContactInfoItem
                    icon={HiMail}
                    iconHidden={true}
                    title="info@growthbooststudio.com"
                    description="Respuesta en menos de 48 horas"
                    role="listitem"
                  />
                  <div className="h-px bg-black/20" aria-hidden="true" />
                  <ContactInfoItem
                    icon={HiChatAlt2}
                    iconHidden={true}
                    title="WhatsApp"
                    description="Envíanos un mensaje para atención inmediata"
                    role="listitem"
                  />
                </div>

                <div className="space-y-3 rounded-xl border border-black/20 bg-black/10 p-4 backdrop-blur-md md:space-y-4 md:rounded-2xl md:p-6">
                  <p className="text-[0.6rem] font-mono uppercase tracking-[0.35em] text-black/60 md:text-xs md:tracking-[0.4em]">Tiempo de Respuesta</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-black md:text-4xl">{'<48h'}</span>
                    <span className="text-xs text-black/70 md:text-sm">promedio</span>
                  </div>
                  <p className="text-xs text-black/80 md:text-sm">
                    Nuestro equipo de especialistas revisa cada solicitud personalmente y responde con una propuesta de estrategia digital.
                  </p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-[0.65rem] font-mono uppercase tracking-[0.35em] text-slate-500 md:text-xs md:tracking-[0.45em]">Connect</p>
                <div className="flex gap-3 md:gap-4">
                  <SocialLink icon={FaWhatsapp} href={EXTERNAL_LINKS.whatsapp} label="WhatsApp" />
                  <SocialLink icon={FaLinkedinIn} href={EXTERNAL_LINKS.linkedin} label="LinkedIn" />
                  <SocialLink icon={FaXTwitter} href={EXTERNAL_LINKS.x} label="X" />
                  <SocialLink icon={FaInstagram} href={EXTERNAL_LINKS.instagram} label="Instagram" />
                </div>
              </div>
            </div>
          </div>

          {/* Botón de envío para desktop - solo visible en desktop */}
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
