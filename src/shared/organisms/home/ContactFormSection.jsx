import { useState } from 'react'
import { motion } from 'framer-motion'
import { FormField } from '../../atoms/forms/FormField'
import { fluidSizing } from '../../utils/fluidSizing'

const WHATSAPP_NUMBER = '521234567890'

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({ name: '', company: '', message: '' })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const text = `Hola Boost Studio!%0A%0ASoy ${formData.name || 'un prospecto'}.%0AEmpresa: ${formData.company || 'Sin especificar'}.%0A%0A${formData.message || 'Quisiera conversar sobre cómo Boost puede potenciar nuestro crecimiento.'}`
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
  }

  return (
    <div className="relative flex flex-col" style={{ gap: fluidSizing.spacing['2xl'], padding: `${fluidSizing.spacing['3xl']} ${fluidSizing.spacing['3xl']}` }}>
      <motion.span
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs uppercase tracking-[0.45em] text-slate-300"
      >
        WhatsApp Direct
      </motion.span>
      <motion.h3
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-semibold leading-tight text-white" style={{ fontSize: fluidSizing.heading.h3, maxWidth: fluidSizing.container['5xl'] }}>
        Coordina una sesión táctica con nuestro equipo ejecutivo en menos de 60 segundos.
      </motion.h3>

      <motion.form
        onSubmit={handleFormSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Nombre"
            fieldId="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Tu nombre"
            required
            className="[&>div:first-child]:text-xs [&>div:first-child]:font-semibold [&>div:first-child]:uppercase [&>div:first-child]:tracking-[0.32em] [&>div:first-child]:text-slate-300"
          />
          <FormField
            label="Empresa"
            fieldId="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleFormChange}
            placeholder="Dónde lideras crecimiento"
            className="[&>div:first-child]:text-xs [&>div:first-child]:font-semibold [&>div:first-child]:uppercase [&>div:first-child]:tracking-[0.32em] [&>div:first-child]:text-slate-300"
          />
        </div>
        <FormField
          label="Contexto"
          fieldId="message"
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleFormChange}
          placeholder="Cuéntanos qué hito quieres desbloquear"
          rows={4}
          className="[&>div:first-child]:text-xs [&>div:first-child]:font-semibold [&>div:first-child]:uppercase [&>div:first-child]:tracking-[0.32em] [&>div:first-child]:text-slate-300"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#FFD700] px-8 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-base-950 transition-shadow duration-300"
        >
          Iniciar Conversación
        </motion.button>
      </motion.form>
    </div>
  )
}

export { WHATSAPP_NUMBER }
