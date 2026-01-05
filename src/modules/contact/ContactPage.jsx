import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react'
import { GridBackground } from '../../shared/molecules/GridBackground'
import { FormField } from '../../shared/atoms/forms/FormField'
import { ContactInfoItem } from '../../shared/atoms/contact/ContactInfoItem'
import { SocialLink } from '../../shared/atoms/contact/SocialLink'
import { fluidSizing } from '../../shared/utils/fluidSizing'

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
      <GridBackground />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl" style={{ padding: `${fluidSizing.section.py} ${fluidSizing.spacing.lg}` }}>
        <div className="overflow-hidden rounded-3xl bg-neutral-900 shadow-[0_40px_120px_-60px_rgba(255,215,0,0.45)] lg:grid lg:grid-cols-2 lg:rounded-[4rem]">
          <div className="relative overflow-hidden bg-zinc-950 p-8 lg:p-16">
            <div className="pointer-events-none absolute -top-36 -left-28 h-72 w-72 rounded-full bg-[#FFD700]/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-120px] right-[-60px] h-80 w-80 rounded-full bg-[#FFD700]/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-10 left-10 h-12 w-12 border-l border-t border-[#FFD700]/35" />
              <div className="absolute top-10 right-10 h-12 w-12 border-r border-t border-[#FFD700]/35" />
              <div className="absolute bottom-10 left-10 h-12 w-12 border-b border-l border-[#FFD700]/35" />
              <div className="absolute bottom-10 right-10 h-12 w-12 border-b border-r border-[#FFD700]/35" />
            </div>

            <div className="relative space-y-12">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500">
                  <span>
                    Status <span className="text-[#FFD700]">Online</span>
                  </span>
                  <span>Ref-092</span>
                </div>
                <h1 className="font-semibold text-white" style={{ fontSize: fluidSizing.heading.h1 }}>
                  Iniciar Protocolo de Crecimiento
                </h1>
                <p className="max-w-xl text-base text-slate-300">
                  Activa nuestra maquinaria de crecimiento. Cada campo es un parámetro de misión para calibrar tu siguiente salto.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-8 lg:grid-cols-2">
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
                  icon={ArrowRight}
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

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status === 'loading' ? {} : { scale: 1.015 }}
                  whileTap={status === 'loading' ? {} : { scale: 0.98 }}
                  className={`group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FFD700] py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
                    status === 'loading' ? 'opacity-70' : 'hover:bg-[#ffcf20]'
                  }`}
                >
                  {status === 'loading' ? 'Procesando...' : 'Enviar Solicitud'}
                  <ArrowRight
                    className={`transition-transform duration-300 ${status === 'loading' ? '' : 'group-hover:translate-x-1'}`}
                    size={18}
                    strokeWidth={1.8}
                  />
                </motion.button>

                <div aria-live="polite" className="space-y-2 text-sm">
                  {error ? <p className="text-[#ff6b6b]">{error}</p> : null}
                  {status === 'success' ? (
                    <p className="text-[#7bf59b]">Briefing recibido. Nuestro equipo te contactará en menos de 48h.</p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#FFD700] p-8 text-black lg:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.18) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="pointer-events-none absolute top-10 right-10 text-[11px] font-mono uppercase tracking-[0.35em] text-black/60">
              Channel ID // CL-204
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-xs font-mono uppercase tracking-[0.45em] text-black/60">Direct Channel</p>
                  <h2 className="text-3xl font-semibold text-black lg:text-4xl">Direct Line</h2>
                  <p className="text-base text-black/80">
                    Hablamos de negocios, data y resultados en tiempo real. Conexiones directas, sin burocracia.
                  </p>
                </div>

                <div className="space-y-7">
                  <ContactInfoItem
                    icon={MapPin}
                    title="HQ Titanium Tower"
                    description="Piso 18 · Distrito Financiero · Ciudad de México"
                  />
                  <ContactInfoItem
                    icon={Mail}
                    title="growth@booststudio.com"
                    description="Respuesta t-48h | Equipo Core Growth"
                  />
                  <ContactInfoItem
                    icon={Phone}
                    title="+1 (800) BOOST-UP"
                    description="Horario operativo: 08:00 - 20:00 (EST)"
                  />
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-mono uppercase tracking-[0.45em] text-black/60">Connect</p>
                  <motion.a
                    href="mailto:growth@booststudio.com"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-black"
                  >
                    Send Briefing
                    <ArrowRight size={18} strokeWidth={1.7} />
                  </motion.a>
                </div>
                <div className="flex gap-4">
                  <SocialLink icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
                  <SocialLink icon={Twitter} href="https://twitter.com" label="Twitter" />
                  <SocialLink icon={Instagram} href="https://instagram.com" label="Instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
