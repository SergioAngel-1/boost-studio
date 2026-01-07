import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMapPin, HiEnvelope, HiPhone } from 'react-icons/hi2'
import { HiArrowRight } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { FormField } from '../../shared/atoms/forms/FormField'
import { ContactInfoItem } from '../../shared/atoms/contact/ContactInfoItem'
import { SocialLink } from '../../shared/atoms/contact/SocialLink'
import { fluidSizing } from '../../shared/utils/fluidSizing'
import { EXTERNAL_LINKS } from '../../core/routes'

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    website: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.email.includes('@')) {
      setError('Ingresa un email corporativo válido.')
      return
    }

    if (formData.message.trim().length < 10) {
      setError('Describe tu detonante principal con un poco más de detalle.')
      return
    }

    setStatus('loading')

    window.setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020101]">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <form onSubmit={handleSubmit} className="overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_0_60px_rgba(255,215,0,0.08)] md:rounded-3xl lg:grid lg:grid-cols-2 lg:rounded-[4rem]">
          <div className="relative overflow-hidden bg-zinc-950 p-5 md:p-8 lg:p-16">
            <div className="pointer-events-none absolute -top-36 -left-28 h-72 w-72 rounded-full bg-[#FFD700]/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-120px] right-[-60px] h-80 w-80 rounded-full bg-[#FFD700]/5 blur-3xl" />
            <div className="pointer-events-none absolute inset-0">
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
                <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                  Iniciar Protocolo de Crecimiento
                </h1>
                <p className="max-w-xl text-sm text-slate-300 md:text-base">
                  Activa nuestra maquinaria de crecimiento. Cada campo es un parámetro de misión para calibrar tu siguiente salto.
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
                  label="Email Corporativo"
                  fieldId="F-03"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="growth@empresa.com"
                  required
                />

                <FormField
                  label="Sitio Web Actual"
                  fieldId="F-04"
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://"
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
                  label="Detonante Principal"
                  fieldId="F-06"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="¿Cuál es el obstáculo #1 que te impide escalar hoy?"
                  rows={4}
                  required
                />

                <div aria-live="polite" className="space-y-2 text-sm">
                  {error ? <p className="text-[#ff6b6b]">{error}</p> : null}
                  {status === 'success' ? (
                    <p className="text-[#7bf59b]">Briefing recibido. Nuestro equipo te contactará en menos de 48h.</p>
                  ) : null}
                </div>

                {/* Botón de envío para mobile - solo visible en mobile */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status === 'loading' ? {} : { scale: 1.02 }}
                  whileTap={status === 'loading' ? {} : { scale: 0.98 }}
                  className={`group flex w-full items-center justify-center gap-2 rounded-full bg-[#FFD700] px-5 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/80 lg:hidden ${
                    status === 'loading' ? 'opacity-70' : 'hover:bg-[#ffcf20]'
                  }`}
                >
                  {status === 'loading' ? 'Procesando...' : 'Enviar Briefing'}
                  <HiArrowRight
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${status === 'loading' ? '' : 'group-hover:translate-x-1'}`}
                  />
                </motion.button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#FFD700] p-5 text-black md:p-8 lg:p-16">
            <div className="pointer-events-none absolute right-4 top-4 text-[0.6rem] font-mono uppercase tracking-[0.3em] text-slate-400 md:right-10 md:top-10 md:text-[11px] md:tracking-[0.35em]">
              Channel ID // CL-204
            </div>

            <div className="relative flex h-full flex-col justify-between space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-10">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-[0.65rem] font-mono uppercase tracking-[0.35em] text-slate-500 md:text-xs md:tracking-[0.45em]">Direct Channel</p>
                  <h2 className="text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
                    Línea Directa
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    Hablamos de negocios, data y resultados en tiempo real. Conexiones directas, sin burocracia.
                  </p>
                </div>

                <div className="space-y-4 rounded-xl border border-black/20 bg-black/10 p-4 backdrop-blur-md md:space-y-6 md:rounded-2xl md:p-6">
                  <ContactInfoItem
                    icon={HiMapPin}
                    title="HQ Titanium Tower"
                    description="Piso 18 · Distrito Financiero · Ciudad de México"
                  />
                  <div className="h-px bg-black/20" />
                  <ContactInfoItem
                    icon={HiEnvelope}
                    title="growth@booststudio.com"
                    description="Respuesta t-48h | Equipo Core Growth"
                  />
                  <div className="h-px bg-black/20" />
                  <ContactInfoItem
                    icon={HiPhone}
                    title="+1 (800) BOOST-UP"
                    description="Horario operativo: 08:00 - 20:00 (EST)"
                  />
                </div>

                <div className="space-y-3 rounded-xl border border-black/20 bg-black/10 p-4 backdrop-blur-md md:space-y-4 md:rounded-2xl md:p-6">
                  <p className="text-[0.6rem] font-mono uppercase tracking-[0.35em] text-black/60 md:text-xs md:tracking-[0.4em]">Tiempo de Respuesta</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-black md:text-4xl">{'<48h'}</span>
                    <span className="text-xs text-black/70 md:text-sm">promedio</span>
                  </div>
                  <p className="text-xs text-black/80 md:text-sm">
                    Nuestro equipo de Growth revisa cada briefing personalmente y responde con un plan de acción inicial.
                  </p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-[0.65rem] font-mono uppercase tracking-[0.35em] text-slate-500 md:text-xs md:tracking-[0.45em]">Connect</p>
                <div className="flex gap-3 md:gap-4">
                  <SocialLink icon={FaWhatsapp} href={EXTERNAL_LINKS.whatsapp} label="WhatsApp" />
                  <SocialLink icon={FaLinkedinIn} href={EXTERNAL_LINKS.linkedin} label="LinkedIn" />
                  <SocialLink icon={FaXTwitter} href={EXTERNAL_LINKS.twitter} label="Twitter" />
                  <SocialLink icon={FaInstagram} href={EXTERNAL_LINKS.instagram} label="Instagram" />
                </div>
              </div>
            </div>
          </div>

          {/* Botón de envío para desktop - solo visible en desktop */}
          <div className="hidden lg:col-span-2 lg:block">
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={status === 'loading' ? {} : { scale: 1.01 }}
              whileTap={status === 'loading' ? {} : { scale: 0.99 }}
              className={`group flex w-full items-center justify-center gap-3 border-t border-white/5 bg-[#FFD700] py-6 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/80 ${
                status === 'loading' ? 'opacity-70' : 'hover:bg-[#ffcf20]'
              }`}
            >
              {status === 'loading' ? 'Procesando...' : 'Enviar Briefing'}
              <HiArrowRight
                className={`h-5 w-5 transition-transform duration-300 ${status === 'loading' ? '' : 'group-hover:translate-x-1'}`}
              />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
