import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import { SEO } from '../../shared/components/SEO'
import { SchemaMarkup } from '../../shared/components/SchemaMarkup'
import { FAQ_DATA, generateFAQSchema } from '../../shared/data/faq'
import { AccentButton } from '../../shared/atoms/buttons/AccentButton'
import { ROUTES } from '../../core/routes'

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className="border-b border-white/10 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:text-[#FFD700] md:py-8"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <h3 className={`flex-1 text-base font-semibold leading-tight transition-colors group-hover:text-[#FFD700] md:text-lg ${isOpen ? '!text-[#FFD700]' : 'text-white'}`}>
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors group-hover:bg-[#FFD700]/20 md:h-8 md:w-8 ${isOpen ? 'bg-[#FFD700]/20' : 'bg-white/5'}`}
        >
          <HiChevronDown className={`h-4 w-4 transition-colors group-hover:text-[#FFD700] md:h-5 md:w-5 ${isOpen ? 'text-[#FFD700]' : 'text-white'}`} aria-hidden="true" />
        </motion.div>
      </button>
      
      <motion.div
        id={`faq-answer-${faq.id}`}
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-sm leading-relaxed text-slate-300/90 md:pb-8 md:text-base !text-white">
          {faq.answer}
        </p>
      </motion.div>
    </motion.article>
  )
}

export const FAQPage = () => (
  <>
    <SEO
      title="Preguntas Frecuentes | FAQ | Boost Studio"
      description="Respuestas a las preguntas más frecuentes sobre nuestros servicios de Growth Marketing, UX/UI, Performance Marketing y estrategias de crecimiento digital. Consultoría, precios, tiempos y metodología."
      keywords="faq growth marketing, preguntas frecuentes agencia digital, consultoría marketing digital, precios growth marketing, cuánto cuesta agencia digital, servicios seo, ux ui design"
      url="/faq"
    />
    <SchemaMarkup schema={generateFAQSchema()} />
    
    <section aria-labelledby="faq-heading" className="relative min-h-screen bg-[#020102] text-white">
      {/* Hero Section */}
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-12 md:gap-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <header className="space-y-4 md:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FFD700]/80 md:text-xs md:tracking-[0.45em]"
          >
            Preguntas Frecuentes
          </motion.p>
          <motion.h1
            id="faq-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="max-w-4xl text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Todo lo que necesitas saber sobre <span className="text-[#FFD700]">Boost Studio</span> y nuestros servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-3xl text-sm leading-relaxed text-slate-300/85 md:text-base"
          >
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de growth marketing, consultoría digital, precios, metodología y tiempos de implementación.
          </motion.p>
        </header>

        {/* FAQ List */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl md:rounded-3xl md:p-8 lg:p-10">
            {FAQ_DATA.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading" className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 py-12 text-center md:gap-8 md:py-16 lg:py-20">
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            ¿No encontraste tu respuesta?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="max-w-2xl text-sm leading-relaxed text-slate-300/85 md:text-base"
          >
            Agenda una consultoría gratuita con nuestro equipo y resolvemos todas tus dudas sobre cómo escalar tu negocio digital.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <AccentButton
              href={ROUTES.contact}
              className="bg-[#FFD700] px-6 py-3 text-base-950 shadow-none hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] md:px-8 md:py-4"
              aria-label="Contactar con Boost - Ir a formulario de contacto"
            >
              Contactar con Boost
            </AccentButton>
          </motion.div>
        </section>
      </div>
    </section>
  </>
)
